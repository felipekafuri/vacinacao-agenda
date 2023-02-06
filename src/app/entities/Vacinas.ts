import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/replace';

export interface VacinasInterface {
  id?: string;
  nome: string;
  periodicidade: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId: string;
  agendaId: string;
}

export class Vacinas {
  private props: VacinasInterface;
  private _id: string;

  constructor(
    props: Replace<VacinasInterface, { createdAt?: Date; updatedAt?: Date }>,
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

  public get periodicidade(): number {
    return this.props.periodicidade;
  }

  public set periodicidade(value: number) {
    this.props.periodicidade = value;
  }

  public get status(): string {
    return this.props.status;
  }

  public set status(value: string) {
    this.props.status = value;
  }

  public get userId(): string {
    return this.props.userId;
  }

  public set userId(value: string) {
    this.props.userId = value;
  }

  public get agendaId(): string {
    return this.props.agendaId;
  }

  public set agendaId(value: string) {
    this.props.agendaId = value;
  }
}
