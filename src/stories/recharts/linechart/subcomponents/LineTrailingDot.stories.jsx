import React from 'react';
import { LineTrailingDotComponent } from './LineTrailingDotComponent';

export default {
  title: 'Recharts/Line Chart/Customized Dots',
  component: LineTrailingDotComponent,
};

function Template(args) {
  return <LineTrailingDotComponent {...args} />;
}
const lineData = [
  {
    month: 'Jan',
    price: 4000,
  },
  {
    month: 'Feb',
    price: 3000,
  },
  {
    month: 'Mar',
    price: 2000,
  },
  {
    month: 'Apr',
    price: 2780,
  },
  {
    month: 'Jun',
    price: 1890,
  },
  {
    month: 'Jul',
    price: 2390,
  },
  {
    month: 'Aug',
    price: 3490,
  },
];

const lastDot = lineData[lineData.length - 1];
const data = lineData.map((x) => ({ ...x, lastDot: (x.month === lastDot.month && x.price === lastDot.price) ? lastDot.price : undefined }));
export const TrailingDot = Template.bind({});
TrailingDot.args = {
  data,
};
