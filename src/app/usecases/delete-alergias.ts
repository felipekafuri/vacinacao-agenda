import { Injectable } from '@nestjs/common';
import { AlergiasRepository } from '../repositories/alergias-repositories';

@Injectable()
export class DeleteAlergias {
  constructor(private alergiasRepository: AlergiasRepository) {}

  async execute(alergiaId: string): Promise<void> {
    const alergia = await this.alergiasRepository.findById(alergiaId);

    if (!alergia) {
      throw new Error('Alergia não encontrada');
    }

    await this.alergiasRepository.delete(alergiaId);
  }
}
