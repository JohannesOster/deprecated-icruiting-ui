import React from 'react';
import {Story} from '@storybook/react';
import {ChipInput} from './ChipInput';
import {ChipInputProps} from './types';

export default {
  title: 'ChipInput',
  component: ChipInput,
};

const Template: Story<ChipInputProps> = (args) => <ChipInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  description: 'Descriptiontext',
  value: ['Chip 1'],
};
