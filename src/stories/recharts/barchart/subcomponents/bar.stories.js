import { BarChartService } from '../barchart.service';
import { combine } from '../args.service';
import { BarService } from './bar.service';

const barChartArgs = BarChartService.getArgs();
const subcomponentArgs = BarChartService.getSubcomponentArgs();
const args = combine(barChartArgs, subcomponentArgs);

export default {
  title: 'Recharts/Bar Chart/Subcomponents',
  argTypes: BarService.getArgTypes()
};

const TemplateCopy = BarChartService.getTemplate();

export const Bar = TemplateCopy.bind({});
Bar.parameters = { controls: {include: ['uvStroke', 'pvStroke']}}
Bar.args = args;
