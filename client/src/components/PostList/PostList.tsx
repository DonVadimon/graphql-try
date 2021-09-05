import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS, IGetAllPostsResp } from 'GraphQl/queries/posts';

import { PostCard } from 'components/PostCard';
import { ServerErrorMessage } from 'components/ServerErrorMessage';
import { Spinner } from 'components/Spinner';

import { Container, ListItem } from './PostList.styles';

export const PostList = () => {
    const { data, loading, error } = useQuery<IGetAllPostsResp>(GET_ALL_POSTS, { pollInterval: 1000 });

    return (
        <Container>
            {error && <ServerErrorMessage />}
            {loading ? (
                <Spinner />
            ) : (
                data?.getAllPosts.map((post, index) => (
                    <ListItem key={index}>
                        <PostCard post={post} />
                    </ListItem>
                ))
            )}
        </Container>
    );
};
