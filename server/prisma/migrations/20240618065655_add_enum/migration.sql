-- AlterTable
ALTER TABLE `post` MODIFY `status` ENUM('ONGOING', 'DONE', 'CANCELED', 'IDLE') NOT NULL;
