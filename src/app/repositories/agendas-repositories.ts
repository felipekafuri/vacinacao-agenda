import { Agenda } from '../entities/Agenda';

export abstract class AgendasRepository {
  abstract save(agendas: Agenda): Promise<Agenda>;
  abstract findByUserIdAndData(
    userId: string,
    data: Date,
  ): Promise<Agenda | undefined>;
  abstract getAll(status?: string): Promise<Agenda[]>;
  abstract findById(id: string): Promise<Agenda | undefined>;
  abstract update(agendaId, agenda: Agenda): Promise<Agenda>;
  abstract delete(id: string): Promise<void>;
}
