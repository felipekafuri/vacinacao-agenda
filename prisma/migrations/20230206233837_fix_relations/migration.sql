/*
  Warnings:

  - You are about to drop the column `agendasId` on the `Vacinas` table. All the data in the column will be lost.
  - You are about to drop the column `alergiaId` on the `Vacinas` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Vacinas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Vacinas" DROP CONSTRAINT "Vacinas_agendasId_fkey";

-- DropForeignKey
ALTER TABLE "Vacinas" DROP CONSTRAINT "Vacinas_alergiaId_fkey";

-- DropForeignKey
ALTER TABLE "Vacinas" DROP CONSTRAINT "Vacinas_userId_fkey";

-- AlterTable
ALTER TABLE "Vacinas" DROP COLUMN "agendasId",
DROP COLUMN "alergiaId",
DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "Agendas" ADD CONSTRAINT "Agendas_vacinaId_fkey" FOREIGN KEY ("vacinaId") REFERENCES "Vacinas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
