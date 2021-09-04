import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';

import './global.css';

export const parameters = {
    apolloClient: {
        MockedProvider,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [(story) => <BrowserRouter>{story()}</BrowserRouter>];
