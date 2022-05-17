import React from 'react';
import CartesianAxisComponent from './CartesianAxisComponent';

export default {
  title: 'Recharts/Cartesian Axis',
  component: CartesianAxisComponent
};

const Template = (args) => <CartesianAxisComponent {...args} />;
const ticks = [
    { value: 10, coordinate: 50 },
    { value: 1000, coordinate: 100 },
    { value: 20, coordinate: 150 },
    { value: 40, coordinate: 200 },
    { value: 90, coordinate: 250 }
  ];
export const Simple = Template.bind({});
Simple.args = {
    ticks: ticks
};
