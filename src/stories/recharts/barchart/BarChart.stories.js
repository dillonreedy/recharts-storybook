import { combine } from './args.service';
import { BarChartService } from './barchart.service';

const barChartArgs = BarChartService.getArgs();
const subcomponentArgs = BarChartService.getSubcomponentArgs();
const args = combine(barChartArgs, subcomponentArgs);

export default {
  title: 'Recharts/Bar Chart',
  argTypes: BarChartService.getArgTypes()
};

const Template = BarChartService.getTemplate();

export const Controls = Template.bind({});
Controls.parameters = { controls: {exclude: Object.keys(subcomponentArgs)}}
Controls.args = args;
