
import {Button} from '../src/index.js';

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = (args) => ({ Component: Button, props: args });

export const Primary = Template.bind({});

Primary.args = {
  focus: false,
  label: 'Button',
};
/*
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {control: {type: "text"}},
    outlined: {control: {type: "boolean"}},
  },
};

const Template = ({ args }) => ({
  Component: Button,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'ciao',
  outlined: false,
};


export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
  outlined: false,
};
*/
