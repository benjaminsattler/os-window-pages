(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{270:function(e,t,n){},273:function(e,t,n){},282:function(e,t,n){"use strict";var o=n(270);n.n(o).a},297:function(e,t,n){"use strict";var o=n(273);n.n(o).a},307:function(e,t,n){"use strict";n.r(t);var main=n(145),o={name:"DemoPanel",components:{OsWindowVue:main.a},data:function(){return{theme:"light",windowState:"maximized",interactive:!0,hover:!0,windowTitle:"Demo Window Title",osTheme:"mac",availableOsThemes:["mac","win-xp","win-7"]}},methods:{onWindowStateChange:function(e){var t=e.newWindowState;this.windowState=t}}},r=(n(282),n(35)),l=n(53),v=n.n(l),c=n(264),d=n(133),m=n(265),h=n(305),w=n(308),_=n(298),f=n(304),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{attrs:{sm:"12",md:"12",lg:"6"}},[n("div",[n("os-window-vue",{class:"demo-window",attrs:{theme:e.theme,"os-theme":e.osTheme,"window-state":e.windowState,interactive:e.interactive,hover:e.hover,"window-title":e.windowTitle},on:{"window-state-change":e.onWindowStateChange}},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et gravida massa. Mauris est metus, egestas eget mi et, condimentum sodales nisi. Nulla eu odio pellentesque, ultrices purus ut, finibus nisi. In mollis fermentum libero condimentum porta. Cras vehicula venenatis lectus, et auctor ipsum. Nullam vulputate a urna commodo sodales. Nunc sagittis sapien eros, a faucibus purus condimentum et.\n      ")])],1)]),e._v(" "),n("v-col",{attrs:{sm:"12",md:"12",lg:"6"}},[n("v-switch",{attrs:{color:"orange lighten-1","false-value":"light","true-value":"dark"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n        Dark Mode \n        "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-icon",e._g({},o),[e._v("\n              mdi-information-outline\n            ")])]}}])},[e._v("\n          You can switch the window between dark mode and light mode\n        ")])]},proxy:!0}]),model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}}),e._v(" "),n("v-switch",{attrs:{color:"orange lighten-1","false-value":"maximized","true-value":"minimized"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n        Minimize \n        "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-icon",e._g({},o),[e._v("\n              mdi-information-outline\n            ")])]}}])},[e._v("\n          You can minimize or maximize the window. A minimized window will only show its titlebar\n        ")])]},proxy:!0}]),model:{value:e.windowState,callback:function(t){e.windowState=t},expression:"windowState"}}),e._v(" "),n("v-switch",{attrs:{color:"orange lighten-1"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n        Enable window buttons \n        "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-icon",e._g({},o),[e._v("\n              mdi-information-outline\n            ")])]}}])},[e._v("\n          Enabled maximize and minimize window buttons respond to click events and cause the window to change its state respectively\n        ")])]},proxy:!0}]),model:{value:e.interactive,callback:function(t){e.interactive=t},expression:"interactive"}}),e._v(" "),n("v-switch",{attrs:{color:"orange lighten-1",label:"Window button icon labels on mouse hover"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n        Enable button hover effects \n        "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-icon",e._g({},o),[e._v("\n              mdi-information-outline\n            ")])]}}])},[e._v("\n          When enabled then the button labels show when the mouse hovers over them\n        ")])]},proxy:!0}]),model:{value:e.hover,callback:function(t){e.hover=t},expression:"hover"}}),e._v(" "),n("v-select",{attrs:{items:e.availableOsThemes,label:"Os-Theme"},model:{value:e.osTheme,callback:function(t){e.osTheme=t},expression:"osTheme"}}),e._v(" "),n("v-text-field",{attrs:{color:"orange lighten-1",label:"Window Titlebar text"},model:{value:e.windowTitle,callback:function(t){e.windowTitle=t},expression:"windowTitle"}})],1)],1)}),[],!1,null,"63ef0019",null),y=component.exports;v()(component,{VCol:c.a,VIcon:d.a,VRow:m.a,VSelect:h.a,VSwitch:w.a,VTextField:_.a,VTooltip:f.a}),n.e(6).then(n.bind(null,306));var k={name:"IndexPage",layout:"hero",components:{DemoPanel:y,OsWindowVue:main.a}},x=(n(297),n(259)),j=n(278),S=Object(r.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("h1",{directives:[{name:"anchor",rawName:"v-anchor"}],attrs:{id:"gettingstarted"}},[e._v("\n          Getting started\n        ")])])],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("p",[e._v("Choose any of the following methods to get started")]),e._v(" "),n("h2",[e._v("Install via node package manager")]),e._v(" "),n("p",[e._v("Run the following command in your command line to add os-window to your project")]),e._v(" "),n("os-window-vue",{attrs:{interactive:"",hover:"",theme:"dark"}},[n("pre",{staticClass:"sourcecode shell"},[n("code",[e._v("# for NPM")]),e._v("\n"),n("code",{staticClass:"line"},[e._v("> npm install --save os-window")]),e._v("\n"),n("code"),e._v("\n"),n("code",[e._v("# for YARN")]),e._v("\n"),n("code",[e._v("> yarn add os-window")])])]),e._v(" "),n("h2",[e._v("Include the module")]),e._v(" "),n("p",[e._v("Include the JavaScript module in your HTML page")]),e._v(" "),n("os-window-vue",{attrs:{interactive:"",hover:"",theme:"dark"}},[n("pre",{staticClass:"sourcecode html"},[n("code",[e._v('<script type="module" src="node_modules/os-window/main.js"><\/script>')])])]),e._v(" "),n("p",[e._v("Or import the module into your JavaScript code")]),e._v(" "),n("os-window-vue",{attrs:{interactive:"",hover:"",theme:"dark"}},[n("pre",{staticClass:"sourcecode javascript"},[n("code",[e._v("import 'os-window';")])])]),e._v(" "),n("h2",[e._v("Use the CDN")]),e._v(" "),n("p",[e._v("This project is also published to the CDN unpkg, which enables you to skip any local module installation when including this module in your webpage:")]),e._v(" "),n("os-window-vue",{attrs:{interactive:"",hover:"",theme:"dark"}},[n("pre",{staticClass:"sourcecode html"},[n("code",[e._v("\x3c!-- Include specific version (recommended) --\x3e")]),e._v("\n"),n("code",[e._v('<script type="module" src="https://unpkg.com/os-window@0.2.2"><\/script>')]),e._v("\n"),n("code"),e._v("\n"),n("code",[e._v("\x3c!-- Include latest version (not recommended) --\x3e")]),e._v("\n"),n("code",[e._v('<script type="module" src="https://unpkg.com/os-window"><\/script>')])])]),e._v(" "),n("p",[e._v("For more information have a look at the [Installation Guide](./doc/installation.md) or the detailled [documentation](./doc/index.md).")]),e._v(" "),n("h2",[e._v("Framework integration")]),e._v(" "),n("p",[e._v("\n          You can also use any of the following available framework integrations:\n        ")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{rel:"noopener",href:"http://github.com/benjaminsattler/os-window-vue",target:"_blank"}},[e._v("component adapter for Vue.js")])])])],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("h1",{directives:[{name:"anchor",rawName:"v-anchor"}],attrs:{id:"demo"}},[e._v("\n          Demo\n        ")])])],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("p",[e._v("\n          Feel free to play around with this interactive demonstration of os-window by changing the controls on the right and observe their effects on the os-window instance on the left.\n        ")]),e._v(" "),n("DemoPanel")],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("h1",{directives:[{name:"anchor",rawName:"v-anchor"}],attrs:{id:"requirements"}},[e._v("\n          Requirements\n        ")])])],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("ul",[n("li",[e._v("\n            Browsers\n            "),n("ul",[n("li",[e._v("IE: not supported")]),e._v(" "),n("li",[e._v("Edge: Ver. >= 80")]),e._v(" "),n("li",[e._v("Firefox: Ver. >= 63")]),e._v(" "),n("li",[e._v("Chrome: Ver. >= 67")]),e._v(" "),n("li",[e._v("Safari: Ver. >= 10.1")]),e._v(" "),n("li",[e._v("Opera: Ver >= 41")])])])])])],1),e._v(" "),n("v-divider"),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("h1",{directives:[{name:"anchor",rawName:"v-anchor"}],attrs:{id:"features"}},[e._v("\n          Features\n        ")])])],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("ul",[n("li",[e._v("switch operating system designs")]),e._v(" "),n("li",[e._v("switch between light & dark themes")]),e._v(" "),n("li",[e._v("create non-interactive or interactive window frames")]),e._v(" "),n("li",[e._v("use any HTML as window contents")]),e._v(" "),n("li",[e._v("\n            fully scriptable interface\n            "),n("ul",[n("li",[e._v("listen to events from the window")]),e._v(" "),n("li",[e._v("dynamically toggle any property (including design and theme)")])])])])])],1),e._v(" "),n("v-divider"),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("h1",{directives:[{name:"anchor",rawName:"v-anchor"}],attrs:{id:"documentation"}},[e._v("\n          Documentation\n        ")])])],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("p",[e._v("Find more detailed information in the "),n("a",{attrs:{rel:"noopener",href:"https://github.com/benjaminsattler/os-window/blob/master/doc/index.md",target:"_blank"}},[e._v("documentation")]),e._v(" hosted over at GitHub.")])])],1),e._v(" "),n("v-divider"),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("h1",{directives:[{name:"anchor",rawName:"v-anchor"}],attrs:{id:"contributing"}},[e._v("\n          Contributing\n        ")])])],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("p",[e._v("If you have any ideas, just "),n("a",{attrs:{rel:"noopener",href:"https://github.com/benjaminsattler/os-window/issues/new",target:"_blank"}},[e._v("open an issue")]),e._v(" and tell me what you think.")]),e._v(" "),n("p",[e._v("If you find any bugs, just "),n("a",{attrs:{rel:"noopener",href:"https://github.com/benjaminsattler/os-window/issues/new",target:"_blank"}},[e._v("open an issue")]),e._v(" and let me know. Or go right ahead and create a "),n("a",{attrs:{rel:"noopener",href:"https://github.com/benjaminsattler/os-window/pulls/",target:"_blank"}},[e._v("pull request")]),e._v(".")]),e._v(" "),n("p",[e._v("If you'd like to contribute, please fork "),n("a",{attrs:{rel:"noopener",href:"https://github.com/benjaminsattler/os-window/",target:"_blank"}},[e._v("the source code")]),e._v(" and make changes as you'd like. Pull requests are warmly welcome.")])])],1)],1)}),[],!1,null,"821ac0aa",null);t.default=S.exports;v()(S,{VCol:c.a,VContainer:x.a,VDivider:j.a,VRow:m.a})}}]);