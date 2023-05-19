import {Meta, Story} from '@storybook/svelte';
import { Button } from '../src/';

export default {
  title: 'Button',
  component: Button,
  argTypes:{
    label: {control: 'text'},
    primary: {control: 'boolean'},
    secondary: {control: 'boolean'},
  },
} as Meta;

const Template: Story = (args) => ({
  Component: Button,
  props: args,
  on: {
    click: () => {
      console.log('clicked');
    },
    focus: () => {
      console.log('focus');
    },
  },
});
export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click me',
  secondary: true,
};
/*
export const Primary = () => ({
  Component: Button,
  props: {
    label: 'Click me',
    primary: true
  },
  on: {
    click: (event) => {
      console.log("Pulsante cliccato");
    },
    focus: (event) => {
      console.log("Pulsante in focus");
    },
  },
});

export const Secondary = () => ({
  Component: Button,
  props: {
    label: 'Click me',
    secondary: true
  },
  on: {
    click: (event) => {
      console.log("Pulsante cliccato");
    },
    focus: (event) => {
      console.log("Pulsante in focus");
    },
  },
});
*/
