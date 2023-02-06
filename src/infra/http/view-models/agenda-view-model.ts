import { Agenda } from 'src/app/entities/Agenda';

export class AgendaViewModel {
  static toHttp(agenda: Agenda) {
    return {
      id: agenda.id,
      data: agenda.data,
      userId: agenda.userId,
      status: agenda.status,
    };
  }
}
