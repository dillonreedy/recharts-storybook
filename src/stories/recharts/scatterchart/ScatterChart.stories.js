import React from 'react';
import ScatterChartComponent from './ScatterChartComponent';

export default {
  title: 'Recharts/Scatter Chart',
  component: ScatterChartComponent,
};
function Template(args) {
  return <ScatterChartComponent {...args} />;
}
const data01 = [
  {
    x: 100, y: 200, z: 200, errorY: [20, 30], errorX: 30,
  },
  {
    x: 120, y: 100, z: 260, errorY: 20, errorX: [20, 30],
  },
  {
    x: 170, y: 300, z: 400, errorY: [12, 8], errorX: 20,
  },
  {
    x: 140, y: 250, z: 280, errorY: 23, errorX: [12, 8],
  },
  {
    x: 150, y: 400, z: 500, errorY: [21, 10], errorX: 23,
  },
  {
    x: 110, y: 280, z: 200, errorY: 21, errorX: [21, 10],
  },
];

const data02 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

const data03 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];

const data04 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

const data05 = [{ x: 100, y: 200, z: 200 }, { x: 100, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 }];

const data06 = [
  { x: 0, y: 'Sun', z: 78 },
  { x: 0, y: 'Mon', z: 40 },
  { x: 0, y: 'Tue', z: 60 },
  { x: 3, y: 'Wed', z: 100 },
];
export const Simple = Template.bind({});
Simple.args = {
  data01,
  data02,
  data03,
  data04,
  data05,
  data06,
};
