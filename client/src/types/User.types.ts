import { ID } from './shared.types';

export interface IUser {
    id: ID;
    username: string;
    password: string;
    age: number;
}

export type UserInput = Omit<IUser, 'id'>;

export type LoginInput = Omit<UserInput, 'age'>;
