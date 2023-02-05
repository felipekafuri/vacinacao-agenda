import { Injectable } from '@nestjs/common';
import { User } from 'src/app/entities/User';
import { UserRepository } from 'src/app/repositories/users-repositories';
import { PrismaUserMapper } from '../mappers/prisma-users-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUsersRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}
  async findById(user_id: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: user_id,
      },
    });

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }
  async create(user: User): Promise<void> {
    const prismaUser = PrismaUserMapper.toPrisma(user);

    await this.prismaService.user.create({
      data: prismaUser,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
  async findByNameNumberAndBirthDate(
    name: string,
    number: string,
    birthDate: Date,
  ): Promise<User | null> {
    const user = await this.prismaService.user.findFirst({
      where: {
        nome: name,
        numero: number,
        data_nascimento: new Date(birthDate),
      },
    });

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }

  async getAll(): Promise<User[]> {
    const users = await this.prismaService.user.findMany();

    return users.map((u) => PrismaUserMapper.toDomain(u));
  }
}
