import { Alergias as RawAlergia } from '@prisma/client';
import { Alergia } from 'src/app/entities/Alergia';

export class PrismaAlergiaMapper {
  static toPrisma(alergia: Alergia) {
    return {
      id: alergia.id,
      nome: alergia.nome,
    };
  }

  static toDomain(raw: RawAlergia) {
    return new Alergia(
      {
        nome: raw.nome,
        userId: raw.userId,
      },
      raw.id,
    );
  }

  static toDomainUser(raw: RawAlergia, user_name: string) {
    const alergia = new Alergia(
      {
        id: raw.id,
        nome: raw.nome,
        userId: raw.userId,
      },
      raw.id,
    );
    return {
      nome: alergia.nome,
      id: raw.id,
      user_name,
    };
  }
}
