import { Request, Response } from 'express';

import prisma from '../lib/prismaClient';

interface AuthRequest extends Request {
  user?: { id: number };
}

const getDiagram = async (req: AuthRequest, res: Response) => {
  const { projectId } = req.query; // Изменено с req.params на req.query
  const userId = req.user?.id;

  try {
    console.log(
      'getDiagram called with projectId:',
      projectId,
      'userId:',
      userId
    );
    if (!userId) {
      console.error('No userId in request');
      return res.status(401).json({ message: 'Не авторизован' });
    }
    if (!projectId || typeof projectId !== 'string') {
      console.error('Invalid projectId:', projectId);
      return res.status(400).json({ message: 'Некорректный ID проекта' });
    }

    const projectIdNum = parseInt(projectId);
    if (isNaN(projectIdNum) || projectIdNum <= 0) {
      console.error('Parsed projectId is invalid:', projectIdNum);
      return res.status(400).json({ message: 'Некорректный ID проекта' });
    }

    const membership = await prisma.projectMember.findUnique({
      where: { userId_projectId: { userId, projectId: projectIdNum } },
    });
    if (!membership) {
      console.error(
        'User not a member of project:',
        projectIdNum,
        'userId:',
        userId
      );
      return res.status(403).json({ message: 'Нет доступа к проекту' });
    }

    const nodes = await prisma.diagramNode.findMany({
      where: { projectId: projectIdNum },
      include: {
        module: { select: { name: true } },
      },
    });

    const edges = await prisma.diagramEdge.findMany({
      where: { projectId: projectIdNum },
    });

    console.log(
      'Diagram fetched: nodes:',
      nodes.length,
      'edges:',
      edges.length
    );
    res.json({ nodes, edges });
  } catch (error) {
    console.error('Error in getDiagram:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const createNode = async (req: AuthRequest, res: Response) => {
  const { projectId, moduleId, label, positionX, positionY } = req.body;
  const userId = req.user?.id;

  try {
    console.log('createNode called with:', {
      projectId,
      moduleId,
      label,
      positionX,
      positionY,
    });
    if (!userId) {
      console.error('No userId in request');
      return res.status(401).json({ message: 'Не авторизован' });
    }
    const projectIdNum = parseInt(projectId);
    if (isNaN(projectIdNum) || projectIdNum <= 0) {
      console.error('Invalid projectId:', projectId);
      return res.status(400).json({ message: 'Некорректный ID проекта' });
    }

    const membership = await prisma.projectMember.findUnique({
      where: { userId_projectId: { userId, projectId: projectIdNum } },
    });
    if (!membership) {
      console.error(
        'User not a member of project:',
        projectIdNum,
        'userId:',
        userId
      );
      return res.status(403).json({ message: 'Нет доступа к проекту' });
    }

    if (moduleId) {
      const module = await prisma.module.findUnique({
        where: { id: moduleId },
      });
      if (!module) {
        console.error('Module not found:', moduleId);
        return res.status(404).json({ message: 'Модуль не найден' });
      }
    }

    const node = await prisma.diagramNode.create({
      data: {
        projectId: projectIdNum,
        moduleId,
        label,
        positionX,
        positionY,
      },
      include: {
        module: { select: { name: true } },
      },
    });

    console.log('Node created:', node);
    res.json({ node });
  } catch (error) {
    console.error('Error in createNode:', error);
    res.status(500).json({ message: 'Не удалось создать узел' });
  }
};

const updateNode = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { label, positionX, positionY } = req.body;
  const userId = req.user?.id;

  try {
    console.log('updateNode called for id:', id, 'with:', {
      label,
      positionX,
      positionY,
    });
    if (!userId) {
      console.error('No userId in request');
      return res.status(401).json({ message: 'Не авторизован' });
    }

    const node = await prisma.diagramNode.findUnique({
      where: { id },
      include: { project: true },
    });
    if (!node) {
      console.error('Node not found:', id);
      return res.status(404).json({ message: 'Узел не найден' });
    }

    const membership = await prisma.projectMember.findUnique({
      where: { userId_projectId: { userId, projectId: node.projectId } },
    });
    if (!membership) {
      console.error(
        'User not a member of project:',
        node.projectId,
        'userId:',
        userId
      );
      return res.status(403).json({ message: 'Нет доступа к проекту' });
    }

    const updatedNode = await prisma.diagramNode.update({
      where: { id },
      data: { label, positionX, positionY },
      include: {
        module: { select: { name: true } },
      },
    });

    console.log('Node updated:', updatedNode);
    res.json({ node: updatedNode });
  } catch (error) {
    console.error('Error in updateNode:', error);
    res.status(500).json({ message: 'Не удалось обновить узел' });
  }
};

const deleteNode = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const userId = req.user?.id;

  try {
    console.log('deleteNode called for id:', id);
    if (!userId) {
      console.error('No userId in request');
      return res.status(401).json({ message: 'Не авторизован' });
    }

    const node = await prisma.diagramNode.findUnique({
      where: { id },
      include: { project: true },
    });
    if (!node) {
      console.error('Node not found:', id);
      return res.status(404).json({ message: 'Узел не найден' });
    }

    const membership = await prisma.projectMember.findUnique({
      where: { userId_projectId: { userId, projectId: node.projectId } },
    });
    if (!membership) {
      console.error(
        'User not a member of project:',
        node.projectId,
        'userId:',
        userId
      );
      return res.status(403).json({ message: 'Нет доступа к проекту' });
    }

    await prisma.diagramEdge.deleteMany({
      where: { OR: [{ sourceId: id }, { targetId: id }] },
    });

    await prisma.diagramNode.delete({
      where: { id },
    });

    console.log('Node deleted:', id);
    res.json({ message: 'Узел удален' });
  } catch (error) {
    console.error('Error in deleteNode:', error);
    res.status(500).json({ message: 'Не удалось удалить узел' });
  }
};

