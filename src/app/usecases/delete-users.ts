import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/users-repositories';

@Injectable()
export class DeleteUsers {
  constructor(private usersRepository: UserRepository) {}

  async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    await this.usersRepository.delete(id);
  }
}
