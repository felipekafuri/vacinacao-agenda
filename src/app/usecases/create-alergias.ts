import { Injectable } from '@nestjs/common';
import { Alergia } from '../entities/Alergia';
import { AlergiasRepository } from '../repositories/alergias-repositories';

@Injectable()
export class CreateAlergias {
  constructor(private alergiasRepository: AlergiasRepository) {}

  async execute(nome: string, userId: string): Promise<Alergia> {
    const alergia = new Alergia({
      nome,
      userId,
    });

    const alergiaAlreadyExists =
      await this.alergiasRepository.findByUserIdAndName(userId, nome);

    if (alergiaAlreadyExists) {
      throw new Error('Alergia already exists');
    }

    await this.alergiasRepository.save(alergia);

    return alergia;
  }
}
