/*
  Warnings:

  - The primary key for the `TestCase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `planId` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `TestCase` table. All the data in the column will be lost.
  - The primary key for the `TestPlan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `TestPlan` table. All the data in the column will be lost.
  - Added the required column `class` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `module` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requiredTime` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `template` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `TestCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `TestPlan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TestCase" DROP CONSTRAINT "TestCase_planId_fkey";

-- DropForeignKey
ALTER TABLE "TestCase" DROP CONSTRAINT "TestCase_userId_fkey";

-- DropForeignKey
ALTER TABLE "TestPlan" DROP CONSTRAINT "TestPlan_userId_fkey";

-- AlterTable
ALTER TABLE "TestCase" DROP CONSTRAINT "TestCase_pkey",
DROP COLUMN "name",
DROP COLUMN "planId",
DROP COLUMN "userId",
ADD COLUMN     "class" TEXT NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "creatorId" INTEGER,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "module" TEXT NOT NULL,
ADD COLUMN     "priority" TEXT NOT NULL,
ADD COLUMN     "projectId" INTEGER NOT NULL,
ADD COLUMN     "requiredTime" JSONB NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "template" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "TestCase_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TestCase_id_seq";

-- AlterTable
ALTER TABLE "TestPlan" DROP CONSTRAINT "TestPlan_pkey",
DROP COLUMN "userId",
ADD COLUMN     "creatorId" INTEGER,
ADD COLUMN     "description" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "TestPlan_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TestPlan_id_seq";

-- CreateTable
CREATE TABLE "_ProjectTestPlans" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectTestPlans_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectTestPlans_B_index" ON "_ProjectTestPlans"("B");

-- AddForeignKey
ALTER TABLE "TestPlan" ADD CONSTRAINT "TestPlan_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestCase" ADD CONSTRAINT "TestCase_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestCase" ADD CONSTRAINT "TestCase_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectTestPlans" ADD CONSTRAINT "_ProjectTestPlans_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectTestPlans" ADD CONSTRAINT "_ProjectTestPlans_B_fkey" FOREIGN KEY ("B") REFERENCES "TestPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
