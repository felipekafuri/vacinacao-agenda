import { Injectable } from '@nestjs/common';
import { VacinasRepository } from '../repositories/vacinas-repositories';

interface CreateVacinaRequest {
  periodicidade: string;
  nome: string;
}

@Injectable()
export class CreateVacina {
  constructor(private vacinaRepository: VacinasRepository) {}

  async execute({ nome, periodicidade }: CreateVacinaRequest) {
    const vacina = await this.vacinaRepository.findByNomeAndPeriodicidade(
      nome,
      periodicidade,
    );

    if (vacina) {
      throw new Error('Vacina já cadastrada');
    }

    await this.vacinaRepository.create(nome, periodicidade);
  }
}
