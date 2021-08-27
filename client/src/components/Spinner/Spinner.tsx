import React from 'react';
import { Logo } from 'assets';

import { IconContainer } from './Spinner.styles';

export const Spinner = React.memo(() => (
    <IconContainer>
        <Logo />
    </IconContainer>
));
