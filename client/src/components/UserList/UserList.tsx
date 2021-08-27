import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS, IGetAllUsersResp } from 'GraphQl/queries/user';

import { Spinner } from 'components/Spinner';
import { UserCard } from 'components/UserCard';

import { ListItem } from './UserList.styles';

export const UserList = () => {
    const { data, loading } = useQuery<IGetAllUsersResp>(GET_ALL_USERS, { pollInterval: 1000 });

    return loading ? (
        <Spinner />
    ) : (
        <div>
            {data?.getAllUsers.map((user, index) => (
                <ListItem key={index}>
                    <UserCard user={user} />
                </ListItem>
            ))}
        </div>
    );
};
