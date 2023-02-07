import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateAgendas } from 'src/app/usecases/create-agendas';
import { DeleteAgendas } from 'src/app/usecases/delete-agendas';
import { GetAgendasUsers } from 'src/app/usecases/get-agendas-users';
import { UpdateAgenda } from 'src/app/usecases/update-agendas';
import { AgendaViewModel } from '../view-models/agenda-view-model';

@Controller('agendas')
export class AgendaController {
  constructor(
    private readonly createAgendasRepository: CreateAgendas,
    private readonly getAgendasUsersRepository: GetAgendasUsers,
    private readonly updateAgendaRepository: UpdateAgenda,
    private readonly deleteAgendaRepository: DeleteAgendas,
  ) {}

  @Post('/')
  async create(
    @Body()
    body: {
      data: string;
      userId: string;
      vacinaId: string;
      alergiaId: string;
    },
  ) {
    const { data, userId, alergiaId, vacinaId } = body;
    const agenda = await this.createAgendasRepository.execute(
      new Date(data),
      userId,
      vacinaId,
      alergiaId,
    );

    return AgendaViewModel.toHttp(agenda);
  }

  @Get('/')
  async getAll(@Param() status?: string) {
    const agendasUsers = await this.getAgendasUsersRepository.execute(status);

    return agendasUsers;
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() body: { status: string }) {
    const { status } = body;
    const { agenda } = await this.updateAgendaRepository.execute({
      agendaId: id,
      status,
    });

    return {
      agenda: AgendaViewModel.toHttp(agenda),
    };
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.deleteAgendaRepository.execute(id);
    return {
      message: 'Agenda deleted',
    };
  }
}
