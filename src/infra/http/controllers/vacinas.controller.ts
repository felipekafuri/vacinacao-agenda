import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateVacina } from 'src/app/usecases/create-vacina';
import { GetVacinas } from 'src/app/usecases/get-vacinas';

interface CreateVacinaRequest {
  periodicidade: string;
  nome: string;
}

@Controller('vacinas')
export class VacinasController {
  constructor(
    private readonly createVacina: CreateVacina,
    private readonly getVacinas: GetVacinas,
  ) {}

  @Post()
  async create(@Body() { nome, periodicidade }: CreateVacinaRequest) {
    await this.createVacina.execute({ nome, periodicidade });
  }

  @Get()
  async index() {
    const vacinas = await this.getVacinas.execute();

    return vacinas;
  }
}
