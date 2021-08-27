import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { Trash } from 'assets';
import { DELETE_USER } from 'GraphQl/mutations/user';

import { Container, DeleteButton } from './UserCard.styles';
import { IUserCardProps } from './UserCard.types';

export const UserCard: React.FC<IUserCardProps> = ({ user: { username, age, id } }) => {
    const [deleteUser] = useMutation(DELETE_USER);

    const onDelete = useCallback(
        () =>
            deleteUser({
                variables: {
                    id,
                },
            }),
        [deleteUser, id],
    );

    return (
        <Container>
            <h1>
                {username}, {age} лет. Пошлый
            </h1>
            <DeleteButton onClick={onDelete}>
                <Trash />
            </DeleteButton>
        </Container>
    );
};
