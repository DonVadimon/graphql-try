import { IErrorStyles } from 'global.styles';
import styled from 'styled-components';

export const Input = styled.input<IErrorStyles>`
    background: white;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ error }) => (error ? 'tomato' : 'white')};
    box-shadow: ${({ error }) => (error ? '0 0 8px tomato' : 'none')};
    outline: none;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    font-size: 20px;
    color: teal;
`;
