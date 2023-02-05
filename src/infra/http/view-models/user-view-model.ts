import { User } from 'src/app/entities/User';

export class UserViewModel {
  static toHttp(user: User) {
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
}
