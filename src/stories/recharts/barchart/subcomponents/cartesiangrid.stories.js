import { BarChartService } from '../barchart.service';
import { combine } from '../args.service';
import { CartesianGridService } from './cartesiangrid.service';

const barChartArgs = BarChartService.getArgs();
const subcomponentArgs = BarChartService.getSubcomponentArgs();
const args = combine(barChartArgs, subcomponentArgs);
const args2 = {
  ...args
}
args2['strokeDasharray'] = '10 10'

export default {
  title: 'Recharts/Bar Chart/Subcomponents/Cartesian Grid',
  argTypes: CartesianGridService.getArgTypes()
};

const TemplateCopy = BarChartService.getTemplate();

export const ShortDashes = TemplateCopy.bind({});
ShortDashes.parameters = { controls: {include: ['strokeDasharray']}}
ShortDashes.args = args;

export const LongDashes = TemplateCopy.bind({});
LongDashes.parameters = { controls: {include: ['strokeDasharray']}}
LongDashes.args = args2;