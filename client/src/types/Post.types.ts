import { ID } from './shared.types';

export interface IPost {
    id: ID;
    author: ID;
    title: string;
    content: string;
}

export type PostInput = Omit<IPost, 'id'>;
