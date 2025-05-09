import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createTestCase = async (req: Request, res: Response) => {
  try {
    const {
      title,
      priority,
      class: testCaseClass,
      module,
      status,
      template,
      requiredTime,
      content,
      description,
      projectId,
      creatorId,
    } = req.body;

    if (!title || !projectId || !creatorId) {
      return res
        .status(400)
        .json({ message: 'Title, projectId, and creatorId are required' });
    }

    // Проверка доступа к проекту
    const projectMember = await prisma.projectMember.findFirst({
      where: { projectId, userId: creatorId },
    });
    if (!projectMember) {
      return res.status(403).json({ message: 'User is not a project member' });
    }

    const testCase = await prisma.testCase.create({
      data: {
        title,
        priority,
        class: testCaseClass,
        module,
        status,
        template,
        requiredTime,
        content,
        description,
        projectId,
        creatorId,
      },
    });

    res.status(201).json({ testCase });
  } catch (error: any) {
    console.error('Error in createTestCase:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { createTestCase };
