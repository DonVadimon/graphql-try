import React, { useCallback, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { Trash } from 'assets';
import { Context } from 'context';
import { DELETE_USER } from 'GraphQl/mutations/user';

import { DeleteButton } from 'components/DeleteButton';

import { Container } from './UserCard.styles';
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

    const { userId } = useContext(Context);

    return (
        <Container>
            <h1>
                {username}, {age} лет. Пошлый
            </h1>
            {userId === 1 && (
                <DeleteButton onClick={onDelete}>
                    <Trash />
                </DeleteButton>
            )}
        </Container>
    );
};
