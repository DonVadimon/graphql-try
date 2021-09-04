import React from 'react';

import { NewUserForm } from 'components/NewUserForm';
import { StyledLink } from 'components/StyledLink';
import { UserList } from 'components/UserList';

export const Index = () => (
    <>
        <NewUserForm />
        <UserList />
        <StyledLink to="https://reactjs.org">Learn React</StyledLink>
    </>
);
