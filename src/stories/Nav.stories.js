import NavBar from '../components/NavBar.vue';

export default {
  title: 'Components/Navs/NavBar-sm',
  component: NavBar,
}; 

const Template = () =>({
  components: { NavBar },
  template: '<NavBar/>',
})
export const Transparent = Template.bind({});

export const Background = Template.bind({});
Background.decorators = [
  (story) => ({
    template: `<div style="background-color: white; box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);"><story/></div>`
  })
]