import React from 'react';
import PieComponent from './PieComponent';
export default {
  title: 'Recharts/Pie',
  component: PieComponent
};
const Template = (args) => <PieComponent {...args} />;
const data = [
    { name: 'iphone4', value: 120, fill: '#ff7300' },
    { name: 'iphone4s', value: 500, fill: '#e5671a' },
    { name: 'iphone5', value: 600, fill: '#907213' }
  ];
  const sectors = [
    { cx: 250, cy: 250, startAngle: 0, endAngle: 60, innerRadius: 100, outerRadius: 200 },
    { cx: 250, cy: 250, startAngle: 60, endAngle: 120, innerRadius: 100, outerRadius: 200 },
    { cx: 250, cy: 250, startAngle: 120, endAngle: 180, innerRadius: 100, outerRadius: 200 },
    { cx: 250, cy: 250, startAngle: 180, endAngle: 240, innerRadius: 100, outerRadius: 200 },
    { cx: 250, cy: 250, startAngle: 240, endAngle: 300, innerRadius: 100, outerRadius: 200 },
    { cx: 250, cy: 250, startAngle: 300, endAngle: 360, innerRadius: 100, outerRadius: 200 },
  ];
  
export const Simple = Template.bind({});
Simple.args = {
    data,
    sectors
};