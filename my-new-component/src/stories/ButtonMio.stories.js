import { action } from '@storybook/addon-actions';
import { Button } from '../Components/index.js';
import '/Users/antonio/Desktop/MainLibraryGitHub/svelteLibrary/my-new-component/.storybook/css/theme.css';

export default {
  title: 'Components/Button',
  component: Button,
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
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled',
  filled: true,
  size: 'medium',
};

export const Tonal = Template.bind({});
Tonal.args = {
  label: 'Tonal',
  tonal: true,
  size: 'medium',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  outlined: true,
  size: 'medium',
};

export const Text = Template.bind({});
Text.args = {
  label: 'Text',
  text: true,
  size: 'medium',
};

//Args descrive gli argomenti di Button in modo leggibile dalla macchina.
// Questo sblocca il superpotere di Storybook di alterare e comporre argomenti in modo dinamico.


/*
Il template viene riutilizzato nelle storie.
Template.bind({}) crea una copia della funzione che riduce la duplicazione del codice.
 Allo stesso modo, ...Primary.args crea una copia dei dati, riducendone la duplicazione.
*/