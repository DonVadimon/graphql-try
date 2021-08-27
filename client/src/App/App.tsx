import React from 'react';

import { NewUserForm } from 'components/NewUserForm';
import { UserList } from 'components/UserList';

import { AppLink, Container, Header } from './App.styles';

export const App = () => (
    <Container>
        <Header>
            <NewUserForm />
            <UserList />
            <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </AppLink>
        </Header>
    </Container>
);
