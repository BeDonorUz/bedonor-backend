/*
  Warnings:

  - The values [PosO,NegO] on the enum `BloodGroupsEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "BotLanguagesEnum" AS ENUM ('UZ', 'EN', 'RU');

-- AlterEnum
BEGIN;
CREATE TYPE "BloodGroupsEnum_new" AS ENUM ('PosA', 'PosB', 'PosAB', 'PosO', 'NegA', 'NegB', 'NegAB', 'NegO');
ALTER TABLE "DonationRequest" ALTER COLUMN "groups" TYPE "BloodGroupsEnum_new"[] USING ("groups"::text::"BloodGroupsEnum_new"[]);
ALTER TYPE "BloodGroupsEnum" RENAME TO "BloodGroupsEnum_old";
ALTER TYPE "BloodGroupsEnum_new" RENAME TO "BloodGroupsEnum";
DROP TYPE "BloodGroupsEnum_old";
COMMIT;

-- AlterEnum
ALTER TYPE "DonationTypeEnum" ADD VALUE 'PLATELETS';

-- AlterTable
ALTER TABLE "DonationRequest" ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL;

-- CreateTable
CREATE TABLE "BotLocales" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "text" TEXT NOT NULL,
    "language" "BotLanguagesEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BotLocales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BotUser" (
    "id" INTEGER NOT NULL,
    "language" "BotLanguagesEnum" NOT NULL,

    CONSTRAINT "BotUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BotLocalesToCity" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BotLocales_name_language_key" ON "BotLocales"("name", "language");

-- CreateIndex
CREATE UNIQUE INDEX "_BotLocalesToCity_AB_unique" ON "_BotLocalesToCity"("A", "B");

-- CreateIndex
CREATE INDEX "_BotLocalesToCity_B_index" ON "_BotLocalesToCity"("B");

-- AddForeignKey
ALTER TABLE "_BotLocalesToCity" ADD CONSTRAINT "_BotLocalesToCity_A_fkey" FOREIGN KEY ("A") REFERENCES "BotLocales"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BotLocalesToCity" ADD CONSTRAINT "_BotLocalesToCity_B_fkey" FOREIGN KEY ("B") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
