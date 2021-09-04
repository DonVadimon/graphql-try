import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Index } from 'pages/Index';
import { Posts } from 'pages/Posts';

import { Navbar } from 'components/Navbar';

import { Container } from './App.styles';

export const App = () => (
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
            </Switch>
        </Container>
    </Router>
);
