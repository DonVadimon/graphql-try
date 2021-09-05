import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Spinner } from './Spinner';

export default {
    title: 'Components/Atoms/Spinner',
    component: Spinner,
    argTypes: {},
} as Meta;

export const Default: Story = (args) => <Spinner {...args} />;
