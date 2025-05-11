import { Request, Response } from 'express';

import prisma from '../lib/prismaClient';

const createWebhook = async (req: Request, res: Response) => {
  const { url, event, projectId, creatorId, enabled = true } = req.body;
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    const webhook = await prisma.webhook.create({
      data: { url, event, projectId, creatorId, enabled },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
      },
    });
    res.status(201).json({ webhook });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create webhook' });
  }
};

const getWebhooks = async (req: Request, res: Response) => {
  const { projectId } = req.query;
  try {
    const webhooks = await prisma.webhook.findMany({
      where: projectId ? { projectId: Number(projectId) } : undefined,
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
      },
    });
    res.status(200).json({ webhooks });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch webhooks' });
  }
};

const updateWebhook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { url, event, enabled } = req.body;
  try {
    const webhook = await prisma.webhook.update({
      where: { id: Number(id) },
      data: { url, event, enabled },
      include: {
        project: { select: { name: true } },
        creator: { select: { username: true } },
      },
    });
    res.status(200).json({ webhook });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update webhook' });
  }
};

const deleteWebhook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const webhook = await prisma.webhook.findUnique({
      where: { id: Number(id) },
    });
    if (!webhook) {
      return res.status(404).json({ message: 'Webhook not found' });
    }
    await prisma.webhook.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: 'Webhook deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete webhook' });
  }
};

export { createWebhook, getWebhooks, updateWebhook, deleteWebhook };
