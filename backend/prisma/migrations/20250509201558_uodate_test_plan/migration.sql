/*
  Warnings:

  - You are about to drop the column `module` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the `_ProjectTestPlans` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `moduleId` to the `TestCase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProjectTestPlans" DROP CONSTRAINT "_ProjectTestPlans_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectTestPlans" DROP CONSTRAINT "_ProjectTestPlans_B_fkey";

-- AlterTable
ALTER TABLE "TestCase" DROP COLUMN "module",
ADD COLUMN     "moduleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TestPlan" ADD COLUMN     "softwareVersion" TEXT;

-- DropTable
DROP TABLE "_ProjectTestPlans";

-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestPlanTestCase" (
    "testPlanId" TEXT NOT NULL,
    "testCaseId" TEXT NOT NULL,

    CONSTRAINT "TestPlanTestCase_pkey" PRIMARY KEY ("testPlanId","testCaseId")
);

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestCase" ADD CONSTRAINT "TestCase_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestPlanTestCase" ADD CONSTRAINT "TestPlanTestCase_testPlanId_fkey" FOREIGN KEY ("testPlanId") REFERENCES "TestPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestPlanTestCase" ADD CONSTRAINT "TestPlanTestCase_testCaseId_fkey" FOREIGN KEY ("testCaseId") REFERENCES "TestCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
