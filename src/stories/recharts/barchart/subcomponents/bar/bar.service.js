import { BarChartService } from "../../barchart.service";

export class BarService {
    static getArgTypes() {
      const { data } = BarChartService.getArgs();
      return {
        barDataKey: {
          control: {
            type: 'select'
          },
          options: Object.keys(data[0]),
          description: 'The data key the component binds to within the given data.',
        },
        fill: {
          control: 'color',
          description: 'The color of the bar.',
          defaultValue: { summary: '#8884d8'},
        },
      };
    }

    static getArgs() {
      return {
        barDataKey: 'uv',
        fill: '#463edb'
      }
    }
  }