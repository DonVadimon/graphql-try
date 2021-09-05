import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Context } from 'context';
import { useUserId } from 'hooks/useUserId';
import { Index } from 'pages/Index';
import { Login } from 'pages/Login';
import { Posts } from 'pages/Posts';
import { Register } from 'pages/Register';
import { UserPage } from 'pages/UserPage';

import { Navbar } from 'components/Navbar';

import { Container } from './App.styles';

export const App = () => {
    const [userId, setUserId] = useUserId();

    return (
        <Context.Provider value={{ userId, setUserId }}>
            <Router>
                <Container>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Index />
                        </Route>
                        <Route path="/posts">
                            <Posts />
                        </Route>
                        <Route path="/user/:userid">
                            <UserPage />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </Context.Provider>
    );
};
