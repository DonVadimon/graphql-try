import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #b3e0e0;
    color: #033535;
    border-radius: 20px;
    padding: 12px 88px 12px 20px;
    width: 100%;
    position: relative;
    min-height: 92px;
`;

export const Title = styled.h3`
    margin: 0 0 12px 0;
    font-size: 24px;
    color: white;
    text-shadow: 0 0 8px #033535;
`;

export const Content = styled.p`
    margin: 0;
    font-size: 20px;
    word-break: break-all;
`;
