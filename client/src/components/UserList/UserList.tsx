import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS, IGetAllUsersResp } from 'GraphQl/queries/user';

import { ServerErrorMessage } from 'components/ServerErrorMessage';
import { Spinner } from 'components/Spinner';
import { UserCard } from 'components/UserCard';

import { ListItem } from './UserList.styles';

export const UserList = () => {
    const { data, loading, error } = useQuery<IGetAllUsersResp>(GET_ALL_USERS, { pollInterval: 1000 });

    return (
        <div>
            {error && <ServerErrorMessage />}
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    {data?.getAllUsers.map((user, index) => (
                        <ListItem key={index}>
                            <UserCard user={user} />
                        </ListItem>
                    ))}
                </div>
            )}
        </div>
    );
};
