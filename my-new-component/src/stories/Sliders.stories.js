import { action } from '@storybook/addon-actions';
import { Sliders } from '../Components/index.js';

export default {
    title: 'Components/Sliders',
    component: Sliders,
    tags: ['autodocs'],
    argTypes: {
      value: {
        control: {type: 'number'}
      },
      min: {
        control: {type: 'number'}
      },
      max: {
        control: {type: 'number'}
      },
      disabled: {
        control: {type: 'boolean'}
      },
    }
};
const Template = (args) => ({ 
    Component: Sliders,
    props: args,
    on: {
      change:action('onChange'),
      update:action('onUpdate'),
    }
  });

export const Default = Template.bind({});
Default.args = {
  value: 40,
  min: 0,
  max: 100,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 40,
  min: 0,
  max: 100,
  disabled: true,
};
  