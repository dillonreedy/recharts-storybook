import React from 'react';
import { AreaChartComponent } from './AreaChartComponent';
import { subDays } from "date-fns";

export default {
  title: 'Recharts/Area Chart',
  component: AreaChartComponent
};

const Template = (args) => <AreaChartComponent {...args} />;

const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random()
  });
}
export const Simple = Template.bind({});
Simple.args = {
  data: data
};
