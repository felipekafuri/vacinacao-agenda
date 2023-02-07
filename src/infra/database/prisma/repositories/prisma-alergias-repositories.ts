import { Injectable } from '@nestjs/common';
import { Alergia } from 'src/app/entities/Alergia';
import { AlergiasRepository } from 'src/app/repositories/alergias-repositories';
import { AlergiaUser } from 'src/app/usecases/get-alergias';
import { PrismaAlergiaMapper } from '../mappers/prisma-alergias-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAlergiasRepositories implements AlergiasRepository {
  constructor(private prismaService: PrismaService) {}
  async delete(id: string): Promise<void> {
    await this.prismaService.alergias.delete({
      where: {
        id: id,
      },
    });
  }
  async findById(id: string): Promise<Alergia | null> {
    const alergia = await this.prismaService.alergias.findUnique({
      where: {
        id,
      },
    });

    if (!alergia) null;

    return PrismaAlergiaMapper.toDomain(alergia);
  }

  async save(alergias: Alergia): Promise<Alergia> {
    const alergia = await this.prismaService.alergias.create({
      data: {
        nome: alergias.nome,
        userId: alergias.userId,
      },
    });
    return PrismaAlergiaMapper.toDomain(alergia);
  }
  async findByUserIdAndName(
    userId: string,
    alergiaNome: string,
  ): Promise<Alergia | null> {
    const alergia = await this.prismaService.alergias.findFirst({
      where: {
        nome: alergiaNome,
        userId: userId,
      },
    });
    if (!alergia) return null;
    return PrismaAlergiaMapper.toDomain(alergia);
  }
  async getAll(): Promise<AlergiaUser[]> {
    const alergias = await this.prismaService.alergias.findMany({
      include: {
        User: true,
      },
    });
    const alergiasDomain = alergias.map((a) =>
      PrismaAlergiaMapper.toDomainUser(a, a.User.nome),
    );
    return alergiasDomain;
  }
}
