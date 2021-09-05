import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { Context } from 'context';
import { GET_ALL_POSTS, IGetAllPostsResp } from 'GraphQl/queries/posts';

import { NewPostForm } from 'components/NewPostForm';
import { PostList } from 'components/PostList';
import { ServerErrorMessage } from 'components/ServerErrorMessage';
import { Spinner } from 'components/Spinner';

export const Posts = () => {
    const { userId } = useContext(Context);

    const { data, loading, error } = useQuery<IGetAllPostsResp>(GET_ALL_POSTS, { pollInterval: 1000 });

    return (
        <>
            <h1>All Posts</h1>
            {userId >= 0 && <NewPostForm />}
            {error && <ServerErrorMessage />}
            {loading ? <Spinner /> : data?.getAllPosts && <PostList posts={data.getAllPosts} />}
        </>
    );
};
