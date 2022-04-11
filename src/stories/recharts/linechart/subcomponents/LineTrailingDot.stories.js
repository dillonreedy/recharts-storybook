import React from 'react';
import { LineTrailingDotComponent } from './LineTrailingDotComponent';

export default {
  title: 'Recharts/Line Chart/Customized Dots',
  component: LineTrailingDotComponent,
};

const Template = (args) => <LineTrailingDotComponent {...args} />;
const data = [
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
];

const lastDot = data[data.length-1];
const lastDotData = data.map(x => ({...x, lastDot: (x.month === lastDot.month && x.price === lastDot.price) ? lastDot.price : undefined}));
export const TrailingDot = Template.bind({});
TrailingDot.args = {
  width: 770,
  height: 250,
  data: lastDotData,
  margin: { top: 5, right: 30, left: 20, bottom: 5 },
  strokeDashArray: "4",
  xaxisDataKey: 'month',
  type: 'monotone',
  lineDataKey: 'price',
  stroke: '#8884d8'
};
