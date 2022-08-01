-- CreateEnum
CREATE TYPE "BotLanguagesEnum" AS ENUM ('UZ', 'EN', 'RU');

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
