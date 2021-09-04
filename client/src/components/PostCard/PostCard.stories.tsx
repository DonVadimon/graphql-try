import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DELETE_POST } from 'GraphQl/mutations/posts';

import { PostCard } from './PostCard';
import { IPostCardProps } from './PostCard.types';

export default {
    title: 'Components/Atoms/PostCard',
    component: PostCard,
    argTypes: {},
} as Meta;

export const Default: Story<IPostCardProps> = (args) => <PostCard {...args} />;
Default.args = {
    post: {
        id: 1,
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, repellendus!',
        title: 'Post',
        author: 1,
    },
};
Default.parameters = {
    apolloClient: {
        mocks: [
            {
                request: {
                    query: DELETE_POST,
                },
                result: {
                    data: {
                        id: 1,
                        title: 'deleted title',
                    },
                },
            },
        ],
    },
};
