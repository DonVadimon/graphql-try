import React, { useCallback, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { Trash } from 'assets';
import { Context } from 'context';
import { DELETE_USER } from 'GraphQl/mutations/user';

import { Avatar } from 'components/Avatar';
import { DeleteButton } from 'components/DeleteButton';
import { ServerErrorMessage } from 'components/ServerErrorMessage';

import { Container } from './UserCard.styles';
import { IUserCardProps } from './UserCard.types';

export const UserCard: React.FC<IUserCardProps> = ({ user: { username, age, id, avatar } }) => {
    const { userId, setUserId } = useContext(Context);

    const [deleteUser, { error }] = useMutation(DELETE_USER);

    const onDelete = useCallback(
        () =>
            deleteUser({
                variables: {
                    id,
                },
            })
                .then(() => (id === userId ? setUserId(-1) : undefined))
                .catch((err) => console.error(err)),
        [deleteUser, id, setUserId, userId],
    );

    return error ? (
        <ServerErrorMessage />
    ) : (
        <Container>
            <Avatar src={avatar} alt={username} />
            <h1>
                {username}, {age} лет. Пошлый.
            </h1>
            {userId === 1 && Number(id) !== 1 && (
                <DeleteButton onClick={onDelete}>
                    <Trash />
                </DeleteButton>
            )}
        </Container>
    );
};
