-- CreateEnum
CREATE TYPE "DonationTypeEnum" AS ENUM ('WHOLE_BLOOD', 'PLASMA');

-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "type" "DonationTypeEnum" NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
