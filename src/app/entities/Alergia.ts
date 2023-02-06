import { randomUUID } from 'node:crypto';

interface AlergiaProps {
  id?: string;
  nome: string;
  userId: string;
}

export class Alergia {
  private props: AlergiaProps;
  private _id: string;

  constructor(props: AlergiaProps, id?: string) {
    this.props = {
      ...props,
      id: id ?? randomUUID(),
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

  public get userId(): string {
    return this.props.userId;
  }

  public set userId(value: string) {
    this.props.userId = value;
  }
}
