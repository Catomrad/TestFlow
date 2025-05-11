import { Request, Response } from 'express';

import prisma from '../lib/prismaClient';

const createTestPlan = async (req: Request, res: Response) => {
  const {
    name,
    description,
    softwareVersion,
    projectId,
    creatorId,
    testCaseIds,
  } = req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    const testPlan = await prisma.testPlan.create({
      data: {
        name,
        description,
        softwareVersion,
        projectId,
        creatorId,
        testCases: testCaseIds
          ? {
              create: testCaseIds.map((testCaseId: string) => ({
                testCase: { connect: { id: testCaseId } },
              })),
            }
          : undefined,
      },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        testCases: { include: { testCase: true } },
      },
    });
    res.status(201).json({ testPlan });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create test plan' });
  }
};

const getAllTestPlans = async (req: Request, res: Response) => {
  try {
    const testPlans = await prisma.testPlan.findMany({
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        testCases: { include: { testCase: true } },
      },
    });
    res.status(200).json({ testPlans });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch test plans' });
  }
};

const getTestPlanById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const testPlan = await prisma.testPlan.findUnique({
      where: { id },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        testCases: { include: { testCase: true } },
      },
    });
    if (!testPlan) {
      return res.status(404).json({ message: 'Test plan not found' });
    }
    res.status(200).json({ testPlan });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch test plan' });
  }
};

const editTestPlan = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, softwareVersion, projectId, testCaseIds } =
    req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    const testPlan = await prisma.testPlan.update({
      where: { id },
      data: {
        name,
        description,
        softwareVersion,
        projectId,
        testCases: testCaseIds
          ? {
              deleteMany: {},
              create: testCaseIds.map((testCaseId: string) => ({
                testCase: { connect: { id: testCaseId } },
              })),
            }
          : undefined,
      },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        testCases: { include: { testCase: true } },
      },
    });
    res.status(200).json({ testPlan });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update test plan' });
  }
};

const deleteTestPlan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const testPlan = await prisma.testPlan.findUnique({ where: { id } });
    if (!testPlan) {
      return res.status(404).json({ message: 'Test plan not found' });
    }
    await prisma.testPlan.delete({ where: { id } });
    res.status(200).json({ message: 'Test plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete test plan' });
  }
};

export {
  createTestPlan,
  getAllTestPlans,
  getTestPlanById,
  editTestPlan,
  deleteTestPlan,
};
