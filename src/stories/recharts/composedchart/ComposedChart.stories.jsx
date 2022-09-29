import React from 'react';
import ComposedChartComponent from './ComposedChartComponent';

export default {
  title: 'Recharts/Composed Chart',
  component: ComposedChartComponent,
};
function Template(args) {
  return <ComposedChartComponent {...args} />;
}

const data = [
  {
    name: 'Page A', uv: 590, pv: 800, amt: 1400,
  },
  {
    name: 'Page B', uv: 868, pv: 967, amt: 1506,
  },
  {
    name: 'Page C', uv: 1397, pv: 1098, amt: 989,
  },
  {
    name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
  },
  {
    name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
  },
  {
    name: 'Page F', uv: 1400, pv: 680, amt: 1700,
  },
];
const timeData = [
  {
    x: new Date('2019-07-04T00:00:00.000Z'),
    y: 5,
  },
  {
    x: new Date('2019-07-05T00:00:00.000Z'),
    y: 30,
  },
  {
    x: new Date('2019-07-06T00:00:00.000Z'),
    y: 50,
  },
  {
    x: new Date('2019-07-07T00:00:00.000Z'),
    y: 43,
  },
  {
    x: new Date('2019-07-08T00:00:00.000Z'),
    y: 20,
  },
  {
    x: new Date('2019-07-09T00:00:00.000Z'),
    y: -20,
  },
  {
    x: new Date('2019-07-10T00:00:00.000Z'),
    y: 30,
  },
];
const from = new Date('2019-07-04T00:00:00.000Z');
const to = new Date('2019-07-10T00:00:00.000Z');

export const Simple = Template.bind({});
Simple.args = {
  from,
  to,
  timeData,
  data,
};
