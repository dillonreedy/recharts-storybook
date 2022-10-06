import React from "react";
import { subDays } from "date-fns";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AreaChartComponent } from "./AreaChartComponent";
import { TimeSeriesData } from "../../../types/data/DataProps";

const data: TimeSeriesData[] = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substring(0, 10),
    value: 1 + Math.random(),
  });
}

export default {
  title: "Recharts/Area Chart",
  component: AreaChartComponent,
} as ComponentMeta<typeof AreaChartComponent>;

const Template: ComponentStory<typeof AreaChartComponent> = (args) => <AreaChartComponent {...args} />;

export const Simple = Template.bind({});
Simple.args = { data };
