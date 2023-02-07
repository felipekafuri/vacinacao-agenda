import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeleteAlergias } from 'src/app/usecases/delete-alergias';
import { GetAlergias } from 'src/app/usecases/get-alergias';
import { CreateAlergias } from '../../../app/usecases/create-alergias';
import { AlergiaViewModel } from '../view-models/alergia-view-model';

@Controller('alergias')
export class AlergiasController {
  constructor(
    private readonly createAlergiaUseCase: CreateAlergias,
    private readonly getAllAlergiasUseCase: GetAlergias,
    private readonly deleteAlergiaUseCase: DeleteAlergias,
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

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.deleteAlergiaUseCase.execute(id);
    return {
      message: 'Alergia deletada com sucesso',
    };
  }
}
