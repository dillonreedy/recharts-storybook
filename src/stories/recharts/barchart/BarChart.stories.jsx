import { combine } from "./args.service";
import { BarChartService } from "./barchart.service";

const barChartArgs = BarChartService.getArgs();
const subcomponentArgs = BarChartService.getSubcomponentArgs();
const args = combine(barChartArgs, subcomponentArgs);

export default {
  title: "Recharts/Bar Chart/Props",
  argTypes: BarChartService.getArgTypes(),
};

const Template = BarChartService.getTemplate();

export const Sizing = Template.bind({});
Sizing.parameters = { controls: { include: ["width", "height"] } };
Sizing.args = args;

export const Data = Template.bind({});
Data.parameters = { controls: { include: "data" } };
Data.args = args;
