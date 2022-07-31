-- CreateEnum
CREATE TYPE "BloodGroupsEnum" AS ENUM ('PosA', 'PosB', 'PosAB', 'PosO', 'NegA', 'NegB', 'NegAB', 'NegO');

-- CreateTable
CREATE TABLE "DonationRequest" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(64) NOT NULL,
    "lastName" VARCHAR(64) NOT NULL,
    "patronymic" VARCHAR(64),
    "type" "DonationTypeEnum" NOT NULL,
    "groups" "BloodGroupsEnum"[],
    "count" INTEGER NOT NULL,
    "centerId" INTEGER NOT NULL,
    "dateTo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DonationRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DonationRequest" ADD CONSTRAINT "DonationRequest_centerId_fkey" FOREIGN KEY ("centerId") REFERENCES "Center"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
