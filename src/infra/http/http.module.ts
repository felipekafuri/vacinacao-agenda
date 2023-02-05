import { Module } from '@nestjs/common';
import { CreateUsers } from 'src/app/usecases/create-users';
import { DeleteUsers } from 'src/app/usecases/delete-users';
import { GetUsers } from 'src/app/usecases/get-users';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [GetUsers, CreateUsers, DeleteUsers],
})
export class HttpModule {}
