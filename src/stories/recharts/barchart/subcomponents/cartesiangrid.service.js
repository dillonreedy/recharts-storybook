
export class CartesianGridService {
    static getArgs() {
        return {
            strokeDasharray: '3 3'
        }
    }

    static getArgTypes() {
        return {
            strokeDasharray: {
              description: 'The pattern of dashes and gaps used to paint the lines of the grid',
              defaultValue: { summary: 'undefined'},
            },
          }
        }
  }