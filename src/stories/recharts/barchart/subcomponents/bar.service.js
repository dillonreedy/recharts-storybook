export class BarService {
    static getArgTypes() {
      return {
        uvStroke: {
            control: 'color',
            description: 'The color of the uv bar.',
            defaultValue: { summary: '#8884d8'},
        },
        pvStroke: {
          control: 'color',
          description: 'The color of the pv bar.',
          defaultValue: { summary: '#8884d8'},
        },
      };
    }
  }