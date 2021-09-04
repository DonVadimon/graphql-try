import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { Trash } from 'assets';
import { DELETE_POST } from 'GraphQl/mutations/posts';

import { DeleteButton } from 'components/DeleteButton';

import { Container, Content, Title } from './PostCard.styles';
import { IPostCardProps } from './PostCard.types';

export const PostCard: React.FC<IPostCardProps> = ({ post: { title, content, id } }) => {
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

    return (
        <Container>
            <DeleteButton onClick={onDelete}>
                <Trash />
            </DeleteButton>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </Container>
    );
};
