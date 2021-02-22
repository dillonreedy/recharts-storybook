import React from 'react';
import { LineChartWrapper } from './LineChartWrapper';

export default {
  title: 'Charts/Line Chart',
  component: LineChartWrapper,
  argTypes: {
    data: { control: 'object' }
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic",
      }
    }
  }
};

const Template = (args) => <LineChartWrapper {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  width: 770,
  height: 250,
  data: [
    {
      "name": "Page A",
      "uv": 4000,
    },
    {
      "name": "Page B",
      "uv": 3000,
    },
    {
      "name": "Page C",
      "uv": 2000,
    },
    {
      "name": "Page D",
      "uv": 2780,
    },
    {
      "name": "Page E",
      "uv": 1890,
    },
    {
      "name": "Page F",
      "uv": 2390,
    },
    {
      "name": "Page G",
      "uv": 3490,
    }
  ],
  margin: { top: 5, right: 30, left: 20, bottom: 5 },
  strokeDashArray: "4",
  dataKey: 'name',
  type: 'monotone'
};
