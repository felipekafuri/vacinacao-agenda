import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetAlergias } from 'src/app/usecases/get-alergias';
import { CreateAlergias } from '../../../app/usecases/create-alergias';
import { AlergiaViewModel } from '../view-models/alergia-view-model';

@Controller('alergias')
export class AlergiasController {
  constructor(
    private readonly createAlergiaUseCase: CreateAlergias,
    private readonly getAllAlergiasUseCase: GetAlergias,
  ) {}

  @Post('/')
  async create(@Body() body: { nome: string; userId: string }) {
    const { nome, userId } = body;
    const alergia = await this.createAlergiaUseCase.execute(nome, userId);
    return {
      alergia: AlergiaViewModel.toHttp(alergia),
    };
  }

  @Get('/')
  async getAll() {
    const alergias = await this.getAllAlergiasUseCase.execute();
    return {
      alergias: alergias.map((alergia) => AlergiaViewModel.toHttpUser(alergia)),
    };
  }
}
