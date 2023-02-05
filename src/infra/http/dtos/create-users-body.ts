import { IsNotEmpty, Length } from 'class-validator';

export class CreateUsersBody {
  @IsNotEmpty()
  @Length(5, 255)
  nome: string;

  @IsNotEmpty()
  data_nascimento: Date;

  @IsNotEmpty()
  @Length(1, 1)
  sexo: string;

  @IsNotEmpty()
  @Length(5, 255)
  logradouro: string;

  @IsNotEmpty()
  @Length(1, 10)
  numero: string;

  @IsNotEmpty()
  @Length(5, 255)
  cidade: string;

  @IsNotEmpty()
  @Length(2, 2)
  uf: string;
}
