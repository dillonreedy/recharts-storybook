import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { BarChartService } from './barchart.service';

const argTypes = BarChartService.getArgTypes();
export default {
  title: 'Recharts/Bar Chart',
  component: BarChart,
  argTypes
};

const Template = (({dataKey, pvStroke, uvStroke, strokeDasharray, dataKeyBar1, dataKeyBar2, ...props}) => {  
  return (
    <BarChart {...props}>
    <CartesianGrid strokeDasharray={strokeDasharray} />
    <XAxis dataKey={dataKey} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey={dataKeyBar1} fill={pvStroke} />
    <Bar dataKey={dataKeyBar2} fill={uvStroke} />
  </BarChart>
  )
});

export const Simple = Template.bind({});
const {width, height, data, margin} = BarChartService.getProps();
Simple.args = {
  dataKey: 'name',
  pvStroke: '#8884d8',
  uvStroke: '#82ca9d',
  strokeDasharray: '3 3',
  dataKeyBar1: 'uv',
  dataKeyBar2: 'pv',
  width,
  height,
  data,
  margin
};
