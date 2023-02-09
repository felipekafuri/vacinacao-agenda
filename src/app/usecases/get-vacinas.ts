import { Injectable } from '@nestjs/common';
import { VacinasRepository } from '../repositories/vacinas-repositories';

@Injectable()
export class GetVacinas {
  constructor(private readonly vacinasRepository: VacinasRepository) {}

  async execute(): Promise<any[]> {
    return this.vacinasRepository.getAll();
  }
}
