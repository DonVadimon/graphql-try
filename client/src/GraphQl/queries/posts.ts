import { gql } from '@apollo/client';
import { IPost } from 'types/Post.types';

export interface IGetAllPostsResp {
    getAllPosts: IPost[];
}

export interface IGetUserPostsResp {
    getUserPosts: IPost[];
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

export const GET_USER_POSTS = gql`
    query getUserPosts($author: ID) {
        getUserPosts(author: $author) {
            title
            content
        }
    }
`;
