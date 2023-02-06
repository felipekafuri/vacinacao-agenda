import { Agendas as RawAgenda } from '@prisma/client';
import { Agenda } from 'src/app/entities/Agenda';

export class PrismaAgendaMapper {
  static toPrisma(agenda: Agenda) {
    return {
      id: agenda.id,
      data: agenda.data,
      userId: agenda.userId,
      status: agenda.status,
      alergiaId: agenda.alergiaId,
      vacinaId: agenda.vacinaId,
    };
  }

  static toDomain(raw: RawAgenda) {
    return new Agenda(
      {
        data: raw.data,
        userId: raw.userId,
        status: raw.status,
        alergiaId: raw.alergiaId,
        vacinaId: raw.vacinaId,
      },
      raw.id,
    );
  }

  static toDomainUser(
    raw: RawAgenda,
    user_name: string,
    vacina_nome: string,
    alergia_nome: string,
  ) {
    const agenda = new Agenda(
      {
        data: raw.data,
        userId: raw.userId,
        status: raw.status,
        alergiaId: raw.alergiaId,
        vacinaId: raw.vacinaId,
      },
      raw.id,
    );
    return {
      data: agenda.data,
      status: agenda.status,
      vacina_nome,
      alergia_nome,
      id: agenda.id,
      user_name,
    };
  }
}
