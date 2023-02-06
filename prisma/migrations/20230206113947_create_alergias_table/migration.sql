-- CreateTable
CREATE TABLE "Alergias" (
    "id" TEXT NOT NULL,
    "nome" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Alergias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alergias" ADD CONSTRAINT "Alergias_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
