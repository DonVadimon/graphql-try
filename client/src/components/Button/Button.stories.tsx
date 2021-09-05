import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Button } from './Button';

export default {
    title: 'Components/Atoms/Button',
    component: Button,
    argTypes: {},
} as Meta;

export const Default: Story = (args) => <Button {...args} >Button</Button>;
