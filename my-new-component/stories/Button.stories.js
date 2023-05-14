import Button from '../Button/index.svelte';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => ({
  Component: Button,
  props: {
    label: 'Click me',
  },
  on: {
    message: (event) => {
      console.log(event.detail.text);
    },
  },
});
