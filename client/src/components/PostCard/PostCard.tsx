import React, { useCallback, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { Trash } from 'assets';
import { Context } from 'context';
import { DELETE_POST } from 'GraphQl/mutations/posts';

import { DeleteButton } from 'components/DeleteButton';

import { Container, Content, Title } from './PostCard.styles';
import { IPostCardProps } from './PostCard.types';

export const PostCard: React.FC<IPostCardProps> = ({ post: { title, content, id, author } }) => {
    const [deletePost] = useMutation(DELETE_POST);

    const onDelete = useCallback(
        () =>
            deletePost({
                variables: {
                    id,
                },
            }),
        [deletePost, id],
    );

    const { userId } = useContext(Context);

    return (
        <Container>
            {(userId === Number(author) || userId === 1) && (
                <DeleteButton onClick={onDelete}>
                    <Trash />
                </DeleteButton>
            )}
            <Title>{title}</Title>
            <Content>{content}</Content>
        </Container>
    );
};
