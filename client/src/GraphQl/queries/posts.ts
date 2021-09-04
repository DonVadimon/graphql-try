import { gql } from '@apollo/client';
import { IPost } from 'types/Post.types';

export interface IGetAllPostsResp {
    getAllPosts: IPost[];
}

export const GET_ALL_POSTS = gql`
    query getAllPosts {
        getAllPosts {
            id
            author
            title
            content
        }
    }
`;
