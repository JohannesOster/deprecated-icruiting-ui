import React from 'react';
import {Story} from '@storybook/react';
import {Button, Props} from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {background: 'darkCyan', children: 'Buttonlabel'};
