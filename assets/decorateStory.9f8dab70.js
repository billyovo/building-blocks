var h=Object.defineProperty;var r=(e,n)=>h(e,"name",{value:n,configurable:!0});import{d as v,s as w}from"./iframe.e036f211.js";import{h as p,s as b,c as g}from"./vue.esm-bundler.05d8e4ca.js";var l;function O(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}r(O,"_taggedTemplateLiteral");var M=r(function(n,t){var i=t.id,a=t.component;if(!a)throw new Error("Unable to render story ".concat(i," as the component annotation is missing from the default export"));return p(a,n)},"render"),s=b(null),m=null,d=g({unmounted:r(function(){m=null},"unmounted"),setup:r(function(){return function(){if(!s.value)throw new Error("No Vue 3 Story available. Was it set correctly?");return p(s.value)}},"setup")});function S(e,n){var t=e.title,i=e.name,a=e.storyFn,o=e.showMain,u=e.showError,c=e.showException;d.config.errorHandler=c;var f=a();if(!f){u({title:'Expecting a Vue component from the story: "'.concat(i,'" of "').concat(t,'".'),description:v(l||(l=O([`
        Did you forget to return the Vue component from the story?
        Use "() => ({ template: '<my-comp></my-comp>' })" or "() => ({ components: MyComp, template: '<my-comp></my-comp>' })" when defining the story.
      `])))});return}o(),s.value=f,m||(m=d.mount(n))}r(S,"renderToDOM");function j(e){return typeof e=="function"?{render:e,name:e.name}:e}r(j,"normalizeFunctionalComponent");function y(e,n){var t=e;return t==null?null:n?Object.assign({},j(t),{components:Object.assign({},t.components||{},{story:n})}):{render:r(function(){return p(t)},"render")}}r(y,"prepare");function x(e,n){return n.reduce(function(t,i){return function(a){var o,u=i(function(c){return o=t(Object.assign({},a,w(c))),o},a);return o||(o=t(a)),u===o?o:y(u,o)}},function(t){return y(e(t))})}r(x,"decorateStory");export{S as a,x as d,M as r,d as s};
//# sourceMappingURL=decorateStory.9f8dab70.js.map