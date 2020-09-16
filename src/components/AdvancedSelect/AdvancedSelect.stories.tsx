import React from 'react';
import {Story} from '@storybook/react';
import {AdvancedSelect} from './AdvancedSelect';
import {AdvancedSelectProps} from './types';

export default {
  title: 'AdvancedSelect',
  component: AdvancedSelect,
};

const Template: Story<AdvancedSelectProps> = (args) => (
  <AdvancedSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  description: 'Descriptiontext',
  options: [
    {render: () => <>Option 0 as plain text</>, value: 'optionvalue0'},
    {
      render: () => (
        <div style={{border: '1px solid gray'}}>Option 1 as div</div>
      ),
      value: 'optionvalue1',
    },
    {
      render: () => (
        <span style={{background: 'cyan'}}>Option 2 as cyan span</span>
      ),
      value: 'optionvalue2',
    },
  ],
};
