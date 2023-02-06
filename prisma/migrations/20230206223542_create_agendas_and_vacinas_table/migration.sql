-- AlterTable
ALTER TABLE "Agendas" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Agendas" ADD CONSTRAINT "Agendas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
