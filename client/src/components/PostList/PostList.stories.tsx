import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { IPost } from 'types/Post.types';

import { PostList } from './PostList';
import { IPostListProps } from './PostList.types';

export default {
    title: 'Components/Atoms/PostList',
    component: PostList,
    argTypes: {},
} as Meta;

export const Default: Story<IPostListProps> = (args) => <PostList {...args} />;
Default.args = {
    posts: [
        {
            id: 1,
            title: 'title',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consequatur.',
            author: 1,
        },
        {
            id: 2,
            title: 'title',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consequatur.',
            author: 1,
        },
        {
            id: 3,
            title: 'title',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consequatur.',
            author: 1,
        },
        {
            id: 4,
            title: 'title',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consequatur.',
            author: 1,
        },
    ] as IPost[],
};
