var l=Object.defineProperty;var t=(e,a)=>l(e,"name",{value:a,configurable:!0});import{a as c,d as n,r as o,o as d}from"./vue.esm-bundler.05d8e4ca.js";import{_ as i}from"./plugin-vueexport-helper.2444895f.js";const r={},p={class:"overlay-container"},m={class:"overlay"},_={class:"overlay-title"},v={class:"overlay-content"};function y(e,a){return d(),c("div",p,[n("div",m,[n("div",_,[o(e.$slots,"title")])]),n("div",v,[o(e.$slots,"content")])])}t(y,"_sfc_render");const s=i(r,[["render",y]]);r.__docgenInfo={displayName:"CardOverlay",description:"",tags:{},slots:[{name:"title"},{name:"content"}]};const h={parameters:{storySource:{source:`import CardOverlay from '../components/CardOverlay.vue';

export default {
  title: 'Components/Cards/CardOverlay',
  component: CardOverlay,
};


const Template = (args) =>({
    components: { CardOverlay },
    setup(){
        return { args }
    },
    template: \`<CardOverlay>
                  <template #title>
                    {{ args.title }}
                  </template>
                  <template #content>
                    {{ args.content }}
                  </template>
                </CardOverlay>\`,
})
export const Default = Template.bind({});
Default.args = {
  title: "This is title",
  content: "And I am content"
}
`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:2,line:22},startBody:{col:17,line:9},endBody:{col:2,line:22}}}}},title:"Components/Cards/CardOverlay",component:s},u=t(e=>({components:{CardOverlay:s},setup(){return{args:e}},template:`<CardOverlay>
                  <template #title>
                    {{ args.title }}
                  </template>
                  <template #content>
                    {{ args.content }}
                  </template>
                </CardOverlay>`}),"Template"),C=u.bind({});C.args={title:"This is title",content:"And I am content"};const x=["Default"];export{C as Default,x as __namedExportsOrder,h as default};
//# sourceMappingURL=CardOverlay.stories.6778bd96.js.map
