/*
  Warnings:

  - Added the required column `latitude` to the `Center` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Center` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Center" ADD COLUMN     "latitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "longitude" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "City" ADD COLUMN     "latitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "longitude" DECIMAL(65,30) NOT NULL;
