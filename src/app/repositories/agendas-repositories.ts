import { Agenda } from '../entities/Agenda';

export abstract class AgendasRepository {
  abstract save(agendas: Agenda): Promise<Agenda>;
  abstract findByUserIdAndData(
    userId: string,
    data: Date,
  ): Promise<Agenda | undefined>;
  abstract getAll(status?: string): Promise<Agenda[]>;
}
