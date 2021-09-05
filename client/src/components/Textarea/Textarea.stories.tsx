import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { IErrorStyles } from 'global.styles';

import { Textarea } from './Textarea';

export default {
    title: 'Components/Atoms/Textarea',
    component: Textarea,
    argTypes: {},
} as Meta;

export const Default: Story<IErrorStyles> = (args) => (
    <div style={{ background: 'teal', padding: 100 }}>
        <Textarea {...args} />
    </div>
);

export const Error: Story<IErrorStyles> = (args) => (
    <div style={{ background: 'teal', padding: 100 }}>
        <Textarea {...args} />
    </div>
);
Error.args = {
    error: true,
};
