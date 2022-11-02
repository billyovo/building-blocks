var o=Object.defineProperty;var n=(e,a)=>o(e,"name",{value:a,configurable:!0});import{a as d,d as t,r as c,o as l}from"./vue.esm-bundler.05d8e4ca.js";import{_ as m}from"./plugin-vueexport-helper.2444895f.js";const r={},p={class:"card"},i={class:"card-inner"};function _(e,a){return l(),d("div",p,[t("div",i,[t("div",null,[c(e.$slots,"default",{},void 0,!0)])])])}n(_,"_sfc_render");const s=m(r,[["render",_],["__scopeId","data-v-7743c65a"]]);r.__docgenInfo={displayName:"Card-sm",description:"",tags:{},slots:[{name:"default"}]};const x={parameters:{storySource:{source:`import Card from '../components/Card-sm.vue';

export default {
  title: 'Components/Cards/Card-sm',
  component: Card,
  
};


const Template = (args) =>({
    components: { Card },
    setup(){
        return { args }
    },
    template: \`<Card v-bind="args">
                    {{ args.default}}
                </Card>\`,
})
export const Default = Template.bind({});
Default.args = {
    default: "I am a card",
}
`,locationsMap:{default:{startLoc:{col:17,line:10},endLoc:{col:2,line:18},startBody:{col:17,line:10},endBody:{col:2,line:18}}}}},title:"Components/Cards/Card-sm",component:s},u=n(e=>({components:{Card:s},setup(){return{args:e}},template:`<Card v-bind="args">
                    {{ args.default}}
                </Card>`}),"Template"),f=u.bind({});f.args={default:"I am a card"};const y=["Default"];export{f as Default,y as __namedExportsOrder,x as default};
//# sourceMappingURL=Card-sm.stories.11b04169.js.map
