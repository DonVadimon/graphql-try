import { ID } from './shared.types';

export interface IUser {
    id: ID;
    username: string;
    password: string;
    age: number;
    avatar?: string;
}

export type UserInput = Omit<IUser, 'id'>;

export type LoginInput = Omit<UserInput, 'age'>;

export type UserMinInfo = Pick<IUser, 'username' | 'avatar'>;
