import { User } from '../entities/User';

export abstract class UserRepository {
  abstract getAll(): Promise<User[]>;
  abstract create(user: User): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByNameNumberAndBirthDate(
    name: string,
    number: string,
    birthDate: Date,
  ): Promise<User | null>;
}
