import { Injectable } from '@nestjs/common';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/users-repositories';

@Injectable()
export class GetUsers {
  constructor(private usersRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.getAll();

    return users;
  }
}
