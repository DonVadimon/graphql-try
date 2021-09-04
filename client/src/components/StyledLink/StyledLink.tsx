import React from 'react';
import { Link } from 'react-router-dom';

import { StyledLink as StyledComponent } from './StyledLink.styles';

export const StyledLink: React.FC<{ to: string }> = ({ to, children }) => {
    return (
        <Link to={to}>
            <StyledComponent>{children}</StyledComponent>
        </Link>
    );
};
