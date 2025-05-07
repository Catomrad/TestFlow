import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getProjects = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const projects = await prisma.project.findMany({
      where: {
        members: {
          some: { userId },
        },
      },
      include: {
        members: {
          include: {
            user: {
              select: { id: true, username: true, role: true },
            },
          },
        },
      },
    });

    res.json({ projects });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createProject = async (req: Request, res: Response) => {
  const { name } = req.body;
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Only admins can create projects' });
  }
  if (!name) {
    return res.status(400).json({ message: 'Project name is required' });
  }

  try {
    const project = await prisma.$transaction(async prisma => {
      const newProject = await prisma.project.create({
        data: {
          name,
          createdById: userId,
        },
      });
      await prisma.projectMember.create({
        data: {
          userId,
          projectId: newProject.id,
          role: 'admin',
        },
      });
      return newProject;
    });
    res.json({ project });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

const inviteUser = async (req: Request, res: Response) => {
  const { projectId, username } = req.body;
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Only admins can invite users' });
  }
  if (!projectId || !username) {
    return res
      .status(400)
      .json({ message: 'Project ID and username are required' });
  }

  try {
    const project = await prisma.project.findUnique({
      where: { id: parseInt(projectId) },
      include: { members: true },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (project.createdById !== userId) {
      return res
        .status(403)
        .json({ message: 'Only project creator can invite users' });
    }

    const invitee = await prisma.user.findUnique({ where: { username } });
    if (!invitee) {
      return res.status(404).json({ message: 'User not found' });
    }

    const existingMember = project.members.find(
      (m: any) => m.userId === invitee.id
    );
    if (existingMember) {
      return res.status(400).json({ message: 'User is already a member' });
    }

    await prisma.projectMember.create({
      data: {
        userId: invitee.id,
        projectId: project.id,
        role: 'user',
      },
    });
    res.json({ message: 'user invited succsessfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

export { getProjects, createProject, inviteUser };
