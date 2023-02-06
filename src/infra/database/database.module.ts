import { Module } from '@nestjs/common';
import { AgendasRepository } from 'src/app/repositories/agendas-repositories';
import { AlergiasRepository } from 'src/app/repositories/alergias-repositories';
import { UserRepository } from 'src/app/repositories/users-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAgendasRepository } from './prisma/repositories/prisma-agendas-repositories';
import { PrismaAlergiasRepositories } from './prisma/repositories/prisma-alergias-repositories';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repositories';

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
  ],
  exports: [UserRepository, AlergiasRepository, AgendasRepository],
})
export class DatabaseModule {}
