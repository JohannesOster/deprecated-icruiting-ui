import React from 'react';
import {Story} from '@storybook/react';
import {Textarea} from './Textarea';
import {TextareaProps} from './types';

export default {
  title: 'Textarea',
  component: Textarea,
};

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  description: 'Descriptiontext',
};
