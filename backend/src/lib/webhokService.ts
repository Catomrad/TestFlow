import axios from 'axios';
import prisma from './prismaClient';

async function sendWebhook(event: string, payload: any, projectId: number) {
  try {
    const webhooks = await prisma.webhook.findMany({
      where: {
        event,
        enabled: true,
        projectId,
      },
    });

    const promises = webhooks.map(async webhook => {
      try {
        await axios.post(webhook.url, {
          event,
          payload,
          timestamp: new Date().toISOString(),
        });
        console.log(`Webhook sent to ${webhook.url}`);
      } catch (error) {
        console.error(
          `Failed to send webhook to ${webhook.url}:`,
          (error as Error).message
        );
      }
    });

    await Promise.all(promises);
  } catch (error) {
    console.error('Error in sendWebhook:', (error as Error).message);
  }
}

export { sendWebhook };
