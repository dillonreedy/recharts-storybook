import React from 'react';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import CurveComponent from './CurveComponent';

export default {
  title: 'Recharts/Curve',
  component: CurveComponent,
};
function Template(args) {
  return <CurveComponent {...args} />;
}
const points = [
  { x: 10, y: 40 },
  { x: 50, y: 150 },
  { x: 90, y: 60 },
  { x: 130, y: 180 },
  { x: 170, y: 50 },
];
const scale = scaleOrdinal(schemeCategory10);
const ticks = [0, 0.25, 0.5, 0.75, 1];
export const Simple = Template.bind({});
Simple.args = {
  points,
  scale,
  ticks,
};
