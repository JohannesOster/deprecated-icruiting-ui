import React from 'react';
import {Story} from '@storybook/react';
import {Select} from './Select';
import {SelectProps} from './types';

export default {
  title: 'Select',
  component: Select,
};

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  description: 'Descriptiontext',
  name: 'radio',
  options: [
    {label: 'Optionlabel1', value: 'optionvalue1'},
    {label: 'Optionlabel2', value: 'optionvalue2'},
  ],
};
