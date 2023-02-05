import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/replace';

interface UserProps {
  id?: string;
  nome: string;
  data_nascimento: Date;
  sexo: string;
  logradouro: string;
  numero: string;
  cidade: string;
  uf: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class User {
  private props: UserProps;
  private _id: string;

  constructor(
    props: Replace<UserProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      id: id ?? randomUUID(),
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get nome(): string {
    return this.props.nome;
  }

  public set nome(value: string) {
    this.props.nome = value;
  }

  public get data_nascimento(): Date {
    return this.props.data_nascimento;
  }

  public set data_nascimento(value: Date) {
    this.props.data_nascimento = value;
  }

  public get sexo(): string {
    return this.props.sexo;
  }

  public set sexo(value: string) {
    this.props.sexo = value;
  }

  public get logradouro(): string {
    return this.props.logradouro;
  }

  public set logradouro(value: string) {
    this.props.logradouro = value;
  }

  public get numero(): string {
    return this.props.numero;
  }

  public set numero(value: string) {
    this.props.numero = value;
  }

  public get cidade(): string {
    return this.props.cidade;
  }

  public set cidade(value: string) {
    this.props.cidade = value;
  }

  public get uf(): string {
    return this.props.uf;
  }

  public set uf(value: string) {
    this.props.uf = value;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public set updatedAt(value: Date) {
    this.props.updatedAt = value;
  }
}
