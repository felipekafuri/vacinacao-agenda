import { Injectable } from '@nestjs/common';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/users-repositories';

interface CreateUserRequest {
  nome: string;
  data_nascimento: Date;
  sexo: string;
  logradouro: string;
  numero: string;
  cidade: string;
  uf: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUsers {
  constructor(private usersRepository: UserRepository) {}

  async execute({
    nome,
    data_nascimento,
    sexo,
    logradouro,
    numero,
    cidade,
    uf,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User({
      nome,
      data_nascimento,
      sexo,
      logradouro,
      numero,
      cidade,
      uf,
    });

    const userAlreadyExists =
      await this.usersRepository.findByNameNumberAndBirthDate(
        nome,
        numero,
        data_nascimento,
      );

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    await this.usersRepository.create(user);

    return {
      user,
    };
  }
}
