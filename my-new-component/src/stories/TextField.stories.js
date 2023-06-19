import { action } from '@storybook/addon-actions';
import { TextField } from '../Components/index.js';
import { text } from 'svelte/internal';

export default {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: {type: 'text'}
        },
        filled: {
            control: {type: 'boolean'}
        },
        outlined: {
            control: {type: 'boolean'}
        },
        label: {
          control: {type:'text'}
        },
        size: {
          options: ['small', 'medium', 'big'],
          control: {type: 'radio'}
        },
    }
  };

const Template = (args) => ({ 
    Component: TextField,
    props: args,
    on: {
      input: action('onInput'),
      change: action('onChange'),
      keyPress: action('onKeyPress'),
    }
  });

export const Default = Template.bind({});
    Default.args = {
        placeholder: 'Prova',
        label: 'TextField',
        filled: false,
        outlined: false,
        size: 'medium',
};

  
export const Filled = Template.bind({});
    Filled.args = {
        placeholder: 'Prova',
        label: 'Filled',
        filled: true,
        outlined: false,
};

export const Outlined = Template.bind({});
    Outlined.args = {
        placeholder: 'Prova',
        label: 'Outlined',
        filled: false,
        outlined: true,
};