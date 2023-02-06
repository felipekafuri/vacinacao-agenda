/*
  Warnings:

  - You are about to drop the column `status` on the `Vacinas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Agendas" ADD COLUMN     "status" TEXT;

-- AlterTable
ALTER TABLE "Vacinas" DROP COLUMN "status";
