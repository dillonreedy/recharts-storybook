import React from 'react';
import { BarChart } from './BarChart';

export default {
  title: 'Recharts/Bar Chart',
  component: BarChart,
  argTypes: {
    pvStroke: {
        control: 'color'
    },
    uvStroke: {
        control: 'color'
    },
  },
};

const Template = (args) => <BarChart {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  dataKey: 'name',
  pvStroke: '#8884d8',
  uvStroke: '#82ca9d'
};
