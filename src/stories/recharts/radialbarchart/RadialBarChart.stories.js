

import React from 'react';
import RadialBarChartComponent from './RadialBarChartComponent';

import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

export default {
  title: 'Recharts/Radial Bar Chart',
  component: RadialBarChartComponent
};
const Template = (args) => <RadialBarChartComponent {...args} />;
const data = [
    { name: '18-24', uv: 60, amt: 31.47, pv: 2400,  fill: '#8884d8' },
    { name: '25-29', uv: 50, amt: 26.69, pv: 4500, fill: '#83a6ed' },
    { name: '30-34', uv: 30, amt: 15.69, pv: -1398, fill: '#8dd1e1' },
    { name: '35-39', uv: 59, amt: 8.22, pv: 2800, fill: '#82ca9d' },
    { name: '40-49', uv: 48, amt: 8.63, pv: 1908, fill: '#a4de6c' },
    { name: '50+', uv: 62, amt: 2.63, pv: -2800, fill: '#d0ed57' },
    { name: 'unknown', uv: 38, amt: 6.67, pv: 4800, fill: '#ffc658' },
  ];
  const style = {
    lineHeight: '24px',
    left: 300,
  };
export const Simple = Template.bind({});
Simple.args = {
    data,
    colors,
    style  
};