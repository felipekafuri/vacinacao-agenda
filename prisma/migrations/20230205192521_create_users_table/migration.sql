-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "data_nascimento" TIMESTAMP(3),
    "sexo" TEXT,
    "logradouro" TEXT,
    "numero" TEXT,
    "setor" TEXT,
    "cidade" TEXT,
    "uf" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
