import React from 'react';
import {Story} from '@storybook/react';
import {LoadingSpinner} from './LoadingSpinner.sc';
import {LoadingSpinnerProps} from './types';

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    foreground: {control: {type: 'color'}},
    background: {control: {type: 'color'}},
  },
};

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Primary = Template.bind({});
