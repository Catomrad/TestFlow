import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllTestCases = async (req: Request, res: Response) => {
  try {
    const testCases = await prisma.testCase.findMany();
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
    module,
    status,
    template,
    requiredTime,
    content,
    description,
    projectId,
  } = req.body;
  try {
    const testCase = await prisma.testCase.update({
      where: { id },
      data: {
        title,
        priority,
        class: className,
        module,
        status,
        template,
        requiredTime,
        content,
        description,
        projectId,
      },
    });
    res.status(200).json({ testCase });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update test case' });
  }
};

export { getAllTestCases, getTestCaseById, editTestCase };
