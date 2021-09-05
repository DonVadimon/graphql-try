import { gql } from '@apollo/client';
import { IUser } from 'types/User.types';

export interface IGetAllUsersResp {
    getAllUsers: IUser[];
}

export const GET_ALL_USERS = gql`
    query getAllUsers {
        getAllUsers {
            id
            username
            age
            avatar
        }
    }
`;

export const GET_USER = gql`
    query getUser($id: ID) {
        getUser(id: $id) {
            username
            avatar
            age
            id
        }
    }
`;

export const GET_USER_MIN_INFO = gql`
    query getUser($id: ID) {
        getUser(id: $id) {
            username
            avatar
        }
    }
`;
