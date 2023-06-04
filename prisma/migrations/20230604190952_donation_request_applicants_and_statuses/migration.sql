/*
  Warnings:

  - Added the required column `applicantId` to the `DonationRequest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DonationRequestStatusEnum" AS ENUM ('PENDING', 'APPROVED', 'OUTDATED');

-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_requestId_fkey";

-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_userId_fkey";

-- AlterTable
ALTER TABLE "DonationRequest" ADD COLUMN     "applicantId" INTEGER NOT NULL,
ADD COLUMN     "status" "DonationRequestStatusEnum" NOT NULL DEFAULT 'PENDING';

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "DonationRequest"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonationRequest" ADD CONSTRAINT "DonationRequest_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
