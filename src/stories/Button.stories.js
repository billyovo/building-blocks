import Button from '../components/Button.vue';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes:{
    size:{
        control: 'select',
        options: ['small','medium','large'],
    }
  },
  args:{
    size: 'medium',
    outlined: false,
    text: false,
    color: '#007BFF',
    default: 'Button'
  }
};


const Template = (args) =>({
    components: { Button },
    setup(){
        return { args }
    },
    template: `<Button v-bind="args"> {{ args.default }} </Button>
                  `,
})
export const Default = Template.bind({});
export const Outlined = Template.bind();
Outlined.args = {
    outlined: true
}
export const Text = Template.bind();
Text.args = {
    text: true
}