import React from 'react';
import FunnelChartComponent from './FunnelChartComponent';

export default {
  title: 'Recharts/Funnel Chart',
  component: FunnelChartComponent,
};
function Template(args) {
  return <FunnelChartComponent {...args} />;
}

const data = [
  {
    fill: '#EEEEEE',
    name: 'A',
    value: 1009,
  },
  {
    fill: '#E0E0E0',
    name: 'B',
    value: 903,
  },
  {
    fill: '#BDBDBD',
    name: 'C',
    value: 756,
  },
  {
    fill: '#9E9E9E',
    name: 'D',
    value: 622,
  },
  {
    fill: '#757575',
    name: 'E',
    value: 602,
  },
  {
    fill: '#424242',
    name: 'F',
    value: 580,
  },
];

export const Simple = Template.bind({});
Simple.args = {
  data,
};
