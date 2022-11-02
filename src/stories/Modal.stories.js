import Modal from '../components/Modal.vue';

export default {
  title: 'Components/Modal/Modal-sm',
  component: Modal,
  
};


const Template = (args) =>({
    components: { Modal },
    setup(){
        return { args }
    },
    template: `<Modal/>
                  `,
})
export const Default = Template.bind({});