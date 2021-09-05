import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Container } from 'App/App.styles';
import { CREATE_POST } from 'GraphQl/mutations/posts';

import { NewPostForm } from './NewPostForm';

export default {
    title: 'Components/Atoms/NewPostForm',
    component: NewPostForm,
    argTypes: {},
} as Meta;

export const Default: Story = () => (
    <Container>
        <NewPostForm />
    </Container>
);
Default.parameters = {
    apolloClient: {
        mocks: [
            {
                request: {
                    query: CREATE_POST,
                },
                result: {
                    data: {
                        title: 'new post',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum?',
                        author: 1,
                    },
                },
            },
        ],
    },
};
