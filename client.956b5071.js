webpackJsonp([1],[,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(9),o=n(13),l=n(8);t.ChunkLink=function(e){var t=e.name;return r.createElement(a.Link,{to:o.ChunkDetail.reverse({id:t}),className:"chunk-link"},t)},t.ChunkLinks=function(e){var n=e.chunks;return r.createElement(r.Fragment,null,n.map(String).map(function(e){return r.createElement(t.ChunkLink,{name:e,key:e})}))},t.AssetLink=function(e){var t=e.name,n=e.displayName,l=void 0===n?t:n;return r.createElement(a.Link,{to:o.AssetDetail.reverse({id:t}),className:"asset-link"},l||t)},t.ModuleLink=function(e){var t=e.module;return r.createElement(a.Link,{to:o.ModuleDetail.reverse({id:t.id}),className:"module-link"},l.sanitizeModuleName(t.name))}},,,,function(e,t,n){"use strict";function r(e){return e.replace(/(\.\/)?node_modules[\/]?/g,"~")}function a(e){if(0!==e.length){for(var t=e[0]||"",n=t.length,r=1;r<e.length;++r)for(var a=0;a<n;++a)if(e[r].charAt(a)!==t.charAt(a)){n=a;break}return t.slice(0,n)}}function o(e,t){var n={};return Object.keys(e).forEach(function(r){t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.sanitizeModuleName=r,t.commonPrefix=a,t.omit=o},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(83),o=n(14),l=n(84),i=n(85),s=n(91),c=n(92),u=n(93),d=n(94),m=n(105),f=n(106),p=n(108);t.router=new a.default,t.AssetDetail=t.router.route({path:"/asset/:id",render:function(e){var t=e.data,n=e.match.params;return r.createElement(l.default,{asset:t.assets.find(function(e){return""+e.name===n.id})})}}),t.AssetList=t.router.route({path:"/assets",render:function(e){var t=e.data;return r.createElement(i.default,{assetList:t.assets})}}),t.ChunkDetail=t.router.route({path:"/chunk/:id",render:function(e){var t=e.data,n=e.match.params;return r.createElement(s.default,{chunk:t.chunks.find(function(e){return""+e.id===n.id})})}}),t.ChunkList=t.router.route({path:"/chunks",render:function(e){var t=e.data;return r.createElement(c.default,{chunkList:t.chunks})}}),t.EntrypointList=t.router.route({path:"/entrypoints",render:function(e){var t=e.data;return r.createElement(u.default,{entrypointMap:t.entrypoints})}}),t.Home=t.router.route({path:"/",exact:!0,render:function(e){var t=e.data,n=e.onAnalyzeOther;return r.createElement(m.default,{data:t,onAnalyzeOther:n})}}),t.ModuleDetail=t.router.route({path:"/module/:id",render:function(e){var t=e.data,n=e.match.params;return r.createElement(f.default,{data:t,module:o.getModule(t,n.id)})}}),t.ModuleList=t.router.route({path:"/modules",render:function(e){var t=e.data;return r.createElement(p.default,{moduleList:t.modules})}}),t.Graph=t.router.route({path:"/graph",render:function(e){var t=e.data;return r.createElement(d.default,{data:t})}})},function(e,t,n){"use strict";function r(e,t){var n=a(e,t);return{referrents:e.modules.filter(function(e){return e.reasons.some(function(e){return e.moduleId===t})}),referrers:n.reasons.map(function(t){return a(e,t.moduleId)})}}function a(e,t){"string"==typeof t&&(t=parseInt(t,10));var n=e.modules.find(function(e){return e.id===t});if(void 0===n)throw new Error("module "+t+" not found");return n}Object.defineProperty(t,"__esModule",{value:!0}),t.getModuleRefs=r,t.getModule=a},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(8),o=n(17),l=n(4);t.ChunksColumn={id:"chunks",Header:"Chunks",accessor:"chunks",Cell:function(e){return r.createElement(l.ChunkLinks,{chunks:e.value})}},t.AssetsColumn={Header:"Assets",accessor:"assets",Cell:function(e){var t=e.value,n=a.commonPrefix(t);return t.map(function(e){return r.createElement(l.AssetLink,{name:e,key:e,displayName:e.slice((n||"").length)})})}},t.SizeColumn={accessor:"size",Header:"Size",Cell:o.IntegerCell,style:{textAlign:"right"},maxWidth:100}},function(e,t,n){"use strict";function r(e){return l.formatInteger(e.value)}function a(e){return e.value?o.createElement("span",{className:"has-text-success"},"Yes"):o.createElement("span",{className:"has-text-danger"},"No")}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=n(18);t.IntegerCell=r,t.BooleanCell=a},function(e,t,n){"use strict";function r(e){var t=parseInt(e,10);return a[t]?a[t]:a[t]=t.toLocaleString("en")}Object.defineProperty(t,"__esModule",{value:!0});var a={};t.formatInteger=r},,,,,,,,function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={activeTabId:void 0},n.props.tabs.length&&(n.state={activeTabId:n.props.tabs[0].id}),n}return r(t,e),t.prototype.render=function(){var e=this,t=this.state.activeTabId,n=this.props.tabs.find(function(e){return e.id===t});return o.createElement("div",{className:"tabbed"},o.createElement("div",a({className:"tabs"},this.props.tabsProps),o.createElement("ul",null,this.props.tabs.map(function(n){return o.createElement("li",{key:n.id,className:n.id===t?"is-active":void 0},o.createElement("a",{onClick:function(t){return e.setState({activeTabId:n.id})}},n.title||n.id))}))),o.createElement("div",{className:"tabbed-content"},n?n.render():null))},t}(o.Component);t.default=l},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(16),o=n(5),l=n(8),i=n(17),s=n(4),c=[{id:"name",accessor:function(e){return l.sanitizeModuleName(e.name)},Cell:function(e){return r.createElement(s.ModuleLink,{module:e.original})},Header:"Name"},a.SizeColumn,{accessor:function(e){return e.reasons.length},Header:"#Reasons",id:"nReasons",style:{textAlign:"right"},Cell:i.IntegerCell,maxWidth:80},{accessor:"errors",Header:"#Errors",style:{textAlign:"right"},Cell:i.IntegerCell,maxWidth:80},{accessor:"warnings",Header:"#Warnings",style:{textAlign:"right"},Cell:i.IntegerCell,maxWidth:80},a.ChunksColumn];t.ModuleTable=function(e){var t=e.modules;return r.createElement(o.default,{columns:c,data:t})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(14),o=n(4);t.default=function(e){var t=e.data,n=e.moduleId,l=a.getModuleRefs(t,n);return r.createElement("table",{className:"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"},r.createElement("tbody",null,l.referrents.map(function(e){return r.createElement("tr",{key:"to_"+e.id},r.createElement("td",null,"→"),r.createElement("td",null,r.createElement(o.ModuleLink,{module:e})))}),l.referrers.map(function(e){return r.createElement("tr",{key:"fr_"+e.id},r.createElement("td",null,"←"),r.createElement("td",null,r.createElement(o.ModuleLink,{module:e})))})))}},function(e,t,n){n(49),e.exports=n(52)},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(54),o=n(62);n(112),n(113);var l=document.createElement("div");l.id="wrapper",document.body.appendChild(l),a.render(r.createElement(o.default,null),l)},,,,,,,,,,function(e,t,n){"use strict";(function(e){var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n(9),l=n(13),i=n(45),s=n(109),c=n(110),u=e.env.EXAMPLE_DATA_URL||"./example-data.json",d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={data:void 0,loadingExampleData:!1},t}return r(t,e),t.prototype.componentDidMount=function(){},t.prototype.loadExampleData=function(){var e=this;this.setState({loadingExampleData:!0}),fetch(u).then(function(e){return e.json()}).then(function(t){e.setState({loadingExampleData:!1,data:t})}).catch(function(t){alert("Could not load example data: "+t),e.setState({loadingExampleData:!1,data:void 0})})},t.prototype.render=function(){var e=this,t=this.state,n=t.data;return t.loadingExampleData?a.createElement(a.Fragment,null,"Loading example data..."):n?a.createElement(o.HashRouter,null,a.createElement("div",null,a.createElement(c.NavBar,null),a.createElement(i.Switch,null,l.router.getReactRoutesList({data:n,onAnalyzeOther:function(){return e.setState({data:void 0})}})))):a.createElement(s.default,{onLoadFile:function(t){return e.setState({data:t})},onRequestExample:function(){return e.loadExampleData()}})},t}(a.Component);t.default=d}).call(t,n(31))},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){var t=i.tokensToFunction(i.parse(e.path));return{reverse:function(e){return t(e)},path:e.path,render:e.render,exact:!!e.exact}}function a(e,t){return e.map(function(e){return l.createElement(s.Route,{key:e.path,path:e.path,exact:e.exact,render:function(n){return e.render(o({},t,n))}})})}var o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=n(38),s=n(45);t.makeRoute=r,t.makeReactRoutesList=a;var c=function(){function e(){this.routes=[]}return e.prototype.route=function(e){var t=r(e);return this.routes.push(t),t},e.prototype.getReactRoutesList=function(e){return void 0===e&&(e={}),a(this.routes,e)},e}();t.default=c},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n(26),l=n(4),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props.asset;if(!e)return a.createElement("div",null,"Oopsy woopsy");var t=[{id:"Raw Info",render:function(){return a.createElement("pre",null,a.createElement("code",null,JSON.stringify(e,null,2)))}}];return a.createElement("div",{className:"container is-view"},a.createElement("h1",{className:"title"},"Asset ",a.createElement("b",null,e.name)),a.createElement("div",{className:"columns"},a.createElement("div",{className:"column"},a.createElement("h2",{className:"title"},"Chunks"),a.createElement("ul",null,e.chunks.map(String).map(function(e){return a.createElement(l.ChunkLink,{name:e,key:e})}))),a.createElement("div",{className:"column"},a.createElement(o.default,{tabs:t}))))},t}(a.Component);t.default=i},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n(5),l=n(16),i=n(17),s=n(4),c=[{accessor:"name",Header:"Name",Cell:function(e){return a.createElement(s.AssetLink,{name:e.value})}},l.SizeColumn,l.ChunksColumn,{accessor:"emitted",Header:"Emitted",Cell:i.BooleanCell},{accessor:"isOverSizeLimit",Header:"Over Size Limit?",Cell:i.BooleanCell}],u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){return a.createElement("div",{className:"container is-view"},a.createElement("h1",{className:"title"},"Assets"),a.createElement(o.default,{columns:c,data:this.props.assetList}))},t}(a.Component);t.default=u},,,,,,function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n(26),l=n(5),i=n(46),s=n(8),c=[{accessor:"module",Header:"Module"},{accessor:"loc",Header:"Location"},{accessor:"request",Header:"Request"},{accessor:"reasons",Header:"Reasons",Cell:function(e){return e.value.join(", ")}},{accessor:"moduleId",Header:"Module ID"}],u=function(e){var t=e.origins;return a.createElement(l.default,{columns:c,data:t})},d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props.chunk;if(!e)return a.createElement("div",null,"Oopsy woopsy");var t=[{id:"Modules",render:function(){return a.createElement(i.ModuleTable,{modules:e.modules})}},{id:"Origins",render:function(){return a.createElement(u,{origins:e.origins})}},{id:"Raw Info",render:function(){return a.createElement("pre",null,a.createElement("code",null,JSON.stringify(s.omit(e,["modules","origins"]),null,2)))}}];return a.createElement("div",{className:"container is-view"},a.createElement("h1",{className:"title"},"Chunk ",a.createElement("b",null,e.id)),a.createElement(o.default,{tabs:t}))},t}(a.Component);t.default=d},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n(5),l=n(16),i=n(17),s=n(4),c=[{accessor:"id",Header:"ID",Cell:function(e){return a.createElement(s.ChunkLink,{name:e.value})}},{accessor:"names",Header:"Names",Cell:function(e){return e.value.join(", ")}},l.SizeColumn,{accessor:"entry",Header:"Entry?",Cell:i.BooleanCell},{accessor:"initial",Header:"Initial?",Cell:i.BooleanCell},{id:"nOrigins",accessor:function(e){return e.origins.length},Header:"#Origins",Cell:i.IntegerCell,style:{textAlign:"right"}},{id:"nModules",accessor:function(e){return e.modules.length},Header:"#Modules",Cell:i.IntegerCell,style:{textAlign:"right"}}],u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){return a.createElement("div",{className:"container is-view"},a.createElement("h1",{className:"title"},"Chunks"),a.createElement(o.default,{columns:c,data:this.props.chunkList}))},t}(a.Component);t.default=u},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l};Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=n(5),s=n(16),c=[{accessor:"id",Header:"Identifier"},s.ChunksColumn,s.AssetsColumn],u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=Object.entries(this.props.entrypointMap).map(function(e){var t=o(e,2),n=t[0],r=t[1];return a({id:n},r)});return l.createElement("div",{className:"container is-view"},l.createElement("h1",{className:"title"},"Entrypoints"),l.createElement(i.default,{columns:c,data:e}))},t}(l.Component);t.default=u},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n(95),l=n(101),i=n(47),s=n(103),c=n(18),u=n(104),d=n(14),m=n(8);l(o);var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={focus:void 0},t.initializeCy=function(){t.container&&!t.cy&&(t.cy=o({container:t.container,boxSelectionEnabled:!1,autounselectify:!0,style:s.default,elements:t.generateElements(),layout:{name:"klay",klay:{layoutHierarchy:!0,direction:"DOWN"}}}),t.cy.on("mouseover","node.module",function(e){var n=e.target[0].data("moduleId");t.focusOnModule(""+n)}))},t}return r(t,e),t.prototype.componentDidMount=function(){this.initializeCy()},t.prototype.componentWillUnmount=function(){this.cy&&(this.cy.destroy(),this.cy=void 0)},t.prototype.generateElements=function(){return u.generateElements(this.props.data)},t.prototype.focusOnModule=function(e){var t=this.props.data,n=parseInt(e,10),r=d.getModule(t,n);if(!r)return void this.setState({focus:void 0});var o=a.createElement("div",null,a.createElement("h3",{className:"title"},m.sanitizeModuleName(r.name)),"Size: ",c.formatInteger(r.size),a.createElement(i.default,{data:t,moduleId:n}));this.setState({focus:o})},t.prototype.render=function(){var e=this,t=this.state.focus;return a.createElement("div",null,a.createElement("div",{className:"columns"},a.createElement("div",{className:"column is-two-thirds"},a.createElement("div",{ref:function(t){e.container=t,e.initializeCy()},id:"graph-container"})),a.createElement("div",{className:"column"},t)))},t}(a.Component);t.default=f},,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{selector:"node",style:{content:"data(label)","text-valign":"center","text-halign":"center"}},{selector:"node.chunk",style:{"padding-top":"10px","padding-left":"10px","padding-bottom":"10px","padding-right":"10px","text-valign":"top","text-halign":"center","background-color":"#f7f1e3"}},{selector:"node.module",style:{"background-color":"#ffda79","border-color":"#cd6133","border-width":1,shape:"ellipse",width:"data(vsize)",height:"data(vsize)"}},{selector:"edge",style:{"curve-style":"bezier","target-arrow-shape":"triangle",width:1,"line-color":"#cd6133","target-arrow-color":"#cd6133"}}]},function(e,t,n){"use strict";function r(e){var t=[],n=[];return e.chunks.forEach(function(e){var r="chunk_"+e.id;e.modules.length&&t.push({data:{id:r,label:e.names.join(", ")},classes:"chunk"}),e.modules.forEach(function(e){var a="module_"+e.id;t.push({data:{id:a,moduleId:e.id,label:""+e.id,parent:r,size:e.size,vsize:10+Math.sqrt(e.size)},classes:"module"}),e.reasons.forEach(function(e){var t="module_"+e.moduleId;n.push({data:{source:t,target:a}})})})}),{edges:n,nodes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.generateElements=r},function(e,t,n){"use strict";function r(e){var t=[];return e.split("\n").forEach(function(e,n){t.push(e),t.push(o.createElement("br",{key:n}))}),t.pop(),o.createElement(o.Fragment,null,t)}var a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=n(9),i=n(13),s=n(18),c=function(e){var t=e.data;return t.warnings.length||t.errors.length?o.createElement("section",{className:"section"},o.createElement("div",{className:"container"},o.createElement("h2",{className:"title"},"Warnings and Errors"),t.warnings.map(function(e,t){return o.createElement("div",{className:"notification is-warning",key:t},r(e))}),t.errors.map(function(e,t){return o.createElement("div",{className:"notification error",key:t},r(e))}))):null},u=function(e){var t=e.data,n=Object.keys(t.entrypoints).length;return o.createElement(o.Fragment,null,o.createElement("p",null,"Looks like today we're analyzing a ",o.createElement("b",null,"Webpack ",t.version)," bundle built in ",o.createElement("b",null,(t.time/1e3).toLocaleString()," seconds")," ","at ",o.createElement("b",null,t.builtAt?new Date(t.builtAt).toLocaleString():"a strange time"),"."),o.createElement("p",null,"The compilation packed"," ",o.createElement(l.Link,{to:i.ModuleList.path},o.createElement("b",null,s.formatInteger(t.modules.length)," modules"))," ","into ",o.createElement(l.Link,{to:i.ChunkList.path},o.createElement("b",null,s.formatInteger(t.chunks.length)," chunks"))," ","which map to ",o.createElement(l.Link,{to:i.EntrypointList.path},o.createElement("b",null,s.formatInteger(n)," entrypoints")),". A total of ",o.createElement(l.Link,{to:i.AssetList.path},o.createElement("b",null,s.formatInteger(t.assets.length)," assets"))," were emitted."))},d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this,t=this.props.data;return o.createElement(o.Fragment,null,o.createElement("section",{className:"section"},o.createElement("div",{className:"container"},o.createElement("h1",{className:"title is-1"},"Hi there!"),o.createElement(u,{data:t}))),o.createElement(c,{data:t}),o.createElement("section",{className:"section"},o.createElement("div",{className:"container"},o.createElement("a",{href:"#",onClick:function(){return e.props.onAnalyzeOther()}},"Analyze another file..."))))},t}(o.Component);t.default=d},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n(26),l=n(47),i=n(107),s=n(18),c=n(4),u=n(14),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.module,r=[{id:"Refs",render:function(){return a.createElement(l.default,{data:t,moduleId:n.id})}},{id:"Reason Detail",render:function(){return a.createElement(i.default,{module:n})}},{id:"Raw Info",render:function(){return a.createElement("pre",null,a.createElement("code",null,JSON.stringify(n,null,2)))}}];return a.createElement("div",{className:"container is-view"},a.createElement("h1",{className:"title"},"Module ",a.createElement("b",null,n.id)),a.createElement("div",{className:"columns"},a.createElement("div",{className:"column"},a.createElement("table",{className:"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,"Size"),a.createElement("td",{className:"has-text-right"},s.formatInteger(n.size)," b")),a.createElement("tr",null,a.createElement("th",null,"Chunks"),a.createElement("td",null,a.createElement(c.ChunkLinks,{chunks:n.chunks}))),a.createElement("tr",null,a.createElement("th",null,"Issuer"),a.createElement("td",null,null!==n.issuerId?a.createElement(c.ModuleLink,{module:u.getModule(t,n.issuerId)}):"none"))))),a.createElement("div",{className:"column is-two-thirds"},a.createElement(o.default,{tabs:r}))))},t}(a.Component);t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(5),o=[{accessor:"type",Header:"Type"},{accessor:"module",Header:"Module"},{accessor:"userRequest",Header:"User Request"},{accessor:"loc",Header:"Loc"}];t.default=function(e){var t=e.module;return r.createElement(a.default,{columns:o,data:t.reasons})}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n(46),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){return a.createElement("div",{className:"container is-view"},a.createElement("h1",{className:"title"},"Modules"),a.createElement(o.ModuleTable,{modules:this.props.moduleList}))},t}(a.Component);t.default=l},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.loadFile=function(e){var n=new FileReader;n.onload=function(e){var r;try{r=JSON.parse(n.result)}catch(e){return void alert("Could not parse the file as JSON:\n"+e)}if(!r.version)return void alert("This data does not look like Webpack JSON (missing the version key)");t.props.onLoadFile(r)},n.readAsText(e)},t}return r(t,e),t.prototype.render=function(){var e=this;return a.createElement(a.Fragment,null,a.createElement("section",{className:"section"},a.createElement("div",{className:"container"},a.createElement("h1",{className:"title is-1"},"Welcome to webpack-xray!"),a.createElement("p",null,"To get started, you'll need a Webpack JSON file. If you're using vanilla Webpack, you can generate one by adding the ",a.createElement("code",null,"--json")," flag (and optionally the ",a.createElement("code",null,"--profile")," flag, for additional timing information) to your Webpack command line and directing the output to a file.",a.createElement("br",null),a.createElement("code",null,"$ webpack --mode=production --json --profile > stats.json"),a.createElement("br",null),"For other build systems and Webpack wrappers, please consult their documentation."),a.createElement("p",null,"Once you have a Webpack JSON file, choose it below."," ",a.createElement("b",null,"The file will not be uploaded anywhere. It will just be analyzed on your machine.")),a.createElement("div",{className:"file is-primary is-large is-boxed",onChange:function(t){return e.loadFile(t.target.files[0])},style:{justifyContent:"center",padding:"2em"}},a.createElement("label",{className:"file-label"},a.createElement("input",{className:"file-input",type:"file",name:"resume"}),a.createElement("span",{className:"file-cta"},a.createElement("span",{className:"file-label"},"Choose a Webpack JSON file…")))),a.createElement("div",{className:"has-text-centered"},a.createElement("p",null,"Alternatively, if you don't have a Webpack JSON file lying around and want to just kick the tires, you can load an example file."),a.createElement("a",{className:"button is-medium",onClick:function(){return e.props.onRequestExample()},style:{margin:"auto",marginTop:"1em"}},"Load Example")))))},t}(a.Component);t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(9),o=n(13),l=n(111);t.NavBar=function(){return r.createElement("div",{className:"navbar is-dark"},r.createElement("div",{className:"navbar-brand"},r.createElement(a.Link,{to:o.Home.path,className:"navbar-item"},r.createElement("img",{src:l,width:"32"}))),r.createElement("div",{className:"navbar-start"},r.createElement(a.NavLink,{exact:!0,to:o.Home.path,className:"navbar-item",activeClassName:"is-active"},"Home"),r.createElement(a.NavLink,{to:o.AssetList.path,className:"navbar-item",activeClassName:"is-active"},"Assets"),r.createElement(a.NavLink,{to:o.ChunkList.path,className:"navbar-item",activeClassName:"is-active"},"Chunks"),r.createElement(a.NavLink,{to:o.EntrypointList.path,className:"navbar-item",activeClassName:"is-active"},"Entrypoints"),r.createElement(a.NavLink,{to:o.ModuleList.path,className:"navbar-item",activeClassName:"is-active"},"Modules"),r.createElement(a.NavLink,{to:o.Graph.path,className:"navbar-item",activeClassName:"is-active"},"Graph")))}},function(e,t,n){e.exports=n.p+"assets/images/icon-only.19d65827.svg"},,function(e,t){}],[48]);
//# sourceMappingURL=client.956b5071.js.map