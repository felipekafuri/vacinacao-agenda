import { Injectable } from '@nestjs/common';
import { AlergiasRepository } from '../repositories/alergias-repositories';

export interface AlergiaUser {
  id: string;
  nome: string;
  user_name: string;
}

@Injectable()
export class GetAlergias {
  constructor(private alergiasRepositories: AlergiasRepository) {}

  async execute(): Promise<AlergiaUser[]> {
    const alergias = await this.alergiasRepositories.getAll();

    return alergias;
  }
}
