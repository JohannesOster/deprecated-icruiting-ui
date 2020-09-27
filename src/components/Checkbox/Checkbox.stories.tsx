import React from 'react';
import {Story} from '@storybook/react';
import {Checkbox} from './Checkbox';
import {CheckboxProps} from './types';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  description: 'Descriptiontext',
  name: 'radio',
  options: [
    {label: 'Optionlabel1', value: 'Optionlabel1'},
    {label: 'Optionlabel1', value: 'Optionlabel1'},
  ],
};
