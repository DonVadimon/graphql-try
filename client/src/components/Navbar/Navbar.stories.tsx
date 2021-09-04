import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Navbar } from './Navbar';

export default {
    title: 'Components/Atoms/Navbar',
    component: Navbar,
    argTypes: {},
} as Meta;

export const Default: Story = () => <Navbar />;
