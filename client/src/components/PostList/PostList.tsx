import React from 'react';

import { PostCard } from 'components/PostCard';

import { Container, ListItem } from './PostList.styles';
import { IPostListProps } from './PostList.types';

export const PostList: React.FC<IPostListProps> = ({ posts }) => {
    return (
        <Container>
            {posts.map((post, index) => (
                <ListItem key={index}>
                    <PostCard post={post} />
                </ListItem>
            ))}
        </Container>
    );
};
