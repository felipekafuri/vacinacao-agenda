import { User as RawUser } from '@prisma/client';
import { User } from 'src/app/entities/User';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      nome: user.nome,
      data_nascimento: user.data_nascimento,
      sexo: user.sexo,
      logradouro: user.logradouro,
      numero: user.numero,
      cidade: user.cidade,
      uf: user.uf,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toDomain(raw: RawUser) {
    return new User({
      nome: raw.nome,
      data_nascimento: raw.data_nascimento,
      sexo: raw.sexo,
      logradouro: raw.logradouro,
      numero: raw.numero,
      cidade: raw.cidade,
      uf: raw.uf,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      id: raw.id,
    });
  }
}
