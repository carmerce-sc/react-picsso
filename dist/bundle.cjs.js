"use strict";var t=require("react"),n=function(){return n=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},n.apply(this,arguments)};function e(t){return"number"==typeof t?"".concat(t,"px"):t}"function"==typeof SuppressedError&&SuppressedError;var r={margin:{getValue:function(t){return"margin:".concat(e(t),";")}},m:{getValue:function(t){return"margin:".concat(e(t),";")}},marginX:{getValue:function(t){return"margin-left:".concat(e(t),";margin-right:").concat(e(t),";")}},mx:{getValue:function(t){return"margin-left:".concat(e(t),";margin-right:").concat(e(t),";")}},marginY:{getValue:function(t){return"margin-top:".concat(e(t),";margin-bottom:").concat(e(t),";")}},my:{getValue:function(t){return"margin-top:".concat(e(t),";margin-bottom:").concat(e(t),";")}},marginTop:{getValue:function(t){return"margin-top:".concat(e(t),";")}},mt:{getValue:function(t){return"margin-top:".concat(e(t),";")}},marginRight:{getValue:function(t){return"margin-right:".concat(e(t),";")}},mr:{getValue:function(t){return"margin-right:".concat(e(t),";")}},marginBottom:{getValue:function(t){return"margin-bottom:".concat(e(t),";")}},mb:{getValue:function(t){return"margin-bottom:".concat(e(t),";")}},marginLeft:{getValue:function(t){return"margin-left:".concat(e(t),";")}},ml:{getValue:function(t){return"margin-left:".concat(e(t),";")}}},o={padding:{getValue:function(t){return"padding:".concat(e(t),";")}},p:{getValue:function(t){return"padding:".concat(e(t),";")}},paddingX:{getValue:function(t){return"padding-left:".concat(e(t),";padding-right:").concat(e(t),";")}},px:{getValue:function(t){return"padding-left:".concat(e(t),";padding-right:").concat(e(t),";")}},paddingY:{getValue:function(t){return"padding-top:".concat(e(t),";padding-bottom:").concat(e(t),";")}},py:{getValue:function(t){return"padding-top:".concat(e(t),";padding-bottom:").concat(e(t),";")}},paddingTop:{getValue:function(t){return"padding-top:".concat(e(t),";")}},pt:{getValue:function(t){return"padding-top:".concat(e(t),";")}},paddingRight:{getValue:function(t){return"padding-right:".concat(e(t),";")}},pr:{getValue:function(t){return"padding-right:".concat(e(t),";")}},paddingBottom:{getValue:function(t){return"padding-bottom:".concat(e(t),";")}},pb:{getValue:function(t){return"padding-bottom:".concat(e(t),";")}},paddingLeft:{getValue:function(t){return"padding-left:".concat(e(t),";")}},pl:{getValue:function(t){return"padding-left:".concat(e(t),";")}}},c={width:{getValue:function(t){return"width:".concat(e(t),";")}},w:{getValue:function(t){return"width:".concat(e(t),";")}},height:{getValue:function(t){return"height:".concat(e(t),";")}},h:{getValue:function(t){return"height:".concat(e(t),";")}},size:{getValue:function(t){return"width: ".concat(Array.isArray(t)?e(t[0]):e(t),"; height: ").concat(Array.isArray(t)?e(t[1]):e(t),";")}},fullP:{getValue:function(){return"width:100%; height:100%;"}},fullV:{getValue:function(){return"width:100vw; height:100vh;"}},maxWidth:{getValue:function(t){return"max-width:".concat(t,";")}},maxHeight:{getValue:function(t){return"max-height:".concat(t,";")}},minWidth:{getValue:function(t){return"min-width:".concat(t,";")}},minHeight:{getValue:function(t){return"min-height:".concat(t,";")}}},a=n(n(n(n(n(n({},{border:{getValue:function(t){return"border:".concat(t,";")}},borderRadius:{getValue:function(t){return"border-radius:".concat(e(t),";")}},borderTop:{getValue:function(t){return"border-top:".concat(t,";")}},bt:{getValue:function(t){return"border-top:".concat(t,";")}},borderRight:{getValue:function(t){return"border-right:".concat(t,";")}},br:{getValue:function(t){return"border-right:".concat(t,";")}},borderBottom:{getValue:function(t){return"border-bottom:".concat(t,";")}},bb:{getValue:function(t){return"border-bottom:".concat(t,";")}},borderLeft:{getValue:function(t){return"border-left:".concat(t,";")}},bl:{getValue:function(t){return"border-left:".concat(t,";")}}}),{background:{getValue:function(t){return"background:".concat(t,";")}},backgroundColor:{getValue:function(t){return"background-color:".concat(t,";")}},bg:{getValue:function(t){return"background:".concat(t,";")}},color:{getValue:function(t){return"color:".concat(t,";")}}}),r),o),c),{jc:{getValue:function(){return"display:flex; justify-content:center;"}},ac:{getValue:function(){return"display:flex; align-items:center;"}},flex:{getValue:function(){return"display:flex;"}},overflow:{getValue:function(t){return"overflow:".concat(t,";")}},overflowX:{getValue:function(t){return"overflow-x:".concat(t,";")}},overflowY:{getValue:function(t){return"overflow-y:".concat(t,";")}},none:{getValue:function(){return"display:none;"}},gap:{getValue:function(t){return"gap:".concat(e(t),";")}},flexDirection:{getValue:function(t){return"flex-direction:".concat(t,";")}},column:{getValue:function(){return"flex-direction:column;"}},col:{getValue:function(){return"flex-direction:column;"}},row:{getValue:function(){return"flex-direction:row;"}},position:{getValue:function(t){return"position:".concat(t,";")}},ellipsis:{getValue:function(){return"text-overflow:ellipsis; overflow:hidden; white-space:nowrap;"}},pointer:{getValue:function(){return"cursor: pointer;"}},textAlign:{getValue:function(t){return"text-align:".concat(t,";")}},between:{getValue:function(){return"justify-content:space-between;"}},fontSize:{getValue:function(t){return"font-size:".concat(e(t),";")}},fs:{getValue:function(t){return"font-size:".concat(e(t),";")}},fontWeight:{getValue:function(t){return"font-weight:".concat(t,";")}},fw:{getValue:function(t){return"font-weight:".concat(t,";")}}});var u=function(t){var n={};return t.split(";").forEach((function(t){var e=t.split(":").map((function(t){return t.trim()})),r=e[0],o=e[1];if(r&&o){var c=r.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}));n[c]=o}})),n};function i(e){return function(r){var o,c=r.children,i=r.customConfig,l=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}(r,["children","customConfig"]),g=(o=e,function(e){return function(r){return t.createElement(o,n({},r,{style:u(e)}))}})(function(t,e){var r=Object.keys(t),o=n(n({},e),a),c=Object.keys(o),u=r.map((function(n,e){return n in t&&c.includes(n)?r[e]:void 0})).filter((function(t){return void 0!==t})).map((function(n){var e;return null===(e=null==o?void 0:o[n])||void 0===e?void 0:e.getValue(t[n])})).join(" ");return Array.from(new Set(u.split(" "))).join(" ")}(l,i));return t.createElement(g,null,c)}}var l,g,f={html:i("html"),body:i("body"),div:i("div"),span:i("span"),header:i("header"),footer:i("footer"),section:i("section"),article:i("article"),nav:i("nav"),aside:i("aside"),h1:i("h1"),h2:i("h2"),h3:i("h3"),h4:i("h4"),h5:i("h5"),h6:i("h6"),p:i("p"),ul:i("ul"),ol:i("ol"),li:i("li"),table:i("table"),tr:i("tr"),td:i("td"),th:i("th"),form:i("form"),button:i("button"),a:i("a"),strong:i("strong"),em:i("em"),b:i("b"),i:i("i"),blockquote:i("blockquote"),canvas:i("canvas"),iframe:i("iframe"),br:i("br"),hr:i("hr"),img:i("img"),input:i("input"),link:i("link"),meta:i("meta"),area:i("area"),base:i("base"),col:i("col"),command:i("command"),embed:i("embed"),keygen:i("keygen"),param:i("param"),source:i("source"),track:i("track"),wbr:i("wbr")},d=f=n(n({},f),(l=f,g={},Object.keys(l).forEach((function(t){var n,e=(n=t).charAt(0).toUpperCase()+n.slice(1);g[e]=l[t]})),g));module.exports=d;
//# sourceMappingURL=bundle.cjs.js.map