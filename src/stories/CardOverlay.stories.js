import CardOverlay from '../components/CardOverlay.vue';

export default {
  title: 'Components/Cards/CardOverlay',
  component: CardOverlay,
};


const Template = (args) =>({
    components: { CardOverlay },
    setup(){
        return { args }
    },
    template: `<CardOverlay>
                  <template #title>
                    {{ args.title }}
                  </template>
                  <template #content>
                    {{ args.content }}
                  </template>
                </CardOverlay>`,
})
export const Default = Template.bind({});
Default.args = {
  title: "This is title",
  content: "And I am content"
}
