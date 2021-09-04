import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { GET_ALL_POSTS } from 'GraphQl/queries/posts';
import { IPost } from 'types/Post.types';

import { PostList } from './PostList';

export default {
    title: 'Components/Atoms/PostList',
    component: PostList,
    argTypes: {},
} as Meta;

export const Default: Story = (args) => <PostList {...args} />;
Default.parameters = {
    apolloClient: {
        mocks: [
            {
                request: {
                    query: GET_ALL_POSTS,
                },
                result: {
                    data: {
                        getAllPosts: [
                            {
                                id: 1,
                                title: 'title',
                                content:
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consequatur.',
                                author: 1,
                            },
                            {
                                id: 2,
                                title: 'title',
                                content:
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consequatur.',
                                author: 1,
                            },
                            {
                                id: 3,
                                title: 'title',
                                content:
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consequatur.',
                                author: 1,
                            },
                            {
                                id: 4,
                                title: 'title',
                                content:
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consequatur.',
                                author: 1,
                            },
                        ] as IPost[],
                    },
                },
            },
        ],
    },
};
