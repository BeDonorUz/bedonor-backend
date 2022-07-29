-- CreateEnum
CREATE TYPE "BotLanguagesEnum" AS ENUM ('EN', 'UZ', 'RU');

-- CreateTable
CREATE TABLE "BotLocales" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "text" TEXT NOT NULL,
    "language" "BotLanguagesEnum" NOT NULL,

    CONSTRAINT "BotLocales_pkey" PRIMARY KEY ("id")
);
