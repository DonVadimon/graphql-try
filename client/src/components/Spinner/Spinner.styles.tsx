import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const IconContainer = styled.div`
    height: 400px;
    width: 400px;
    pointer-events: none;
    animation: ${Spin} infinite 10s linear;

    img {
        width: inherit;
        height: inherit;
    }
`;
