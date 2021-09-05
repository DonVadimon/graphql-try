import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { Context } from 'context';
import { GET_USER_POSTS, IGetUserPostsResp } from 'GraphQl/queries/posts';
import { GET_USER } from 'GraphQl/queries/user';
import { IUser } from 'types/User.types';

import { PostList } from 'components/PostList';
import { UserCard } from 'components/UserCard';

export const UserPage = () => {
    const { userId } = useContext(Context);

    const { data: userData } = useQuery<{ getUser: IUser }>(GET_USER, {
        variables: {
            id: userId,
        },
    });

    const { data: postsData } = useQuery<IGetUserPostsResp>(GET_USER_POSTS, {
        variables: {
            author: userId,
        },
    });

    return (
        <>
            {userData?.getUser && <UserCard user={userData.getUser} />}
            {postsData?.getUserPosts && <PostList posts={postsData.getUserPosts} />}
        </>
    );
};
