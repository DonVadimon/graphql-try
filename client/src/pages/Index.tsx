import React from 'react';

import { StyledLink } from 'components/StyledLink';
import { UserList } from 'components/UserList';

export const Index = () => (
    <>
        <h1>Community</h1>
        <UserList />
        <StyledLink to="https://reactjs.org">Learn React</StyledLink>
    </>
);
