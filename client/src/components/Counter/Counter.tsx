import React from 'react';
import { Minus, Plus } from 'assets';

import { Button, Container, ValueContainer } from './Counter.styles';
import { ICounterProps } from './Counter.types';

export const Counter: React.FC<ICounterProps> = ({ value, onPlusClick, onMinusClick, error = false }) => {
    return (
        <Container>
            <Button type="button" onClick={onMinusClick} rounded="left">
                <Minus />
            </Button>
            <ValueContainer error={error}>{value}</ValueContainer>
            <Button type="button" onClick={onPlusClick} rounded="right">
                <Plus />
            </Button>
        </Container>
    );
};
