import { Module } from '@nestjs/common';
import { AgendasRepository } from 'src/app/repositories/agendas-repositories';
import { AlergiasRepository } from 'src/app/repositories/alergias-repositories';
import { UserRepository } from 'src/app/repositories/users-repositories';
import { VacinasRepository } from 'src/app/repositories/vacinas-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAgendasRepository } from './prisma/repositories/prisma-agendas-repositories';
import { PrismaAlergiasRepositories } from './prisma/repositories/prisma-alergias-repositories';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repositories';
import { PrismaVacinaRepository } from './prisma/repositories/prisma-vacinas-repositoy';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: AlergiasRepository,
      useClass: PrismaAlergiasRepositories,
    },
    {
      provide: AgendasRepository,
      useClass: PrismaAgendasRepository,
    },
    {
      provide: VacinasRepository,
      useClass: PrismaVacinaRepository,
    },
  ],
  exports: [
    UserRepository,
    AlergiasRepository,
    AgendasRepository,
    VacinasRepository,
  ],
})
export class DatabaseModule {}
