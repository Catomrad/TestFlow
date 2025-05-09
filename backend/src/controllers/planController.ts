import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createTestPlan = async (req: Request, res: Response) => {
  const { name, description, projectId, creatorId } = req.body;
  try {
    const testPlan = await prisma.testPlan.create({
      data: {
        name,
        description,
        projectId,
        creatorId,
      },
    });
    res.status(201).json({ testPlan });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create test plan' });
  }
};

const getAllTestPlans = async (req: Request, res: Response) => {
  try {
    const testPlans = await prisma.testPlan.findMany();
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
  const { name, description, projectId } = req.body;
  try {
    const testPlan = await prisma.testPlan.update({
      where: { id },
      data: {
        name,
        description,
        projectId,
      },
    });
    res.status(200).json({ testPlan });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update test plan' });
  }
};

export { createTestPlan, getAllTestPlans, getTestPlanById, editTestPlan };
