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

-- CreateIndex
CREATE UNIQUE INDEX "BotLocales_name_language_key" ON "BotLocales"("name", "language");
