import { action } from '@storybook/addon-actions';
import { CheckBox } from '../Components/index.js';

export default {
    title: 'Components/CheckBox',
    component: CheckBox,
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: {type: 'boolean'}
        },
    }
  };

  const Template = (args) => ({ 
    Component: CheckBox,
    props: args,
    on: {
      change: action('onChange'),
    }
  });

  export const Default = Template.bind({});
    Default.args = {
        checked: false,
};