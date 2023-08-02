import { action } from '@storybook/addon-actions';
import { Card } from '../Components/index.js';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {type: 'text'}
    },
    description: {
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
  Component: Card,
  props: args,
  on: {
    click: action('onClick'),
    blur: action('onBlur'),
    focus: action('onFocus'),
    dblclick: action('onDblClick'),
    mouseover: action('onMouseOver'),
  }
});

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  description: 'This is a default card.',
  disabled: false,
};

export const Elevated = Template.bind({});
Elevated.args = {
  title: 'Elevated Card',
  description: 'This card has an elevated style.',
  elevated: true,
  disabled: false,
  button: true,
};

export const Filled = Template.bind({});
Filled.args = {
  title: 'Filled Card',
  description: 'This card has a filled style.',
  filled: true,
  disabled: false,
  button: true,
};

export const Tonal = Template.bind({});
Tonal.args = {
  title: 'Tonal Card',
  description: 'This card has a tonal style.',
  tonal: true,
  disabled: false,
  button:true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  title: 'Outlined Card',
  description: 'This card has an outlined style.',
  outlined: true,
  disabled: false,
  button:true,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Only a title',
  disabled: false,
  button: false,
};

export const onlyButton = Template.bind({});
onlyButton.args = {
  title: 'With only a button',
  disabled: false,
  button: true,
};