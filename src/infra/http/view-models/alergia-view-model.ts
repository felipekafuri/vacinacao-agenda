import { Alergia } from 'src/app/entities/Alergia';
import { AlergiaUser } from 'src/app/usecases/get-alergias';

export class AlergiaViewModel {
  static toHttp(alergia: Alergia) {
    return {
      id: alergia.id,
      nome: alergia.nome,
    };
  }

  static toHttpUser(alergia: AlergiaUser) {
    return {
      id: alergia.id,
      nome: alergia.nome,
      user_name: alergia.user_name,
    };
  }
}
