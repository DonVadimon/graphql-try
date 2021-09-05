import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Context } from 'context';
import { GET_USER_MIN_INFO } from 'GraphQl/queries/user';
import { useLogout } from 'hooks/useLogout';
import { UserMinInfo } from 'types/User.types';

import { Avatar } from 'components/Avatar';
import { ServerErrorMessage } from 'components/ServerErrorMessage';

import { Container, Item, Username } from './Navbar.styles';

export const Navbar = () => {
    const history = useHistory();

    const { userId } = useContext(Context);

    const logout = useLogout();

    const { data, loading, error } = useQuery<{ getUser: UserMinInfo }>(GET_USER_MIN_INFO, {
        variables: {
            id: userId,
        },
    });

    return (
        <Container>
            {error && <ServerErrorMessage />}
            {!loading && !error && data?.getUser && (
                <Item onClick={() => history.push(`/user/${userId}`)}>
                    <Avatar width="80px" height="80px" src={data.getUser?.avatar} />
                    <Username>{data.getUser.username}</Username>
                </Item>
            )}
            <Item onClick={() => history.push('/')}>Users</Item>
            <Item onClick={() => history.push('/posts')}>Posts</Item>
            {userId < 0 ? (
                <>
                    <Item onClick={() => history.push('/login')}>Login</Item>
                    <Item onClick={() => history.push('/register')}>Register</Item>
                </>
            ) : (
                <Item onClick={logout}>Logout</Item>
            )}
        </Container>
    );
};
