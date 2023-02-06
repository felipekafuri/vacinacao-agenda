import { Injectable } from '@nestjs/common';
import { Agenda } from '../entities/Agenda';
import { AgendasRepository } from '../repositories/agendas-repositories';

@Injectable()
export class CreateAgendas {
  constructor(private agendasRepository: AgendasRepository) {}

  async execute(
    data: Date,
    userId: string,
    vacinaId: string,
    alergiaId: string,
  ): Promise<Agenda> {
    const agenda = new Agenda({
      data,
      userId,
      status: 'PENDENTE',
      vacinaId,
      alergiaId,
    });

    const agendaAlreadyExists =
      await this.agendasRepository.findByUserIdAndData(userId, data);

    if (agendaAlreadyExists) {
      throw new Error('Agenda already exists');
    }

    await this.agendasRepository.save(agenda);

    return agenda;
  }
}
