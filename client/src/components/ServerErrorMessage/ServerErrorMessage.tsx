import React from 'react';

import { Container } from './ServerErrorMessage.styles';

export const ServerErrorMessage = React.memo(() => (
    <Container>
        <h1>500 | Server Error</h1>
    </Container>
));
