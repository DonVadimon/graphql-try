import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.color || '#282c34'};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
`;
