import FloatingButton from '../components/FloatingButton.vue';
import FloatingButtonContainer from '../components/FloatingButtonContainer.vue';
export default {
  title: 'Components/Buttons/FloatingButton',
  component: FloatingButton,
  subcomponents: {FloatingButtonContainer},
  args: {
    default: '☁',
    color: '#007BFF',
  },
  argTypes:{
      size:{
          control: 'select',
          options: ['small','medium','large'],
      }
    },
};


const Template = (args) =>({
    components: {FloatingButton},
    setup(){
        return { args }
    },
    template: `
            <FloatingButton v-bind="args">
            {{ args.default }}
            </FloatingButton>
            `,
})
export const Single = Template.bind();

export const Multiple = (args) =>({
    components: {FloatingButton, FloatingButtonContainer},
    setup(){
        return { args }
    },
    template: `
            <FloatingButtonContainer>
                <FloatingButton v-bind="args">
                    {{ args.default }}
                </FloatingButton>
                <FloatingButton v-bind="args">
                    {{ args.default }}
                </FloatingButton>
                <FloatingButton v-bind="args">
                    {{ args.default }}
                </FloatingButton>
            </FloatingButtonContainer>
    `,
})