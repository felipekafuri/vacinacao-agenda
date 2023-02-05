import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUsers } from 'src/app/usecases/create-users';
import { DeleteUsers } from 'src/app/usecases/delete-users';
import { GetUsers } from 'src/app/usecases/get-users';
import { CreateUsersBody } from '../dtos/create-users-body';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('users')
export class UsersController {
  constructor(
    private readonly getUsersUseCase: GetUsers,
    private readonly createUsersUseCase: CreateUsers,
    private readonly deleteUsersUseCase: DeleteUsers,
  ) {}
  @Get('/')
  async getAll() {
    const users = await this.getUsersUseCase.execute();
    return {
      users: users.map((u) => UserViewModel.toHttp(u)),
    };
  }

  @Post('/')
  async create(@Body() body: CreateUsersBody) {
    const { user } = await this.createUsersUseCase.execute({
      nome: body.nome,
      data_nascimento: body.data_nascimento,
      sexo: body.sexo,
      logradouro: body.logradouro,
      numero: body.numero,
      cidade: body.cidade,
      uf: body.uf,
    });
    return {
      user: UserViewModel.toHttp(user),
    };
  }

  @Delete('/:id')
  async delete(@Param() { id }: { id: string }) {
    await this.deleteUsersUseCase.execute(id);
    return {
      message: 'User deleted successfully',
    };
  }
}
