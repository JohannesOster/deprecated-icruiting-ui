import React from 'react';
import {Story} from '@storybook/react';
import {Spinner} from './Spinner.sc';
import {SpinnerProps} from './types';

export default {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
    foreground: {control: {type: 'color'}},
    background: {control: {type: 'color'}},
  },
};

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
