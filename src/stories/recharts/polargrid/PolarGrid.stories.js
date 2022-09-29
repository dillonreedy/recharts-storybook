import React from 'react';
import PolarGridComponent from './PolarGridComponent';

export default {
  title: 'Recharts/Polar Grid',
  component: PolarGridComponent,
};
function Template(args) {
  return <PolarGridComponent {...args} />;
}
const polarAngles = [0, 30, 60, 90, 145, 180, 200, 270, 300];
const polarRadius = [10, 20, 40, 80];
export const Simple = Template.bind({});
Simple.args = {
  polarAngles,
  polarRadius,
};
