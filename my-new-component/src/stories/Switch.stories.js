import { action } from '@storybook/addon-actions';
import { Switch } from '../Components/index.js';

export default {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        isChecked: {
            control: {type: 'boolean'}
        },
        disabled: {
            control: {type: 'boolean'}
        },
    }
  };

const Template = (args) => ({ 
    Component: Switch,
    props: args,
    on: {
      change: action('onChange'),
      keyup: action('onKeyUp'),
      keydown: action('onKeyDown'),
    }
  });

export const Enabled = Template.bind({});
    Enabled.args = {
        isChecked: true,
        disabled: false,
};

export const Disabled = Template.bind({});
    Disabled.args = {
        isChecked: false,
        disabled: true,
};


