import { Request, Response } from 'express';

import prisma from '../lib/prismaClient';

const createModule = async (req: Request, res: Response) => {
  const { name, projectId } = req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    const module = await prisma.module.create({
      data: {
        name,
        projectId,
      },
      include: {
        project: { select: { name: true } },
      },
    });
    res.status(201).json({ module });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create module' });
  }
};

const getAllModules = async (req: Request, res: Response) => {
  const { projectId } = req.query;
  try {
    const modules = await prisma.module.findMany({
      where: projectId
        ? { projectId: parseInt(projectId as string) }
        : undefined,
      include: {
        project: { select: { name: true } },
      },
    });
    res.status(200).json({ modules });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch modules' });
  }
};

const getModuleById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const module = await prisma.module.findUnique({
      where: { id: parseInt(id) },
      include: {
        project: { select: { name: true } },
      },
    });
    if (!module) {
      return res.status(404).json({ message: 'Module not found' });
    }
    res.status(200).json({ module });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch module' });
  }
};

const editModule = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, projectId } = req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    const module = await prisma.module.update({
      where: { id: parseInt(id) },
      data: {
        name,
        projectId,
      },
      include: {
        project: { select: { name: true } },
      },
    });
    res.status(200).json({ module });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update module' });
  }
};

const deleteModule = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const module = await prisma.module.findUnique({
      where: { id: parseInt(id) },
    });
    if (!module) {
      return res.status(404).json({ message: 'Module not found' });
    }
    await prisma.module.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: 'Module deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete module' });
  }
};

export { createModule, getAllModules, getModuleById, editModule, deleteModule };
