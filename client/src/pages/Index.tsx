import React from 'react';

import { StyledLink } from 'components/StyledLink';
import { UserList } from 'components/UserList';

export const Index = () => (
    <>
        <h1>Community</h1>
        <UserList />
        <StyledLink href="https://vk.com/pudge1stpick" target="_blank">
            Creator
        </StyledLink>
    </>
);
