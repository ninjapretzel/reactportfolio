(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(25),a(3)),i=a(4),s=a(6),u=a(5),m=(a(26),a(27),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"pushDown col s4"},r.a.createElement("a",{className:"btn",href:"/"},"Home"),r.a.createElement("a",{className:"btn",href:"/portfolio"},"Portfolio"),r.a.createElement("a",{className:"btn",href:"/contact"},"Contact"))}}]),a}(r.a.Component)),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row card-panel blue darken-4"},r.a.createElement("div",{className:"col s8"},r.a.createElement("h1",null," Brandon's Portfolio")),r.a.createElement(m,null))}}]),a}(r.a.Component),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=(new Date).getFullYear();return r.a.createElement("div",{className:"row card-panel blue darken-4"},r.a.createElement("div",{className:"col s8 pushDown left"},"Copyright ",e),r.a.createElement(m,null),r.a.createElement("br",null))}}]),a}(r.a.Component),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404-Page not found"))}}]),a}(r.a.Component),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Homepage"))}}]),a}(r.a.Component),E=a(18),f=a(1),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.repo,n=e.site,c=e.image,l=e.desc;return r.a.createElement("div",{className:"card large col s12 m6 l4 xl4 blue darken-2"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:c}),r.a.createElement("span",{className:"card-title"},t)),r.a.createElement("div",{className:"card-content"},l),r.a.createElement("div",{className:"card-action"},a&&r.a.createElement("a",{href:a},"Repository"),n&&r.a.createElement("a",{href:n},"Live Site")))}}]),a}(r.a.Component),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={projects:[{name:"Employee Directory",repo:"https://github.com/bgartdu/employeedirectory",site:"",image:""},{name:"Burger App",repo:"https://github.com/bgartdu/burger",site:"https://calm-brushlands-76584.herokuapp.com/",image:"/Burgerapp.png",desc:"Express app that tracks state of burger data in a database"},{name:"Note Taker",repo:"https://github.com/bgartdu/notetaker1",site:"https://tranquil-peak-25137.herokuapp.com/",image:"/Notesapp.png",desc:"Express app that takes notes"}]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Portfolio"),r.a.createElement("h3",null,"Github: ",r.a.createElement("a",{href:"https://github.com/bgartdu"},"bgartdu")),r.a.createElement("div",{className:"row"},this.state.projects.map((function(e){return r.a.createElement(v,{data:e})}))))}}]),a}(r.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Contact"),r.a.createElement("h4",null,"Cell: 720-318-1553"),r.a.createElement("h4",null,"Email: ",r.a.createElement("a",{href:"mailto:BrandonGart@gmail.com"},"BrandonGart@gmail.com")),r.a.createElement("h4",null,"LinkedIn: ",r.a.createElement("a",{href:"https://www.linkedin.com/in/brandon-gart-78252436/"},"https://www.linkedin.com/in/brandon-gart-78252436/")))}}]),a}(r.a.Component),O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement(p,null)),r.a.createElement("div",{className:"col s12 card blue darken-4"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:b}),r.a.createElement(f.a,{exact:!0,path:"/portfolio",component:j}),r.a.createElement(f.a,{exact:!0,path:"/contact",component:g}),r.a.createElement(f.a,{component:h}))),r.a.createElement("div",{className:"col s12"},r.a.createElement(d,null)))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.6a60bfb2.chunk.js.map