import { action } from '@storybook/addon-actions';
import { Button } from '../Components/index.js';
import '/Users/antonio/Desktop/MainLibraryGitHub/svelteLibrary/my-new-component/.storybook/css/theme.css';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {type: 'text'}
    },
    size: {
      options: ['small', 'medium', 'big'],
      control: {type: 'radio'}
    },
    elevated:  {
      control: {type: 'boolean'}
    },
    disabled: {
      control: {type: 'boolean'}
    },
    filled: {
      control: {type: 'boolean'}
    },
    tonal: {
      control: {type: 'boolean'}
    },
    outlined: {
      control: {type: 'boolean'}
    },
    text: {
      control: {type: 'boolean'}
    },
  }
};
const Template = (args) => ({ 
  Component: Button,
  props: args,
  on: {
    click: action('onClick'),
    blur: action('onBlur'),
    focus: action('onFocus'),
    dblclick: action('onDblClick'),
    mouseover: action('onMouseOver'),
  }
});

export const Elevated = Template.bind({});
Elevated.args = {
  label: 'Elevated',
  elevated: true,
  size: 'medium',
  disabled: false,
  filled: false,
  tonal: false,
  outlined: false,
  text: false,
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled',
  filled: true,
  size: 'medium',
  disabled: false,
  elevated: false,
  tonal: false,
  outlined: false,
  text: false,
};

export const Tonal = Template.bind({});
Tonal.args = {
  label: 'Tonal',
  tonal: true,
  size: 'medium',
  disabled: false,
  elevated: false,
  filled: false,
  outlined: false,
  text: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  outlined: true,
  size: 'medium',
  disabled: false,
  elevated: false,
  filled: false,
  tonal: false,
  text: false,
};

export const Text = Template.bind({});
Text.args = {
  label: 'Text',
  text: true,
  size: 'medium',
  disabled: false,
  elevated: false,
  filled: false,
  tonal: false,
  outlined: false,
};