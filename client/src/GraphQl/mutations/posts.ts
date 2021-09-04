import { gql } from '@apollo/client';

export const CREATE_POST = gql`
    mutation createPost($input: PostInput) {
        createPost(input: $input) {
            title
            content
            author
        }
    }
`;

export const DELETE_POST = gql`
    mutation deletePost($id: ID) {
        deletePost(id: $id) {
            id
            title
        }
    }
`;
