import Card from '../components/Card-sm.vue';

export default {
  title: 'Components/Cards/Card-sm',
  component: Card,
  
};


const Template = (args) =>({
    components: { Card },
    setup(){
        return { args }
    },
    template: `<Card v-bind="args">
                    {{ args.default}}
                </Card>`,
})
export const Default = Template.bind({});
Default.args = {
    default: "I am a card",
}
