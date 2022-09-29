import React from 'react';
import CartesianGridComponent from './CartesianGridComponent';

export default {
  title: 'Recharts/Cartesian Grid',
  component: CartesianGridComponent,
};

function Template(args) {
  return <CartesianGridComponent {...args} />;
}
const horizontalPoints = [10, 20, 30, 100, 400];
const verticalPoints = [100, 200, 300, 400];

const verticalFill = ['red', '#eee'];
const horizontalFill = ['#eee', 'yellow'];

const strokeDasharray = '10 10';
export const Simple = Template.bind({});
Simple.args = {
  horizontalPoints,
  verticalPoints,
  verticalFill,
  horizontalFill,
  strokeDasharray,
};
