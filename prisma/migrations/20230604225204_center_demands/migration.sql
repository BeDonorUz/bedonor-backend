-- CreateTable
CREATE TABLE "CenterDemand" (
    "id" SERIAL NOT NULL,
    "centerId" INTEGER NOT NULL,
    "group" "BloodGroupsEnum" NOT NULL,
    "type" "DonationTypeEnum" NOT NULL,
    "count" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CenterDemand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CenterDemand_centerId_group_type_key" ON "CenterDemand"("centerId", "group", "type");

-- AddForeignKey
ALTER TABLE "CenterDemand" ADD CONSTRAINT "CenterDemand_centerId_fkey" FOREIGN KEY ("centerId") REFERENCES "Center"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
