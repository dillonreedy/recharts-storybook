export class BarService {
    static getArgTypes() {
      return {
        barDataKey: {
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
        fill: '#8884d8'
      }
    }
  }