var u=Object.defineProperty;var e=(t,o)=>u(t,"name",{value:o,configurable:!0});import{a as r,r as i,n as d,b as c,o as m}from"./vue.esm-bundler.05d8e4ca.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";const s={props:{color:{type:String,default:"#007BFF"},outlined:{type:Boolean,default:!1},size:{type:String,default:"medium",validator(t){return["large","medium","small"].includes(t)}},text:{type:Boolean,default:!1}},computed:{buttonClasses(){return{"button-sm":this.size==="small","button-md":this.size==="medium","button-lg":this.size==="large"}},buttonStyles(){return{"background-color":this.outlined||this.text?"transparent":this.color,color:this.outlined||this.text?this.color:"white",border:this.outlined?`${this.color} 1px solid`:"none"}}}};function f(t,o,y,_,b,l){return m(),r("button",{class:d([l.buttonClasses,"button-base"]),style:c(l.buttonStyles)},[i(t.$slots,"default",{},void 0,!0)],6)}e(f,"_sfc_render");const a=p(s,[["render",f],["__scopeId","data-v-525d1917"]]);s.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#007BFF'"}},{name:"outlined",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["large","medium","small"]},{name:"text",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const z={parameters:{storySource:{source:`import Button from '../components/Button.vue';

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
    template: \`<Button v-bind="args"> {{ args.default }} </Button>
                  \`,
})
export const Default = Template.bind({});
export const Outlined = Template.bind();
Outlined.args = {
    outlined: true
}
export const Text = Template.bind();
Text.args = {
    text: true
}`,locationsMap:{default:{startLoc:{col:17,line:22},endLoc:{col:2,line:29},startBody:{col:17,line:22},endBody:{col:2,line:29}},outlined:{startLoc:{col:17,line:22},endLoc:{col:2,line:29},startBody:{col:17,line:22},endBody:{col:2,line:29}},text:{startLoc:{col:17,line:22},endLoc:{col:2,line:29},startBody:{col:17,line:22},endBody:{col:2,line:29}}}}},title:"Components/Buttons/Button",component:a,argTypes:{size:{control:"select",options:["small","medium","large"]}},args:{size:"medium",outlined:!1,text:!1,color:"#007BFF",default:"Button"}},n=e(t=>({components:{Button:a},setup(){return{args:t}},template:`<Button v-bind="args"> {{ args.default }} </Button>
                  `}),"Template"),T=n.bind({}),B=n.bind();B.args={outlined:!0};const g=n.bind();g.args={text:!0};const F=["Default","Outlined","Text"];export{T as Default,B as Outlined,g as Text,F as __namedExportsOrder,z as default};
//# sourceMappingURL=Button.stories.912e5508.js.map
