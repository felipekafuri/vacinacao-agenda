import { Vacinas as RawVacina } from '@prisma/client';
import { Vacinas } from 'src/app/entities/Vacinas';

export class PrismaVacinasMapper {
  static toPrisma(vacina: Vacinas) {
    return {
      id: vacina.id,
      nome: vacina.nome,
      periodicidade: vacina.periodicidade,
    };
  }

  static toDomain(raw: RawVacina) {
    return raw;
  }
}
