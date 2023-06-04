-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "requestId" INTEGER;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "DonationRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
