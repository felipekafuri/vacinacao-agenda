import { Alergia } from '../entities/Alergia';
import { AlergiaUser } from '../usecases/get-alergias';

export abstract class AlergiasRepository {
  abstract save(alergias: Alergia): Promise<Alergia>;
  abstract findByUserIdAndName(
    userId: string,
    alergiaNome: string,
  ): Promise<Alergia | undefined>;
  abstract getAll(): Promise<AlergiaUser[]>;
}
