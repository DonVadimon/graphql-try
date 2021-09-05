import { IErrorStyles } from 'global.styles';
import styled from 'styled-components';

export const Textarea = styled.textarea<IErrorStyles>`
    width: 100%;
    min-height: 120px;
    resize: none;
    background: white;
    border: 1px solid ${({ error }) => (error ? 'tomato' : 'white')};
    box-shadow: ${({ error }) => (error ? '0 0 8px tomato' : 'none')};
    border-radius: 8px;
    outline: none;
    padding: 12px;
    font-size: 20px;
    caret-color: teal;
    color: teal;
`;
