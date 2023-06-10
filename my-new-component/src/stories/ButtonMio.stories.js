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
    color:{
      control: {type: 'color'}
    },
    primary: {
      control: {type: 'boolean'}
    },
    disabled: {
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

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  primary: true,
  disabled: false,
  color: 'primary',
  size: 'big',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click me!',
  disabled: false,
  primary: false,
  color: 'secondary',
};





//Args descrive gli argomenti di Button in modo leggibile dalla macchina.
// Questo sblocca il superpotere di Storybook di alterare e comporre argomenti in modo dinamico.


/*
Il template viene riutilizzato nelle storie.
Template.bind({}) crea una copia della funzione che riduce la duplicazione del codice.
 Allo stesso modo, ...Primary.args crea una copia dei dati, riducendone la duplicazione.
*/