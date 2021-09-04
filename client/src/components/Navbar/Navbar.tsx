import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Item } from './Navbar.styles';

export const Navbar = () => {
    const history = useHistory();

    return (
        <Container>
            <Item onClick={() => history.push('/')}>Users</Item>
            <Item onClick={() => history.push('/posts')}>Posts</Item>
        </Container>
    );
};
