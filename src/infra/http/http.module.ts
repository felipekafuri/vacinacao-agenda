import { Module } from '@nestjs/common';
import { CreateAgendas } from 'src/app/usecases/create-agendas';
import { CreateAlergias } from 'src/app/usecases/create-alergias';
import { CreateUsers } from 'src/app/usecases/create-users';
import { DeleteAgendas } from 'src/app/usecases/delete-agendas';
import { DeleteAlergias } from 'src/app/usecases/delete-alergias';
import { DeleteUsers } from 'src/app/usecases/delete-users';
import { GetAgendasUsers } from 'src/app/usecases/get-agendas-users';
import { GetAlergias } from 'src/app/usecases/get-alergias';
import { GetUsers } from 'src/app/usecases/get-users';
import { UpdateAgenda } from 'src/app/usecases/update-agendas';
import { DatabaseModule } from '../database/database.module';
import { AgendaController } from './controllers/agendas.controller';
import { AlergiasController } from './controllers/alergias.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController, AlergiasController, AgendaController],
  providers: [
    GetUsers,
    CreateUsers,
    DeleteUsers,
    CreateAlergias,
    GetAlergias,
    GetAgendasUsers,
    CreateAgendas,
    UpdateAgenda,
    DeleteAgendas,
    DeleteAlergias,
  ],
})
export class HttpModule {}
