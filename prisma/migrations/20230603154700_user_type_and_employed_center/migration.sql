/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRolesEnum" AS ENUM ('DONOR', 'APPLICANT', 'CENTER_ADMIN', 'SYSTEM_ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "employedCenterId" INTEGER,
ADD COLUMN     "role" "UserRolesEnum" NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_employedCenterId_fkey" FOREIGN KEY ("employedCenterId") REFERENCES "Center"("id") ON DELETE SET NULL ON UPDATE CASCADE;
