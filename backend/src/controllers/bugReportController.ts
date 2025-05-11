import { Request, Response } from 'express';

import prisma from '../lib/prismaClient';
import { sendWebhook } from '../service/webhokService';

const createBugReport = async (req: Request, res: Response) => {
  const {
    title,
    environment,
    version,
    priority,
    frequency,
    content,
    template,
    projectId,
    creatorId,
    testCaseId,
  } = req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (testCaseId) {
      const testCase = await prisma.testCase.findUnique({
        where: { id: testCaseId },
      });
      if (!testCase) {
        return res.status(404).json({ message: 'Test case not found' });
      }
    }
    const bugReport = await prisma.bugReport.create({
      data: {
        title,
        environment,
        version,
        priority,
        frequency,
        content,
        template,
        projectId,
        creatorId,
        testCaseId,
      },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        testCase: { select: { title: true } },
      },
    });

    // Send webhook for bug report creation
    await sendWebhook(
      'bug_report_created',
      {
        bugReportId: bugReport.id,
        title: bugReport.title,
        projectId: bugReport.projectId,
        creatorId: bugReport.creatorId,
        createdAt: bugReport.createdAt,
      },
      projectId
    );

    res.json({ bugReport });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create bug report' });
  }
};

const getAllBugReports = async (req: Request, res: Response) => {
  try {
    const bugReports = await prisma.bugReport.findMany({
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        testCase: { select: { title: true } },
      },
    });
    res.status(200).json({ bugReports });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bug reports' });
  }
};

const getBugReportById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const bugReport = await prisma.bugReport.findUnique({
      where: { id },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        testCase: { select: { title: true } },
      },
    });
    if (!bugReport) {
      return res.status(404).json({ message: 'Bug report not found' });
    }
    res.status(200).json({ bugReport });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bug report' });
  }
};

const editBugReport = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    title,
    environment,
    version,
    priority,
    frequency,
    content,
    template,
    projectId,
    testCaseId,
  } = req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (testCaseId) {
      const testCase = await prisma.testCase.findUnique({
        where: { id: testCaseId },
      });
      if (!testCase) {
        return res.status(404).json({ message: 'Test case not found' });
      }
    }
    const bugReport = await prisma.bugReport.update({
      where: { id },
      data: {
        title,
        environment,
        version,
        priority,
        frequency,
        content,
        template,
        projectId,
        testCaseId,
      },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
        testCase: { select: { title: true } },
      },
    });
    res.status(200).json({ bugReport });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update bug report' });
  }
};

const deleteBugReport = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const bugReport = await prisma.bugReport.findUnique({ where: { id } });
    if (!bugReport) {
      return res.status(404).json({ message: 'Bug report not found' });
    }
    await prisma.bugReport.delete({ where: { id } });
    res.status(200).json({ message: 'Bug report deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete bug report' });
  }
};

export {
  createBugReport,
  getAllBugReports,
  getBugReportById,
  editBugReport,
  deleteBugReport,
};
