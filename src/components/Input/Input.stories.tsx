import React from 'react';
import {Story} from '@storybook/react';
import {Input} from './Input';
import {InputProps} from './types';

export default {
  title: 'Input',
  component: Input,
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  description: 'Descriptiontext',
};
