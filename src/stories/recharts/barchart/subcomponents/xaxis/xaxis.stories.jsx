import { BarChartService } from "../../barchart.service";
import { combine } from "../../args.service";
import { XAxisService } from "./xaxis.service";

const barChartArgs = BarChartService.getArgs();
const subcomponentArgs = BarChartService.getSubcomponentArgs();
const args = combine(barChartArgs, subcomponentArgs);

export default {
  title: "Recharts/Bar Chart/Subcomponents",
  argTypes: XAxisService.getArgTypes(),
};

const TemplateCopy = BarChartService.getTemplate();

export const XAxis = TemplateCopy.bind({});
XAxis.parameters = { controls: { include: ["dataKey"] } };
XAxis.args = args;
