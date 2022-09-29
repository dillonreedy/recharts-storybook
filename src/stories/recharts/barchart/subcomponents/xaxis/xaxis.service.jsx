import { BarChartService } from '../../barchart.service';

export class XAxisService {
  static getArgTypes() {
    const { data } = BarChartService.getArgs();
    return {
      dataKey: {
        control: {
          type: 'select',
        },
        options: Object.keys(data[0]),
        description: 'This controls the name given to each datum in the x axis.',
      },
    };
  }

  static getArgs() {
    return {
      dataKey: 'name',
    };
  }
}
