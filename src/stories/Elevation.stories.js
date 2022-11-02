import Elevation from '../components/Elevation.vue';

export default {
  title: 'Effects/Elevation',
  component: Elevation,
}; 

const Template = () =>({
  components: { Elevation },
  template: '<Elevation/>',
})
export const Default = Template.bind({});