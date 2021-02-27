import React from 'react';
import { Line } from './Line';

export default {
  title: 'Recharts/cartesian/Line',
  component: Line,
  argTypes: {
    type: { 
      control: 'select', 
      options: ['basis' , 'basisClosed' , 'basisOpen' , 'linear' , 'linearClosed' , 'natural' , 'monotoneX' , 'monotoneY' , 'monotone' , 'step' , 'stepBefore' , 'stepAfter']
    },
    stroke: {
      control: 'color'
    },
    onClick: {
      action: 'clicked'
    }
  },
};

const Template = (args) => <Line {...args} />;

export const Default = Template.bind({});
Default.args = {
  dataKey: 'price',
}

export const MonotoneRed = Template.bind({});
MonotoneRed.args = {
  type: 'monotone',
  dataKey: 'price',
  stroke: 'red'
};
