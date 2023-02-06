import { Module } from '@nestjs/common';
import { AlergiasRepository } from 'src/app/repositories/alergias-repositories';
import { UserRepository } from 'src/app/repositories/users-repositories';
import { PrismaService } from './prisma/prisma.service';
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
  ],
  exports: [UserRepository, AlergiasRepository],
})
export class DatabaseModule {}
