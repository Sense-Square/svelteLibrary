import { action } from '@storybook/addon-actions';
import { CardS } from '../Components/index.js';

export default {
  title: 'Components/CardS',
  component: CardS,
  tags: ['autodocs'],
  argTypes: {
    width: {
        control: {type: 'text'}
    },
    height: {
        control: {type: 'text'}
    },
    disabled: {
      control: {type: 'boolean'}
    },
    filled: {
      control: {type: 'boolean'}
    },
    elevated: {
      control: {type: 'boolean'}
    },
    tonal: {
      control: {type:'boolean'}
    },
    outlined: {
      control: {type:'boolean'}
    },
  }
};

const Template = (args) => ({ 
  Component: CardS,
  props: args,
  on: {
    click: action('onClick'),
    blur: action('onBlur'),
    focus: action('onFocus'),
    dblclick: action('onDblClick'),
    mouseover: action('onMouseOver'),
  },
});

export const Default = Template.bind({});
Default.args = {
  width: '',
  height: '',
  disabled: false,
  elevated: false,
  filled: false,
  tonal: false,
  outlined: false,
};

export const Elevated = Template.bind({});
Elevated.args = {
  width: '',
  height: '',
  elevated: true,
  disabled: false,
  filled: false,
  tonal: false,
  outlined: false,
};

export const Filled = Template.bind({});
Filled.args = {
  width: '',
  height: '',
  filled: true,
  disabled: false,
  elevated: false,
  tonal: false,
  outlined: false,
};

export const Tonal = Template.bind({});
Tonal.args = {
  width: '',
  height: '',
  tonal: true,
  filled: false,
  elevated: false,
  outlined: false,
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  width: '',
  height: '',
  outlined: true,
  elevated: false,
  filled: false,
  tonal: false,
  disabled: false,
};