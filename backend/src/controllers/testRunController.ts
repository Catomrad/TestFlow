import { Request, Response } from 'express';

import prisma from '../lib/prismaClient';

const createTestRun = async (req: Request, res: Response) => {
  const {
    title,
    content,
    status,
    plannedDate,
    completionDate,
    projectId,
    testPlanId,
    responsibleId,
  } = req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (testPlanId) {
      const testPlan = await prisma.testPlan.findUnique({
        where: { id: testPlanId },
      });
      if (!testPlan) {
        return res.status(404).json({ message: 'Test plan not found' });
      }
    }
    const responsible = await prisma.projectMember.findFirst({
      where: { userId: responsibleId, projectId },
    });
    if (!responsible) {
      return res
        .status(404)
        .json({ message: 'Responsible user not a project member' });
    }
    const testRun = await prisma.testRun.create({
      data: {
        title,
        content,
        status: status || 'planned',
        plannedDate: new Date(plannedDate),
        completionDate: completionDate ? new Date(completionDate) : null,
        projectId,
        testPlanId,
        responsibleId,
      },
      include: {
        project: { select: { name: true } },
        testPlan: { select: { name: true } },
        responsible: { select: { username: true } },
      },
    });
    res.json({ testRun });
  } catch (error) {
    console.error('Error in createTestRun:', error);
    res.status(500).json({ message: 'Failed to create test run' });
  }
};

const getAllTestRuns = async (req: Request, res: Response) => {
  try {
    const testRuns = await prisma.testRun.findMany({
      include: {
        project: { select: { name: true } },
        testPlan: { select: { name: true } },
        responsible: { select: { username: true } },
      },
    });
    res.status(200).json({ testRuns });
  } catch (error) {
    console.error('Error in getAllTestRuns:', error);
    res.status(500).json({ message: 'Failed to fetch test runs' });
  }
};

const getTestRunById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const testRun = await prisma.testRun.findUnique({
      where: { id },
      include: {
        project: { select: { name: true } },
        testPlan: { select: { name: true } },
        responsible: { select: { username: true } },
      },
    });
    if (!testRun) {
      return res.status(404).json({ message: 'Test run not found' });
    }
    res.status(200).json({ testRun });
  } catch (error) {
    console.error('Error in getTestRunById:', error);
    res.status(500).json({ message: 'Failed to fetch test run' });
  }
};

const editTestRun = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    title,
    content,
    status,
    plannedDate,
    completionDate,
    projectId,
    testPlanId,
    responsibleId,
  } = req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (testPlanId) {
      const testPlan = await prisma.testPlan.findUnique({
        where: { id: testPlanId },
      });
      if (!testPlan) {
        return res.status(404).json({ message: 'Test plan not found' });
      }
    }
    const responsible = await prisma.projectMember.findFirst({
      where: { userId: responsibleId, projectId },
    });
    if (!responsible) {
      return res
        .status(404)
        .json({ message: 'Responsible user not a project member' });
    }
    const testRun = await prisma.testRun.update({
      where: { id },
      data: {
        title,
        content,
        status,
        plannedDate: new Date(plannedDate),
        completionDate: completionDate ? new Date(completionDate) : null,
        projectId,
        testPlanId,
        responsibleId,
      },
      include: {
        project: { select: { name: true } },
        testPlan: { select: { name: true } },
        responsible: { select: { username: true } },
      },
    });
    res.status(200).json({ testRun });
  } catch (error) {
    console.error('Error in editTestRun:', error);
    res.status(500).json({ message: 'Failed to update test run' });
  }
};

const deleteTestRun = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const testRun = await prisma.testRun.findUnique({ where: { id } });
    if (!testRun) {
      return res.status(404).json({ message: 'Test run not found' });
    }
    await prisma.testRun.delete({ where: { id } });
    res.status(200).json({ message: 'Test run deleted successfully' });
  } catch (error) {
    console.error('Error in deleteTestRun:', error);
    res.status(500).json({ message: 'Failed to delete test run' });
  }
};

const startTestRun = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const testRun = await prisma.testRun.findUnique({ where: { id } });
    if (!testRun) {
      return res.status(404).json({ message: 'Test run not found' });
    }
    if (testRun.status !== 'planned') {
      return res.status(400).json({ message: 'Test run cannot be started' });
    }
    const updatedTestRun = await prisma.testRun.update({
      where: { id },
      data: { status: 'in_progress' },
      include: {
        project: { select: { name: true } },
        testPlan: { select: { name: true } },
        responsible: { select: { username: true } },
      },
    });
    res.status(200).json({ testRun: updatedTestRun });
  } catch (error) {
    console.error('Error in startTestRun:', error);
    res.status(500).json({ message: 'Failed to start test run' });
  }
};

const completeTestRun = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const testRun = await prisma.testRun.findUnique({ where: { id } });
    if (!testRun) {
      return res.status(404).json({ message: 'Test run not found' });
    }
    if (testRun.status !== 'in_progress') {
      return res.status(400).json({ message: 'Test run cannot be completed' });
    }
    const updatedTestRun = await prisma.testRun.update({
      where: { id },
      data: {
        status: 'completed',
        completionDate: new Date(),
      },
      include: {
        project: { select: { name: true } },
        testPlan: { select: { name: true } },
        responsible: { select: { username: true } },
      },
    });
    res.status(200).json({ testRun: updatedTestRun });
  } catch (error) {
    console.error('Error in completeTestRun:', error);
    res.status(500).json({ message: 'Failed to complete test run' });
  }
};

export {
  createTestRun,
  getAllTestRuns,
  getTestRunById,
  editTestRun,
  deleteTestRun,
  startTestRun,
  completeTestRun,
};
