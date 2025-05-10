import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createTestCase = async (req: Request, res: Response) => {
  const {
    title,
    priority,
    class: className,
    moduleId,
    status,
    template,
    requiredTime,
    content,
    description,
    projectId,
    creatorId,
  } = req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    const module = await prisma.module.findUnique({ where: { id: moduleId } });
    if (!module) {
      return res.status(404).json({ message: 'Module not found' });
    }
    const testCase = await prisma.testCase.create({
      data: {
        title,
        priority,
        class: className,
        moduleId,
        status,
        template,
        requiredTime,
        content,
        description,
        projectId,
        creatorId,
      },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        module: { select: { name: true } },
      },
    });
    res.json({ testCase });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create test case' });
  }
};

const getAllTestCases = async (req: Request, res: Response) => {
  try {
    const testCases = await prisma.testCase.findMany({
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        module: { select: { name: true } },
      },
    });
    res.status(200).json({ testCases });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch test cases' });
  }
};

const getTestCaseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const testCase = await prisma.testCase.findUnique({
      where: { id },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        module: { select: { name: true } },
      },
    });
    if (!testCase) {
      return res.status(404).json({ message: 'Test case not found' });
    }
    res.status(200).json({ testCase });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch test case' });
  }
};

const editTestCase = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    title,
    priority,
    class: className,
    moduleId,
    status,
    template,
    requiredTime,
    content,
    description,
    projectId,
  } = req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    const module = await prisma.module.findUnique({ where: { id: moduleId } });
    if (!module) {
      return res.status(404).json({ message: 'Module not found' });
    }
    const testCase = await prisma.testCase.update({
      where: { id },
      data: {
        title,
        priority,
        class: className,
        moduleId,
        status,
        template,
        requiredTime,
        content,
        description,
        projectId,
      },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        module: { select: { name: true } },
      },
    });
    res.status(200).json({ testCase });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update test case' });
  }
};

const deleteTestCase = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const testCase = await prisma.testCase.findUnique({ where: { id } });
    if (!testCase) {
      return res.status(404).json({ message: 'Test case not found' });
    }
    await prisma.testCase.delete({ where: { id } });
    res.status(200).json({ message: 'Test case deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete test case' });
  }
};

export {
  createTestCase,
  getAllTestCases,
  getTestCaseById,
  editTestCase,
  deleteTestCase,
};
