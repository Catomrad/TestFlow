import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UserPayload {
  id: number;
  role: string;
  membershipRole?: string;
}

interface AuthRequest extends Request {
  user?: UserPayload;
}
const getProjectById = async (req: AuthRequest, res: Response) => {
  try {
    const projectId = parseInt(req.params.id);
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const project = await prisma.project.findUnique({
      where: { id: projectId },
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
    res.json({ project });
  } catch (error) {
    console.error('Error in getProjectById:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getProjects = async (req: AuthRequest, res: Response) => {
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
      orderBy: { createdAt: 'desc' },
    });

    res.json({ projects });
  } catch (error) {
    console.error('Error in getProjects:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const createProject = async (req: AuthRequest, res: Response) => {
  try {
    const { name } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (!name) {
      return res.status(400).json({ message: 'Project name is required' });
    }

    const project = await prisma.$transaction(async prisma => {
      const newProject = await prisma.project.create({
        data: {
          name,
          creatorId: userId,
        },
      });
      await prisma.projectMember.create({
        data: {
          userId,
          projectId: newProject.id,
          role: 'creator',
        },
      });
      return newProject;
    });

    res.json({ project });
  } catch (error) {
    console.error('Error in createProject:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const inviteMember = async (req: AuthRequest, res: Response) => {
  try {
    const { projectId, username, role } = req.body;
    const userId = req.user?.id;
    const membershipRole = req.user?.membershipRole;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (!['creator', 'admin'].includes(membershipRole || '')) {
      return res
        .status(403)
        .json({ message: 'Only creator or admin can invite members' });
    }
    if (!projectId || !username || !role) {
      return res
        .status(400)
        .json({ message: 'Project ID, username, and role are required' });
    }
    if (!['admin', 'user'].includes(role)) {
      return res
        .status(400)
        .json({ message: 'Invalid role. Must be admin or user' });
    }

    const project = await prisma.project.findUnique({
      where: { id: parseInt(projectId) },
      include: { members: true },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const invitee = await prisma.user.findUnique({ where: { username } });
    if (!invitee) {
      return res.status(404).json({ message: 'User not found' });
    }

    const existingMember = project.members.find(m => m.userId === invitee.id);
    if (existingMember) {
      return res.status(400).json({ message: 'User is already a member' });
    }

    await prisma.projectMember.create({
      data: {
        userId: invitee.id,
        projectId: project.id,
        role,
      },
    });

    res.json({ message: 'Member invited successfully' });
  } catch (error) {
    console.error('Error in inviteMember:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const removeMember = async (req: AuthRequest, res: Response) => {
  try {
    const { projectId, userId: memberId } = req.body;
    const userId = req.user?.id;
    const membershipRole = req.user?.membershipRole;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (!['creator', 'admin'].includes(membershipRole || '')) {
      return res
        .status(403)
        .json({ message: 'Only creator or admin can remove members' });
    }
    if (!projectId || !memberId) {
      return res
        .status(400)
        .json({ message: 'Project ID and user ID are required' });
    }

    const project = await prisma.project.findUnique({
      where: { id: parseInt(projectId) },
      include: { members: true },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const member = project.members.find(m => m.userId === parseInt(memberId));
    if (!member) {
      return res.status(404).json({ message: 'Member not found in project' });
    }
    if (member.userId === userId && member.role === 'creator') {
      return res
        .status(400)
        .json({ message: 'Creator cannot remove themselves' });
    }

    await prisma.projectMember.deleteMany({
      where: {
        projectId: parseInt(projectId),
        userId: parseInt(memberId),
      },
    });

    res.json({ message: 'Member removed successfully' });
  } catch (error) {
    console.error('Error in removeMember:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const leaveProject = async (req: AuthRequest, res: Response) => {
  try {
    const { projectId } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (!projectId) {
      return res.status(400).json({ message: 'Project ID is required' });
    }

    const project = await prisma.project.findUnique({
      where: { id: parseInt(projectId) },
      include: { members: true },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const member = project.members.find(m => m.userId === userId);
    if (!member) {
      return res
        .status(404)
        .json({ message: 'You are not a member of this project' });
    }
    if (member.role === 'creator') {
      return res
        .status(400)
        .json({ message: 'Creator cannot leave the project' });
    }

    await prisma.projectMember.deleteMany({
      where: {
        projectId: parseInt(projectId),
        userId,
      },
    });

    res.json({ message: 'Left project successfully' });
  } catch (error) {
    console.error('Error in leaveProject:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateProject = async (req: AuthRequest, res: Response) => {
  try {
    console.log(`updateProject called for projectId: ${req.params.id}`);
    const projectId = parseInt(req.params.id);
    const { name } = req.body;
    const userId = req.user?.id;
    const membershipRole = req.user?.membershipRole;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (membershipRole !== 'creator') {
      return res
        .status(403)
        .json({ message: 'Only creator can update projects' });
    }
    if (!projectId || !name) {
      return res
        .status(400)
        .json({ message: 'Project ID and name are required' });
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (project.creatorId !== userId) {
      return res
        .status(403)
        .json({ message: 'Only project creator can update project' });
    }

    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: { name },
    });

    res.json({ project: updatedProject });
  } catch (error) {
    console.error('Error in updateProject:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteProject = async (req: AuthRequest, res: Response) => {
  try {
    const projectId = parseInt(req.params.id);
    const userId = req.user?.id;
    const membershipRole = req.user?.membershipRole;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (membershipRole !== 'creator') {
      return res
        .status(403)
        .json({ message: 'Only creator can delete projects' });
    }
    if (!projectId) {
      return res.status(400).json({ message: 'Project ID is required' });
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (project.creatorId !== userId) {
      return res
        .status(403)
        .json({ message: 'Only project creator can delete project' });
    }

    // Проверяем связанные записи (для отладки)
    console.log('Checking related records for projectId:', projectId);
    const testPlans = await prisma.testPlan.findMany({ where: { projectId } });
    console.log('Found TestPlans:', testPlans);
    const flowcharts = await prisma.flowchart.findMany({
      where: { projectId },
    });
    console.log('Found Flowcharts:', flowcharts);
    console.log('Project creatorId:', project.creatorId);

    // Удаление проекта (TestPlan, Flowchart, ProjectMember удаляются автоматически)
    console.log('Deleting Project for projectId:', projectId);
    await prisma.project.delete({
      where: { id: projectId },
    });
    console.log('Project deleted');

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error in deleteProject:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export {
  getProjectById,
  getProjects,
  createProject,
  inviteMember,
  removeMember,
  leaveProject,
  updateProject,
  deleteProject,
};
