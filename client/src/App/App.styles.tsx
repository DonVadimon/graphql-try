import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    text-align: center;
`;

export const Header = styled.header`
    background-color: ${(props) => props.color || '#282c34'};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const AppLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const AppLogo = styled.div`
    height: 400px;
    pointer-events: none;
    animation: ${AppLogoSpin} infinite 20s linear;

    svg {
        width: inherit;
        height: inherit;
    }
`;

export const AppLink = styled.a`
    color: #61dafb;
`;
