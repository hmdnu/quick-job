/*
  Warnings:

  - You are about to drop the column `customerId` on the `job` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clientId]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientId` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `job` DROP FOREIGN KEY `Job_customerId_fkey`;

-- AlterTable
ALTER TABLE `job` DROP COLUMN `customerId`,
    ADD COLUMN `clientId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Job_clientId_key` ON `Job`(`clientId`);

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `Job_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
