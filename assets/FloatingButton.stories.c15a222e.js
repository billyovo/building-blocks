var p=Object.defineProperty;var n=(t,o)=>p(t,"name",{value:o,configurable:!0});import{a,d as l,r as s,n as f,b as B,o as i}from"./vue.esm-bundler.05d8e4ca.js";import{_ as r}from"./plugin-vueexport-helper.2444895f.js";const u={props:{color:{type:String,default:"#007BFF"},size:{type:String,default:"medium",validator(t){return["large","medium","small"].includes(t)}}},computed:{floatingButtonClasses(){return{"floating-button-sm":this.size==="small","floating-button-md":this.size==="medium","floating-button-lg":this.size==="large"}}}},_={class:"floating-button-inner"};function F(t,o,c,x,z,m){return i(),a("button",{class:f([m.floatingButtonClasses,"floating-button"]),style:B(`background-color: ${c.color}`)},[l("div",_,[s(t.$slots,"default",{},void 0,!0)])],6)}n(F,"_sfc_render$1");const e=r(u,[["render",F],["__scopeId","data-v-4bfffb57"]]);u.__docgenInfo={exportName:"default",displayName:"FloatingButton",description:"",tags:{},props:[{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#007BFF'"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["large","medium","small"]}],slots:[{name:"default"}]};const g={},b={class:"floating-button-container"},v={class:"floating-button-container-inner"};function y(t,o){return i(),a("div",b,[l("div",v,[s(t.$slots,"default",{},void 0,!0)])])}n(y,"_sfc_render");const d=r(g,[["render",y],["__scopeId","data-v-e3b02e8d"]]);g.__docgenInfo={displayName:"FloatingButtonContainer",description:"",tags:{},slots:[{name:"default"}]};const T={parameters:{storySource:{source:`import FloatingButton from '../components/FloatingButton.vue';
import FloatingButtonContainer from '../components/FloatingButtonContainer.vue';
export default {
  title: 'Components/Buttons/FloatingButton',
  component: FloatingButton,
  subcomponents: {FloatingButtonContainer},
  args: {
    default: '\u2601',
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
    template: \`
            <FloatingButton v-bind="args">
            {{ args.default }}
            </FloatingButton>
            \`,
})
export const Single = Template.bind();

export const Multiple = (args) =>({
    components: {FloatingButton, FloatingButtonContainer},
    setup(){
        return { args }
    },
    template: \`
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
    \`,
})`,locationsMap:{single:{startLoc:{col:17,line:20},endLoc:{col:2,line:30},startBody:{col:17,line:20},endBody:{col:2,line:30}},multiple:{startLoc:{col:24,line:33},endLoc:{col:2,line:51},startBody:{col:24,line:33},endBody:{col:2,line:51}}}}},title:"Components/Buttons/FloatingButton",component:e,subcomponents:{FloatingButtonContainer:d},args:{default:"\u2601",color:"#007BFF"},argTypes:{size:{control:"select",options:["small","medium","large"]}}},C=n(t=>({components:{FloatingButton:e},setup(){return{args:t}},template:`
            <FloatingButton v-bind="args">
            {{ args.default }}
            </FloatingButton>
            `}),"Template"),I=C.bind(),L=n(t=>({components:{FloatingButton:e,FloatingButtonContainer:d},setup(){return{args:t}},template:`
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
    `}),"Multiple"),M=["Single","Multiple"];export{L as Multiple,I as Single,M as __namedExportsOrder,T as default};
//# sourceMappingURL=FloatingButton.stories.c15a222e.js.map
