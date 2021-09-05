import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { IErrorStyles } from 'global.styles';

import { Input } from './Input';

export default {
    title: 'Components/Atoms/Input',
    component: Input,
    argTypes: {},
} as Meta;

export const Default: Story<IErrorStyles> = (args) => (
    <div style={{ background: 'teal', padding: 100 }}>
        <Input {...args} />
    </div>
);

export const Error: Story<IErrorStyles> = (args) => (
    <div style={{ background: 'teal', padding: 100 }}>
        <Input {...args} />
    </div>
);
Error.args = {
    error: true,
};
