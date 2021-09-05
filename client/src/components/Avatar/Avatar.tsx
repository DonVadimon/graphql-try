import styled from 'styled-components';

export const Avatar = styled.img`
    width: ${({ width }) => width || '100px'};
    height: ${({ height }) => height || '100px'};
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`;
