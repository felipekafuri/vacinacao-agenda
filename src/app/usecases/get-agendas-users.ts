import { Injectable } from '@nestjs/common';
import { AgendasRepository } from '../repositories/agendas-repositories';
import { AlergiasRepository } from '../repositories/alergias-repositories';
import { UserRepository } from '../repositories/users-repositories';

export interface AgendaUsers {
  id: string;
  data: Date;
  user_name: string;
  status: string;
  users_alergias: {
    id: string;
    nome: string;
  }[];
}

@Injectable()
export class GetAgendasUsers {
  constructor(
    private agendasRepository: AgendasRepository,
    private usersRepository: UserRepository,
    private alergiasRepository: AlergiasRepository,
  ) {}

  async execute(status?: string): Promise<any> {
    const agendas = await this.agendasRepository.getAll(status);
    const agendasWithUser = await Promise.all(
      agendas.map(async (agenda) => {
        const user = await this.usersRepository.findById(agenda.userId);
        const alergia = await this.alergiasRepository.findById(
          agenda.alergiaId,
        );
        return {
          id: agenda.id,
          data: agenda.data,
          status: agenda.status,
          user_name: user?.nome,
          alergia_nome: alergia.nome,
        };
      }),
    );
    return agendasWithUser;
  }
}
