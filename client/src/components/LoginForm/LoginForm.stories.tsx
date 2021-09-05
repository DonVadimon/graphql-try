import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Container } from 'App/App.styles';
import { LOGIN } from 'GraphQl/mutations/user';

import { LoginForm } from './LoginForm';

export default {
    title: 'Components/Atoms/LoginForm',
    component: LoginForm,
    argTypes: {},
} as Meta;

export const Default: Story = () => (
    <Container>
        <LoginForm />
    </Container>
);
Default.parameters = {
    apolloClient: {
        mocks: [
            {
                request: {
                    query: LOGIN,
                    variables: {
                        username: 'User',
                        password: '123123',
                    },
                },
                result: {
                    data: {
                        username: 'User',
                        age: 20,
                        id: 1,
                    },
                },
            },
        ],
    },
};
