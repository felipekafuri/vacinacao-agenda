import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAgendas } from 'src/app/usecases/create-agendas';
import { GetAgendasUsers } from 'src/app/usecases/get-agendas-users';
import { AgendaViewModel } from '../view-models/agenda-view-model';

@Controller('agendas')
export class AgendaController {
  constructor(
    private readonly createAgendasRepository: CreateAgendas,
    private readonly getAgendasUsers: GetAgendasUsers,
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
    const agendasUsers = await this.getAgendasUsers.execute(status);

    return agendasUsers;
  }
}
