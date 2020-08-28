import React from 'react';
import {Story} from '@storybook/react';
import {Button} from './Button';
import {ButtonProps} from './types';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    kind: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary'],
      },
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
