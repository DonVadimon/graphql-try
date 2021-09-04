import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Trash } from 'assets';

import { DeleteButton } from './DeleteButton';

export default {
    title: 'Components/Atoms/DeleteButton',
    component: DeleteButton,
    argTypes: {},
} as Meta;

export const Default: Story = (args) => (
    <DeleteButton {...args}>
        <Trash />
    </DeleteButton>
);
Default.args = {
    onClick: () => alert('click'),
};
