import { Injectable } from '@nestjs/common';
import { Agenda } from 'src/app/entities/Agenda';
import { AgendasRepository } from 'src/app/repositories/agendas-repositories';
import { PrismaAgendaMapper } from '../mappers/prisma-agendas-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAgendasRepository implements AgendasRepository {
  constructor(private prismaService: PrismaService) {}

  async save(agenda: Agenda): Promise<Agenda> {
    const { id, data, userId, status, alergiaId, vacinaId } = agenda;

    const a = await this.prismaService.agendas.create({
      data: {
        id,
        data,
        userId,
        status,
        alergiaId,
        vacinaId,
      },
    });

    return PrismaAgendaMapper.toDomain(a);
  }

  async findByUserIdAndData(
    userId: string,
    data: Date,
  ): Promise<Agenda | undefined> {
    const agenda = await this.prismaService.agendas.findFirst({
      where: {
        userId,
        data,
      },
      include: {
        Vacinas: true,
        Alergias: true,
      },
    });
    if (!agenda) {
      return undefined;
    }

    return PrismaAgendaMapper.toDomain(agenda);
  }

  async getAll(status?: string): Promise<Agenda[]> {
    let agendas;
    if (status) {
      agendas = await this.prismaService.agendas.findMany({
        where: {
          status,
        },
      });
    } else {
      agendas = await this.prismaService.agendas.findMany();
    }

    return agendas.map((agenda) => PrismaAgendaMapper.toDomain(agenda));
  }
}
