(function(t){function e(e){for(var o,i,a=e[0],c=e[1],s=e[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},u=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2e90":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("TodoList")]),n("todo-list"),n("router-view")],1)},u=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BaseInputText",{attrs:{placeholder:"New todo"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}},model:{value:t.newTodoText,callback:function(e){t.newTodoText=e},expression:"newTodoText"}}),t.todos.length?n("ul",{staticClass:"list"},t._l(t.todos,(function(e){return n("TodoListItem",{key:e.id,attrs:{todo:e},on:{remove:t.removeTodo}})})),1):n("p",[t._v("Nothing left in the list. Add a new todo in the input above.")])],1)},a=[],c=(n("4de4"),n("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",t._g({staticClass:"input",attrs:{type:"text"},domProps:{value:t.value}},t.listeners))}),s=[],l=n("5530"),d={props:{value:{type:String,default:""}},computed:{listeners:function(){var t=this;return Object(l["a"])(Object(l["a"])({},this.$listeners),{},{input:function(e){return t.$emit("input",e.target.value)}})}}},p=d,f=(n("c8b1"),n("2877")),v=Object(f["a"])(p,c,s,!1,null,"0da81364",null),b=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v(" "+t._s(t.todo.text)+" "),n("button",{on:{click:function(e){return t.$emit("remove",t.todo.id)}}},[t._v("X")])])},m=[],y={props:{todo:{type:Object,required:!0}}},T=y,x=Object(f["a"])(T,h,m,!1,null,"6a9ad3a0",null),w=x.exports,_=1,O={components:{BaseInputText:b,TodoListItem:w},data:function(){return{newTodoText:"",todos:[]}},methods:{addTodo:function(){var t=this.newTodoText.trim();t&&(this.todos.push({id:_++,text:t}),this.newTodoText="")},removeTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))}}},g=O,j=(n("d407"),Object(f["a"])(g,i,a,!1,null,"7a39b0ec",null)),k=j.exports,P={components:{TodoList:k}},$=P,S=(n("5c0b"),Object(f["a"])($,r,u,!1,null,null,null)),E=S.exports,I=n("8c4f");o["a"].use(I["a"]);var L=new I["a"]({mode:"history",base:"/"}),M=L;o["a"].config.productionTip=!1,new o["a"]({router:M,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"7abe":function(t,e,n){},"9c0c":function(t,e,n){},c8b1:function(t,e,n){"use strict";var o=n("2e90"),r=n.n(o);r.a},d407:function(t,e,n){"use strict";var o=n("7abe"),r=n.n(o);r.a}});
//# sourceMappingURL=app.bcb08c2d.js.map