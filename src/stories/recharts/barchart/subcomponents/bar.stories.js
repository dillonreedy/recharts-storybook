import { BarChartService } from '../barchart.service';
import { combine } from '../args.service';
import { BarService } from './bar.service';

const barChartArgs = BarChartService.getArgs();
const subcomponentArgs = BarChartService.getSubcomponentArgs();
const args = combine(barChartArgs, subcomponentArgs);
const args2 = {
  ...args
}
args2['fill'] = '#ff294f';
args2['barDataKey'] = 'uv';
export default {
  title: 'Recharts/Bar Chart/Subcomponents/Bar',
  argTypes: BarService.getArgTypes()
};

const TemplateCopy = BarChartService.getTemplate();

export const Blue = TemplateCopy.bind({});
Blue.parameters = { controls: {include: ['barDataKey', 'fill']}}
Blue.args = args;

export const Red = TemplateCopy.bind({});
Red.parameters = { controls: {include: ['barDataKey', 'fill']}}
Red.args = args2;