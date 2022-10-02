import React from "react";
import StackedBarChartComponent from "./StackedBarChartComponent";

export default {
  title: "Recharts/Bar Chart",
  component: StackedBarChartComponent,
};

function Template(args) {
  return <StackedBarChartComponent {...args} />;
}
export const StackedBarChart = Template.bind({});

const data = [
  {
    name: "Page A", uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: "Page B", uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: "Page C", uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: "Page D", uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: "Page E", uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: "Page F", uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: "Page G", uv: 3490, pv: 4300, amt: 2100,
  },
];

const cPalette = [
  "#b16b25",
  "#69c70a",
  "#19c819",
  "#0b9898",
  "#2323d7",
  "#5e2a92",
  "#b93778",
  "#db9c5c",
  "#9e9e24",
  "#3acf3a",
  "#13ae61",
  "#1deded",
  "#7310d5",
  "#e44996",
  "#d91212",
  "#f2f226",
  "#91eb37",
  "#51f651",
  "#33ebeb",
  "#5757e5",
  "#6626a6",
  "#d35f99",
  "#a35c14",
  "#d4d42b",
  "#3cb93c",
  "#50d7d7",
  "#1c1c87",
  "#963196",
  "#c82878",
  "#7c2222",
  "#f38516",
  "#22b922",
  "#72d5a3",
  "#3185d8",
  "#66319b",
  "#861986",
  "#c21919",
  "#d8d846",
  "#87d638",
  "#0fd270",
  "#2d80d2",
  "#800df2",
  "#ae2469",
  "#f53d3d",
  "#acac1b",
  "#22b422",
  "#4ac4c4",
  "#0e0e8b",
  "#59278b",
  "#bc24bc",
];

StackedBarChart.args = {
  data,
  cPalette,
};
