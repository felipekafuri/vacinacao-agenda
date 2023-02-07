import { Injectable } from '@nestjs/common';
import { AgendasRepository } from '../repositories/agendas-repositories';

@Injectable()
export class DeleteAgendas {
  constructor(private agendasRepository: AgendasRepository) {}

  async execute(agendaId: string): Promise<void> {
    const agenda = await this.agendasRepository.findById(agendaId);

    if (!agenda) {
      throw new Error('Agenda not found');
    }

    await this.agendasRepository.delete(agendaId);
  }
}
