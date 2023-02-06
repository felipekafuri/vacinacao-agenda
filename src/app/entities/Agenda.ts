import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/replace';

interface AgendaInterface {
  id?: string;
  data: Date;
  status: string;
  userId: string;
  vacinaId?: string;
  alergiaId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Agenda {
  private props: AgendaInterface;
  private _id: string;

  constructor(
    props: Replace<AgendaInterface, { createdAt?: Date; updatedAt?: Date }>,
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

  public get data(): Date {
    return this.props.data;
  }

  public set data(value: Date) {
    this.props.data = value;
  }

  public get userId(): string {
    return this.props.userId;
  }

  public set userId(value: string) {
    this.props.userId = value;
  }

  public get status(): string {
    return this.props.status;
  }

  public set status(value: string) {
    this.props.status = value;
  }

  public get vacinaId(): string {
    return this.props.vacinaId;
  }

  public set vacinaId(value: string) {
    this.props.vacinaId = value;
  }

  public get alergiaId(): string {
    return this.props.alergiaId;
  }

  public set alergiaId(value: string) {
    this.props.alergiaId = value;
  }
}
