import React from 'react';
import { Logo } from 'assets';

import { AppLink, AppLogo, Container, Header } from './App.styles';

export const App = () => {
    return (
        <Container>
            <Header>
                <AppLogo>
                    <Logo />
                </AppLogo>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </AppLink>
            </Header>
        </Container>
    );
};
