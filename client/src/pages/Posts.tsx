import React, { useContext } from 'react';
import { Context } from 'context';

import { NewPostForm } from 'components/NewPostForm';
import { PostList } from 'components/PostList';

export const Posts = () => {
    const { userId } = useContext(Context);

    return (
        <>
            <h1>All Posts</h1>
            {userId >= 0 && <NewPostForm />}
            <PostList />
        </>
    );
};
