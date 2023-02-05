import { Module } from '@nestjs/common';
import { UserRepository } from 'src/app/repositories/users-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repositories';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
