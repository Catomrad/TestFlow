import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createTestPlan = async (req: Request, res: Response) => {
  try {
    const { name, description, projectId, creatorId } = req.body;

    if (!name || !projectId || !creatorId) {
      return res
        .status(400)
        .json({ message: 'Name, projectId, and creatorId are required' });
    }

    // Проверка доступа к проекту
    const projectMember = await prisma.projectMember.findFirst({
      where: { projectId, userId: creatorId },
    });
    if (!projectMember) {
      return res.status(403).json({ message: 'User is not a project member' });
    }

    const testPlan = await prisma.testPlan.create({
      data: {
        name,
        description,
        projectId,
        creatorId,
      },
    });

    res.status(201).json({ testPlan });
  } catch (error: any) {
    console.error('Error in createTestPlan:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { createTestPlan };
