import { IErrorStyles } from 'global.styles';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button<{ rounded: 'left' | 'right' }>`
    background: white;
    border: 1px solid teal;
    border-radius: ${({ rounded }) => (rounded === 'left' ? '8px 0 0 8px' : '0 8px 8px 0')};
    color: teal;
    &:hover {
        background: teal;
        color: white;
    }
    padding: 12px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all linear 100ms;
    cursor: pointer;

    svg {
        width: 24px;
        height: 24px;
    }
`;

export const ValueContainer = styled.div<IErrorStyles>`
    width: 100px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    background: white;
    color: ${({ error }) => (error ? 'tomato' : 'teal')};
    border-bottom: 1px solid teal;
    border-top: 1px solid teal;
    user-select: none;
`;
