-- AlterTable
ALTER TABLE "Agendas" ADD COLUMN     "alergiaId" TEXT,
ADD COLUMN     "vacinaId" TEXT;

-- AddForeignKey
ALTER TABLE "Agendas" ADD CONSTRAINT "Agendas_alergiaId_fkey" FOREIGN KEY ("alergiaId") REFERENCES "Alergias"("id") ON DELETE SET NULL ON UPDATE CASCADE;
