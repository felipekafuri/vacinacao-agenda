/*
  Warnings:

  - You are about to drop the column `agendaId` on the `Vacinas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Vacinas" DROP CONSTRAINT "Vacinas_agendaId_fkey";

-- AlterTable
ALTER TABLE "Vacinas" DROP COLUMN "agendaId",
ADD COLUMN     "agendasId" TEXT,
ADD COLUMN     "alergiaId" TEXT;

-- AddForeignKey
ALTER TABLE "Vacinas" ADD CONSTRAINT "Vacinas_alergiaId_fkey" FOREIGN KEY ("alergiaId") REFERENCES "Alergias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacinas" ADD CONSTRAINT "Vacinas_agendasId_fkey" FOREIGN KEY ("agendasId") REFERENCES "Agendas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
