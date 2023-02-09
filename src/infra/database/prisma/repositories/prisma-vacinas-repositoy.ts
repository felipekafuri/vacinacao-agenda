import { Vacinas } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { VacinasRepository } from 'src/app/repositories/vacinas-repositories';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaVacinaRepository implements VacinasRepository {
  constructor(private prismaService: PrismaService) {}

  async findByNomeAndPeriodicidade(
    nome: string,
    periodicidade: string,
  ): Promise<Vacinas | undefined> {
    const vacina = await this.prismaService.vacinas.findFirst({
      where: {
        nome,
        periodicidade,
      },
    });

    return vacina;
  }

  async getAll(): Promise<Vacinas[]> {
    const vacinas = await this.prismaService.vacinas.findMany();

    return vacinas;
  }

  async create(nome: string, periodicidade): Promise<Vacinas> {
    const vacina = await this.prismaService.vacinas.create({
      data: {
        nome,
        periodicidade,
      },
    });

    return vacina;
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.vacinas.delete({
      where: {
        id,
      },
    });
  }
}
