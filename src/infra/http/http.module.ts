import { Module } from '@nestjs/common';
import { CreateAlergias } from 'src/app/usecases/create-alergias';
import { CreateUsers } from 'src/app/usecases/create-users';
import { DeleteUsers } from 'src/app/usecases/delete-users';
import { GetAlergias } from 'src/app/usecases/get-alergias';
import { GetUsers } from 'src/app/usecases/get-users';
import { DatabaseModule } from '../database/database.module';
import { AlergiasController } from './controllers/alergias.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController, AlergiasController],
  providers: [GetUsers, CreateUsers, DeleteUsers, CreateAlergias, GetAlergias],
})
export class HttpModule {}
