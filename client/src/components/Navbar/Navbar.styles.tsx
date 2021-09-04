import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    background: teal;
    color: white;
`;

export const Item = styled.div`
    padding: 8px;
    height: 100%;
    width: 100%;
    background: #01cece;
    transition: all linear 100ms;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    &:hover {
        background: #0cb6b6;
    }
`;
