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
        filled: true,
        outlined: false,
};