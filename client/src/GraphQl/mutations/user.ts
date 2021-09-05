import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($input: UserInput) {
        createUser(input: $input) {
            id
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($id: ID) {
        deleteUser(id: $id) {
            id
        }
    }
`;

export const LOGIN = gql`
    mutation login($input: LoginInput) {
        login(input: $input) {
            username
            age
            id
        }
    }
`;