const createEdge = async (req: AuthRequest, res: Response) => {
  const { projectId, sourceId, targetId } = req.body;
  const userId = req.user?.id;

  try {
    console.log('createEdge called with:', { projectId, sourceId, targetId });
    if (!userId) {
      console.error('No userId in request');
      return res.status(401).json({ message: 'Не авторизован' });
    }
    const projectIdNum = parseInt(projectId);
    if (isNaN(projectIdNum) || projectIdNum <= 0) {
      console.error('Invalid projectId:', projectId);
      return res.status(400).json({ message: 'Некорректный ID проекта' });
    }

    const membership = await prisma.projectMember.findUnique({
      where: { userId_projectId: { userId, projectId: projectIdNum } },
    });
    if (!membership) {
      console.error(
        'User not a member of project:',
        projectIdNum,
        'userId:',
        userId
      );
      return res.status(403).json({ message: 'Нет доступа к проекту' });
    }

    const sourceNode = await prisma.diagramNode.findUnique({
      where: { id: sourceId },
    });
    const targetNode = await prisma.diagramNode.findUnique({
      where: { id: targetId },
    });
    if (!sourceNode || !targetNode) {
      console.error('One of the nodes not found:', { sourceId, targetId });
      return res.status(404).json({ message: 'Один из узлов не найден' });
    }

    const edge = await prisma.diagramEdge.create({
      data: {
        projectId: projectIdNum,
        sourceId,
        targetId,
      },
    });

    console.log('Edge created:', edge);
    res.json({ edge });
  } catch (error) {
    console.error('Error in createEdge:', error);
    res.status(500).json({ message: 'Не удалось создать связь' });
  }
};

const deleteEdge = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const userId = req.user?.id;

  try {
    console.log('deleteEdge called for id:', id);
    if (!userId) {
      console.error('No userId in request');
      return res.status(401).json({ message: 'Не авторизован' });
    }

    const edge = await prisma.diagramEdge.findUnique({
      where: { id },
      include: { project: true },
    });
    if (!edge) {
      console.error('Edge not found:', id);
      return res.status(404).json({ message: 'Связь не найдена' });
    }

    const membership = await prisma.projectMember.findUnique({
      where: { userId_projectId: { userId, projectId: edge.projectId } },
    });
    if (!membership) {
      console.error(
        'User not a member of project:',
        edge.projectId,
        'userId:',
        userId
      );
      return res.status(403).json({ message: 'Нет доступа к проекту' });
    }

    await prisma.diagramEdge.delete({
      where: { id },
    });

    console.log('Edge deleted:', id);
    res.json({ message: 'Связь удалена' });
  } catch (error) {
    console.error('Error in deleteEdge:', error);
    res.status(500).json({ message: 'Не удалось удалить связь' });
  }
};

export {
  getDiagram,
  createNode,
  updateNode,
  deleteNode,
  createEdge,
  deleteEdge,
};
