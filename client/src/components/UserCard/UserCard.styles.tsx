import styled from 'styled-components';

export const Container = styled.div`
    background: teal;
    width: 100%;
    height: 200px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-radius: 20px;
    position: relative;

    h1 {
        font-size: 32px;
    }
`;

export const DeleteButton = styled.button`
    background: none;
    border: 1px solid tomato;
    border-radius: 4px;
    color: tomato;
    transition: all linear 100ms;
    padding: 8px;
    margin: 0;
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: tomato;
        color: white;
    }

    svg {
        width: 32px;
        height: 32px;
    }
`;
