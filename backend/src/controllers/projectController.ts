import { Request, Response } from 'express';

import prisma from '../lib/prismaClient';

interface UserPayload {
  id: number;
}

interface AuthRequest extends Request {
  user?: UserPayload;
}

// Получение роли пользователя в проекте
const getUserRoleInProject = async (userId: number, projectId: number) => {
  const membership = await prisma.projectMember.findUnique({
    where: {
      userId_projectId: { userId, projectId },
    },
  });
  return membership?.role || null;
};

const getProjectById = async (req: AuthRequest, res: Response) => {
  try {
    const projectId = parseInt(req.params.id);
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Не авторизован' });
    }
    if (isNaN(projectId)) {
      return res
        .status(400)
        .json({
          message: 'Некорректный ID проекта',
          id: projectId,
          type: typeof projectId,
        });
    }

    // Проверяем, является ли пользователь участником проекта
    const membership = await prisma.projectMember.findUnique({
      where: { userId_projectId: { userId, projectId } },
    });
    if (!membership) {
      return res.status(403).json({ message: 'Нет доступа к проекту' });
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        members: {
          include: {
            user: {
              select: { id: true, username: true },
            },
          },
        },
      },
    });
    if (!project) {
      return res.status(404).json({ message: 'Проект не найден' });
    }

    res.json({ project });
  } catch (error) {
    console.error('Ошибка в getProjectById:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const getProjects = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Не авторизован' });
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
              select: { id: true, username: true },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ projects });
  } catch (error) {
    console.error('Ошибка в getProjects:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const createProject = async (req: AuthRequest, res: Response) => {
  try {
    const { name } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Не авторизован' });
    }
    if (!name) {
      return res.status(400).json({ message: 'Название проекта обязательно' });
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
    console.error('Ошибка в createProject:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const inviteMember = async (req: AuthRequest, res: Response) => {
  try {
    const { projectId, username, role } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Не авторизован' });
    }

    const userRole = await getUserRoleInProject(userId, parseInt(projectId));
    if (!['creator', 'admin'].includes(userRole || '')) {
      return res.status(403).json({
        message:
          'Только создатель или администратор могут приглашать участников',
      });
    }
    if (!projectId || !username || !role) {
      return res
        .status(400)
        .json({ message: 'Необходимы ID проекта, имя пользователя и роль' });
    }
    if (!['admin', 'user'].includes(role)) {
      return res
        .status(400)
        .json({ message: 'Недопустимая роль. Должна быть admin или user' });
    }

    const project = await prisma.project.findUnique({
      where: { id: parseInt(projectId) },
      include: { members: true },
    });
    if (!project) {
      return res.status(404).json({ message: 'Проект не найден' });
    }

    const invitee = await prisma.user.findUnique({ where: { username } });
    if (!invitee) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    const existingMember = project.members.find(m => m.userId === invitee.id);
    if (existingMember) {
      return res
        .status(400)
        .json({ message: 'Пользователь уже является участником' });
    }

    await prisma.projectMember.create({
      data: {
        userId: invitee.id,
        projectId: project.id,
        role,
      },
    });

    res.json({ message: 'Участник успешно приглашен' });
  } catch (error) {
    console.error('Ошибка в inviteMember:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const removeMember = async (req: AuthRequest, res: Response) => {
  try {
    const { projectId, userId: memberId } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Не авторизован' });
    }

    const userRole = await getUserRoleInProject(userId, parseInt(projectId));
    if (!['creator', 'admin'].includes(userRole || '')) {
      return res.status(403).json({
        message: 'Только создатель или администратор могут удалять участников',
      });
    }
    if (!projectId || !memberId) {
      return res
        .status(400)
        .json({ message: 'Необходимы ID проекта и ID пользователя' });
    }

    const project = await prisma.project.findUnique({
      where: { id: parseInt(projectId) },
      include: { members: true },
    });
    if (!project) {
      return res.status(404).json({ message: 'Проект не найден' });
    }

    const member = project.members.find(m => m.userId === parseInt(memberId));
    if (!member) {
      return res.status(404).json({ message: 'Участник не найден в проекте' });
    }
    if (member.userId === userId && member.role === 'creator') {
      return res
        .status(400)
        .json({ message: 'Создатель не может удалить себя' });
    }

    await prisma.projectMember.deleteMany({
      where: {
        projectId: parseInt(projectId),
        userId: parseInt(memberId),
      },
    });

    res.json({ message: 'Участник успешно удален' });
  } catch (error) {
    console.error('Ошибка в removeMember:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const leaveProject = async (req: AuthRequest, res: Response) => {
  try {
    const { projectId } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Не авторизован' });
    }
    if (!projectId) {
      return res.status(400).json({ message: 'Необходим ID проекта' });
    }

    const project = await prisma.project.findUnique({
      where: { id: parseInt(projectId) },
      include: { members: true },
    });
    if (!project) {
      return res.status(404).json({ message: 'Проект не найден' });
    }

    const member = project.members.find(m => m.userId === userId);
    if (!member) {
      return res
        .status(404)
        .json({ message: 'Вы не являетесь участником этого проекта' });
    }
    if (member.role === 'creator') {
      return res
        .status(400)
        .json({ message: 'Создатель не может покинуть проект' });
    }

    await prisma.projectMember.deleteMany({
      where: {
        projectId: parseInt(projectId),
        userId,
      },
    });

    res.json({ message: 'Проект успешно покинут' });
  } catch (error) {
    console.error('Ошибка в leaveProject:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const updateProject = async (req: AuthRequest, res: Response) => {
  try {
    const projectId = parseInt(req.params.id);
    const { name } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Не авторизован' });
    }
    if (isNaN(projectId)) {
      return res.status(400).json({ message: 'Некорректный ID проекта' });
    }

    const userRole = await getUserRoleInProject(userId, projectId);
    if (userRole !== 'creator') {
      return res
        .status(403)
        .json({ message: 'Только создатель может обновлять проект' });
    }
    if (!name) {
      return res.status(400).json({ message: 'Необходима название проекта' });
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Проект не найден' });
    }

    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: { name },
    });

    res.json({ project: updatedProject });
  } catch (error) {
    console.error('Ошибка в updateProject:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const deleteProject = async (req: AuthRequest, res: Response) => {
  try {
    const projectId = parseInt(req.params.id);
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Не авторизован' });
    }
    if (isNaN(projectId)) {
      return res.status(400).json({ message: 'Некорректный ID проекта' });
    }

    const userRole = await getUserRoleInProject(userId, projectId);
    if (userRole !== 'creator') {
      return res
        .status(403)
        .json({ message: 'Только создатель может удалить проект' });
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Проект не найден' });
    }

    await prisma.project.delete({
      where: { id: projectId },
    });

    res.json({ message: 'Проект успешно удален' });
  } catch (error) {
    console.error('Ошибка в deleteProject:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const getProjectMembers = async (req: AuthRequest, res: Response) => {
  try {
    const projectId = parseInt(req.query.projectId as string);
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Не авторизован' });
    }
    if (isNaN(projectId)) {
      return res.status(400).json({
        message: `Некорректный ID проекта}`,
      });
    }

    // Проверяем, является ли пользователь участником проекта
    const membership = await prisma.projectMember.findUnique({
      where: { userId_projectId: { userId, projectId } },
    });
    if (!membership) {
      return res.status(403).json({ message: 'Нет доступа к проекту' });
    }

    const members = await prisma.projectMember.findMany({
      where: { projectId },
      select: {
        userId: true,
        user: {
          select: { id: true, username: true },
        },
      },
    });

    // Форматируем ответ для совместимости с фронтендом
    const formattedMembers = members.map(member => ({
      userId: member.userId,
      user: {
        username: member.user.username,
      },
    }));

    res.json({ members: formattedMembers });
  } catch (error) {
    console.error('Ошибка в getProjectMembers:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
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
  getProjectMembers,
};
