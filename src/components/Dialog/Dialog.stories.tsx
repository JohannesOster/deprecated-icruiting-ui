import React from 'react';
import {Story} from '@storybook/react';
import {Dialog} from './Dialog';
import {DialogProps} from './types';

export default {
  title: 'Dialog',
  component: Dialog,
};

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {};
