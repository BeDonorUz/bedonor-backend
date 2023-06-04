/*
  Warnings:

  - Added the required column `status` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DonationStatusesEnum" AS ENUM ('PENDING', 'APPROVED', 'DECLINED');

-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "status" "DonationStatusesEnum" NOT NULL;
