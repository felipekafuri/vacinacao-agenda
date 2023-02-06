-- CreateTable
CREATE TABLE "Agendas" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agendas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vacinas" (
    "id" TEXT NOT NULL,
    "nome" TEXT,
    "periodicidade" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "agendaId" TEXT,

    CONSTRAINT "Vacinas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vacinas" ADD CONSTRAINT "Vacinas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacinas" ADD CONSTRAINT "Vacinas_agendaId_fkey" FOREIGN KEY ("agendaId") REFERENCES "Agendas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
