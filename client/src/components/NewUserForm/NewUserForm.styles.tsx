import { IErrorStyles } from 'global.styles';
import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-bottom: 20px;
`;

export const FormItem = styled.div`
    margin: 12px 0;
`;

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

export const Button = styled.button`
    background: #0050fd;
    padding: 12px;
    font-size: 24px;
    color: white;
    border-radius: 8px;
    border: none;
    outline: none;
    transition: all linear 100ms;
    cursor: pointer;

    &:hover {
        background: #006eff;
    }
`;
