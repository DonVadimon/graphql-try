import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from 'context';
import { useLogout } from 'hooks/useLogout';

import { Container, Item } from './Navbar.styles';

export const Navbar = () => {
    const history = useHistory();

    const { userId } = useContext(Context);

    const logout = useLogout();

    return (
        <Container>
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
