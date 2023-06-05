/*
  Warnings:

  - You are about to drop the column `userId` on the `Donation` table. All the data in the column will be lost.
  - Added the required column `donorId` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "DonationStatusesEnum" ADD VALUE 'APPROVE_REQUESTED';

-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_userId_fkey";

-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "userId",
ADD COLUMN     "donorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
