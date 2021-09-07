"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[759],{8394:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return b},metadata:function(){return g},toc:function(){return h}});var n=a(7462),r=a(3366),l=a(7294),i=a(3905),o=a(9443);var s=function(){var e=(0,l.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=a(6010),u="tabItem_1uMI",m="tabItemActive_2DSg";var d=function(e){var t,a=e.lazy,n=e.block,r=e.defaultValue,i=e.values,o=e.groupId,d=e.className,p=l.Children.toArray(e.children),v=null!=i?i:p.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=r?r:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,f=s(),g=f.tabGroupChoices,h=f.setTabGroupChoices,k=(0,l.useState)(b),w=k[0],y=k[1],N=[];if(null!=o){var I=g[o];null!=I&&I!==w&&v.some((function(e){return e.value===I}))&&y(I)}var T=function(e){var t=e.currentTarget,a=N.indexOf(t),n=v[a].value;y(n),null!=o&&(h(o,n),setTimeout((function(){var e,a,n,r,l,i,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,a>=0&&l<=s&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m),setTimeout((function(){return t.classList.remove(m)}),2e3))}),150))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},d)},v.map((function(e){var t=e.value,a=e.label;return l.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=a?a:t)}))),a?(0,l.cloneElement)(p.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))};var p=function(e){var t=e.children,a=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},v=["components"],b={sidebar_position:2},f="Installation",g={unversionedId:"welcome/installation",id:"welcome/installation",isDocsHomePage:!1,title:"Installation",description:"`bash npm2yarn",source:"@site/docs/welcome/installation.md",sourceDirName:"welcome",slug:"/welcome/installation",permalink:"/react-native-scrollable-navigation-bar/welcome/installation",editUrl:"https://github.com/zobeirhamid/react-native-scrollable-navigation-bar/edit/main/docs/docs/welcome/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/react-native-scrollable-navigation-bar/"},next:{title:"Usage",permalink:"/react-native-scrollable-navigation-bar/welcome/usage"}},h=[],k={toc:h};function w(e){var t=e.components,a=(0,r.Z)(e,v);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)(d,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(p,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-scrollable-navigation-bar\n"))),(0,i.kt)(p,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-scrollable-navigation-bar\n")))))}w.isMDXComponent=!0}}]);