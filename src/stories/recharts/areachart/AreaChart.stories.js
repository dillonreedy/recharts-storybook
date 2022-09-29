import React from 'react';
import { subDays } from 'date-fns';
import { AreaChartComponent } from './AreaChartComponent';

export default {
  title: 'Recharts/Area Chart',
  component: AreaChartComponent,
};

function Template(args) {
  return <AreaChartComponent {...args} />;
}

const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}
export const Simple = Template.bind({});
Simple.args = {
  data,
};
