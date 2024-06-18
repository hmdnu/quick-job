/*
  Warnings:

  - A unique constraint covering the columns `[jobId]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workerId]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jobId` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workerId` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `job` DROP FOREIGN KEY `Job_clientId_fkey`;

-- AlterTable
ALTER TABLE `job` ADD COLUMN `jobId` VARCHAR(191) NOT NULL,
    ADD COLUMN `workerId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Job_jobId_key` ON `Job`(`jobId`);

-- CreateIndex
CREATE UNIQUE INDEX `Job_workerId_key` ON `Job`(`workerId`);

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `Job_workerId_fkey` FOREIGN KEY (`workerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
