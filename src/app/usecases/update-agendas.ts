import { Injectable } from '@nestjs/common';
import { Agenda } from '../entities/Agenda';
import { AgendasRepository } from '../repositories/agendas-repositories';

interface UpdateAgendaRequest {
  agendaId: string;
  status: string;
}

interface UpdateAgendaResponse {
  agenda: Agenda;
}

@Injectable()
export class UpdateAgenda {
  constructor(private agendasRepository: AgendasRepository) {}

  async execute({
    agendaId,
    status,
  }: UpdateAgendaRequest): Promise<UpdateAgendaResponse> {
    const agenda = await this.agendasRepository.findById(agendaId);

    if (!agenda) {
      throw new Error('Agenda not found');
    }

    agenda.status = status;

    return {
      agenda: await this.agendasRepository.update(agendaId, agenda),
    };
  }
}
