const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');

addDecorator(jsxDecorator);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true
    }
  }
}