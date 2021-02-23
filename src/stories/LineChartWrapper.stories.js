import React from 'react';
import { LineChartWrapper } from './LineChartWrapper';

export default {
  title: 'Charts/Line Chart',
  component: LineChartWrapper,
  argTypes: {
    data: { control: 'object' },
    type: { 
      control: 'select', 
      options: ['basis' , 'basisClosed' , 'basisOpen' , 'linear' , 'linearClosed' , 'natural' , 'monotoneX' , 'monotoneY' , 'monotone' , 'step' , 'stepBefore' , 'stepAfter']
    },
    stroke: {
      control: 'color'
    }
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
      "month": "Jan",
      "price": 4000,
    },
    {
      "month": "Feb",
      "price": 3000,
    },
    {
      "month": "Mar",
      "price": 2000,
    },
    {
      "month": "Apr",
      "price": 2780,
    },
    {
      "month": "Jun",
      "price": 1890,
    },
    {
      "month": "Jul",
      "price": 2390,
    },
    {
      "month": "Aug",
      "price": 3490,
    }
  ],
  margin: { top: 5, right: 30, left: 20, bottom: 5 },
  strokeDashArray: "4",
  xaxisDataKey: 'month',
  type: 'monotone',
  lineDataKey: 'price',
  stroke: '#8884d8'
};
