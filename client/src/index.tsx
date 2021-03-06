import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { App } from './App';
import { Global } from './global.styles';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
    uri:
        process.env.NODE_ENV === 'production'
            ? 'https://graphql-try-server.herokuapp.com/graphql'
            : 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <Global />
            <App />
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
