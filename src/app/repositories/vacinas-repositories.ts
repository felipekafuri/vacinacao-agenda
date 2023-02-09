import { Vacinas } from '@prisma/client';

export abstract class VacinasRepository {
  abstract findByNomeAndPeriodicidade(
    nome: string,
    periodicidade: string,
  ): Promise<Vacinas | undefined>;
  abstract getAll(): Promise<Vacinas[]>;
  abstract create(nome: string, periodicidade): Promise<Vacinas>;
  abstract delete(id: string): Promise<void>;
}
