import React from 'react';

import { Container } from './UserCard.styles';
import { IUserCardProps } from './UserCard.types';

export const UserCard: React.FC<IUserCardProps> = ({ user: { username, age } }) => {
    return (
        <Container>
            <h1>
                {username}, {age} лет. Пошлый
            </h1>
        </Container>
    );
};
