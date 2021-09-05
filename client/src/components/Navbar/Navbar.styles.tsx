import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    background: #01cece;
    color: white;
    margin-bottom: 20px;
`;

export const Item = styled.div`
    padding: 8px;
    height: 100px;
    width: 100%;
    background: #01cece;
    transition: all linear 100ms;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    user-select: none;

    &:hover {
        background: #0cb6b6;
    }
`;

export const Username = styled.h3`
    margin: 0 0 0 12px;
`;
