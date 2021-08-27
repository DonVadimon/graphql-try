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
        }
    }
`;
