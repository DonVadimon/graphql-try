import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Context } from 'context';
import { useUserId } from 'hooks/useUserId';
import { Index } from 'pages/Index';
import { Login } from 'pages/Login';
import { Posts } from 'pages/Posts';
import { Register } from 'pages/Register';

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
                            <h1>user by id</h1>
                            <Switch>
                                <Route path="/user/:userid/posts">
                                    <h1>user posts</h1>
                                </Route>
                            </Switch>
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
