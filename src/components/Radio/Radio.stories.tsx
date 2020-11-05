import React from 'react';
import {Story} from '@storybook/react';
import {Radio} from './Radio';
import {RadioProps} from './types';

export default {
  title: 'Radio',
  component: Radio,
};

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  description: 'Descriptiontext',
  name: 'radio',
  options: [
    {label: 'Optionlabel1', value: 'optionvalue1'},
    {label: 'Optionlabel2', value: 'optionvalue2'},
  ],
};
