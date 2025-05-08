/*
  Warnings:

  - You are about to drop the column `createdById` on the `Flowchart` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `Flowchart` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `ProjectMember` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `joinedAt` on the `ProjectMember` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `expected` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `steps` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `TestPlan` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `TestPlan` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,projectId]` on the table `ProjectMember` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Flowchart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `TestPlan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Flowchart" DROP CONSTRAINT "Flowchart_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Flowchart" DROP CONSTRAINT "Flowchart_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_createdById_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMember" DROP CONSTRAINT "ProjectMember_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMember" DROP CONSTRAINT "ProjectMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "TestCase" DROP CONSTRAINT "TestCase_createdById_fkey";

-- DropForeignKey
ALTER TABLE "TestCase" DROP CONSTRAINT "TestCase_planId_fkey";

-- DropForeignKey
ALTER TABLE "TestPlan" DROP CONSTRAINT "TestPlan_createdById_fkey";

-- DropForeignKey
ALTER TABLE "TestPlan" DROP CONSTRAINT "TestPlan_projectId_fkey";

-- AlterTable
ALTER TABLE "Flowchart" DROP COLUMN "createdById",
DROP COLUMN "data",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "createdById",
ADD COLUMN     "creatorId" INTEGER;

-- AlterTable
ALTER TABLE "ProjectMember" DROP CONSTRAINT "ProjectMember_pkey",
DROP COLUMN "joinedAt",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ProjectMember_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TestCase" DROP COLUMN "createdById",
DROP COLUMN "description",
DROP COLUMN "expected",
DROP COLUMN "steps",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TestPlan" DROP COLUMN "createdById",
DROP COLUMN "description",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'user';

-- CreateIndex
CREATE UNIQUE INDEX "ProjectMember_userId_projectId_key" ON "ProjectMember"("userId", "projectId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectMember" ADD CONSTRAINT "ProjectMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectMember" ADD CONSTRAINT "ProjectMember_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestPlan" ADD CONSTRAINT "TestPlan_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestPlan" ADD CONSTRAINT "TestPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestCase" ADD CONSTRAINT "TestCase_planId_fkey" FOREIGN KEY ("planId") REFERENCES "TestPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestCase" ADD CONSTRAINT "TestCase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flowchart" ADD CONSTRAINT "Flowchart_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flowchart" ADD CONSTRAINT "Flowchart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
