module.exports=function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=9)}([function(e,t){e.exports=require("react")},function(e,t,a){"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),i=[];function l(e){for(var t=-1,a=0;a<i.length;a++)if(i[a].identifier===e){t=a;break}return t}function c(e,t){for(var a={},r=[],n=0;n<e.length;n++){var o=e[n],c=t.base?o[0]+t.base:o[0],s=a[c]||0,d="".concat(c," ").concat(s);a[c]=s+1;var m=l(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==m?(i[m].references++,i[m].updater(u)):i.push({identifier:d,updater:g(u,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var n=a.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,m=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,a,r){var n=a?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,n);else{var o=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,a){var r=a.css,n=a.media,o=a.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function g(e,t){var a,r,n;if(t.singleton){var o=h++;a=f||(f=s(t)),r=u.bind(null,a,o,!1),n=u.bind(null,a,o,!0)}else a=s(t),r=p.bind(null,a,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var a=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<a.length;r++){var n=l(a[r]);i[n].references--}for(var o=c(e,t),s=0;s<a.length;s++){var d=l(a[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}a=o}}}},function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=e(t);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,r){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&n[c[0]]||(a&&(c[2]?c[2]="".concat(a," and ").concat(c[2]):c[2]=a),t.push(c))}},t}},function(e,t,a){"use strict";var r=a(2),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,":root{--color-curacao: hsl(246, 100%, 54%);--color-curacao-40: hsl(246, 100%, 54%, 0.4);--color-darkness: hsl(246, 18%, 23%);--color-ultradark: hsl(246, 18%, 3%);--color-peacock: hsl(245, 28%, 73%);--color-litte-peacock: hsl(246, 20%, 41%);--color-litte-peacock-40: hsl(246, 20%, 41%, 0.4);--color-peach: hsl(35, 100%, 93%);--color-snow: hsl(12, 10%, 94%);--color-oldsnow: hsl(12, 10%, 90%);--color-dirtysnow: hsl(12, 10%, 85%);--color-dirtysnow-20: hsl(12, 10%, 25%, 0.2);--color-darkness-30: hsla(246, 18%, 23%, 0.3);--color-ultradark-30: hsla(246, 18%, 3%, 0.3);--color-ultradark-5: hsla(246, 18%, 3%, 0.05)}.btn-close-details{position:fixed;top:20px;left:calc(30vw - 70px);width:100px;height:100px;display:flex;justify-content:center;align-items:center;border-radius:100px;background:var(--color-darkness);z-index:999;transition:transform .2s .3s ease}.btn-close-details.visible{transform:0}.btn-close-details.hidden{transition:transform .3s ease;transform:translateY(-50vh)}@media screen and (max-width: 768px){.btn-close-details{width:50px;height:50px;font-size:2rem;top:-10px;left:10px}}",""]),t.a=n},function(e,t,a){"use strict";var r=a(2),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,":root{--color-curacao: hsl(246, 100%, 54%);--color-curacao-40: hsl(246, 100%, 54%, 0.4);--color-darkness: hsl(246, 18%, 23%);--color-ultradark: hsl(246, 18%, 3%);--color-peacock: hsl(245, 28%, 73%);--color-litte-peacock: hsl(246, 20%, 41%);--color-litte-peacock-40: hsl(246, 20%, 41%, 0.4);--color-peach: hsl(35, 100%, 93%);--color-snow: hsl(12, 10%, 94%);--color-oldsnow: hsl(12, 10%, 90%);--color-dirtysnow: hsl(12, 10%, 85%);--color-dirtysnow-20: hsl(12, 10%, 25%, 0.2);--color-darkness-30: hsla(246, 18%, 23%, 0.3);--color-ultradark-30: hsla(246, 18%, 3%, 0.3);--color-ultradark-5: hsla(246, 18%, 3%, 0.05)}.btn-download-rendering{position:fixed;z-index:999;display:flex;justify-content:center;align-items:center;background:none;display:flex;flex-direction:row;left:20px;top:20px}.btn-download-rendering .btn{margin:0;border-radius:60px;width:100px;height:100px;display:flex;justify-content:center;align-items:center}@media screen and (max-width: 768px){.btn-download-rendering .btn{width:50px;height:50px;font-size:2rem;top:0;right:10px}}.btn-download-rendering:hover{background:none}.btn-download-rendering:hover .btn{background:var(--color-curacao)}.btn-download-rendering:hover .text{opacity:1;transform:translateY(0)}.btn-download-rendering .text{position:relative;opacity:0;font-weight:bold;color:var(--color-snow);font-size:1.25rem;transition:transform 1s ease,opacity 1s ease;transform:translateY(30px);margin:0 20px}",""]),t.a=n},function(e,t,a){"use strict";var r=a(2),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,":root{--color-curacao: hsl(246, 100%, 54%);--color-curacao-40: hsl(246, 100%, 54%, 0.4);--color-darkness: hsl(246, 18%, 23%);--color-ultradark: hsl(246, 18%, 3%);--color-peacock: hsl(245, 28%, 73%);--color-litte-peacock: hsl(246, 20%, 41%);--color-litte-peacock-40: hsl(246, 20%, 41%, 0.4);--color-peach: hsl(35, 100%, 93%);--color-snow: hsl(12, 10%, 94%);--color-oldsnow: hsl(12, 10%, 90%);--color-dirtysnow: hsl(12, 10%, 85%);--color-dirtysnow-20: hsl(12, 10%, 25%, 0.2);--color-darkness-30: hsla(246, 18%, 23%, 0.3);--color-ultradark-30: hsla(246, 18%, 3%, 0.3);--color-ultradark-5: hsla(246, 18%, 3%, 0.05)}.btn-open-narrative{position:fixed;right:60px;bottom:60px;border-radius:60px;width:100px;height:100px;display:flex;justify-content:center;align-items:center;padding:0;transition:background 1s ease}.btn-open-narrative:hover{background:var(--color-curacao)}@media screen and (max-width: 768px){.btn-open-narrative{width:50px;height:50px;font-size:2rem;top:0;right:10px}}",""]),t.a=n},function(e,t,a){"use strict";var r=a(2),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,":root{--color-curacao: hsl(246, 100%, 54%);--color-curacao-40: hsl(246, 100%, 54%, 0.4);--color-darkness: hsl(246, 18%, 23%);--color-ultradark: hsl(246, 18%, 3%);--color-peacock: hsl(245, 28%, 73%);--color-litte-peacock: hsl(246, 20%, 41%);--color-litte-peacock-40: hsl(246, 20%, 41%, 0.4);--color-peach: hsl(35, 100%, 93%);--color-snow: hsl(12, 10%, 94%);--color-oldsnow: hsl(12, 10%, 90%);--color-dirtysnow: hsl(12, 10%, 85%);--color-dirtysnow-20: hsl(12, 10%, 25%, 0.2);--color-darkness-30: hsla(246, 18%, 23%, 0.3);--color-ultradark-30: hsla(246, 18%, 3%, 0.3);--color-ultradark-5: hsla(246, 18%, 3%, 0.05)}.btn-to-exhibition{position:fixed;bottom:0;left:0;margin:0;display:flex;align-items:center;background:0;padding:30px;margin:0;border:0;margin:10px;font-size:1rem;cursor:pointer;text-transform:lowercase;letter-spacing:.01rem;color:var(--color-darkness);margin-top:30px;box-shadow:0 0 0 #000;transition:box-shadow 300ms ease}.btn-to-exhibition.light{background:var(--color-snow);color:var(--color-darkness)}.btn-to-exhibition:hover{color:var(--color-snow);background:var(--color-darkness)}.btn-to-exhibition .description{margin-right:20px;margin-left:20px}.btn-to-exhibition.width-text .description{transform:translateY(100px);transition:transform 100ms ease}.btn-to-exhibition.width-text:hover .description{transform:translateY(0)}",""]),t.a=n},function(e,t,a){"use strict";var r=a(2),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,".layout-narrative{position:absolute;right:0;top:0;width:70vw;max-width:70vw;z-index:1;transition:transform .3s ease;box-shadow:0 0 120px rgba(0,0,0,.1);min-height:100vh}.layout-narrative .scroll-wrapper{background:var(--color-snow);position:absolute;display:grid;grid-template-columns:1fr;overflow-y:scroll;height:auto}.layout-narrative.hidden{transform:translateX(100vw);transition:transform .5s .1s ease}.layout-narrative.visible{transform:translateX(0)}@media screen and (max-width: 768px){.layout-narrative{width:100vw;max-width:100vw}.layout-narrative .scroll-wrapper{height:100vh;position:relative}.layout-narrative.hidden{transform:translateY(100vh)}.layout-narrative.visible{transform:translateY(0)}}.layout-narrative *{max-width:100%}.layout-narrative .header{border-bottom:1px solid var(--color-dirtysnow);padding:120px;margin-bottom:120px}.layout-narrative .header *{color:var(--color-curacao)}@media screen and (max-width: 768px){.layout-narrative .header{padding:30px;padding-top:120px}}.layout-narrative .content{display:flex;flex-direction:column;max-width:100vw}.layout-narrative .footer{border-top:1px solid var(--color-dirtysnow);padding:120px;margin-top:80px;line-height:1.4;opacity:.6}@media screen and (max-width: 768px){.layout-narrative .footer{padding:30px}}.layout-narrative .footer span{height:30px}.layout-narrative .footer .version{display:flex;flex-direction:column}.layout-narrative .footer .version span{align-items:center;display:flex;flex-direction:row}",""]),t.a=n},function(e,t,a){"use strict";var r=a(2),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,".block{margin:20px 0}.block.cite{align-self:end;padding-right:20px}@media screen and (min-width: 768px){.block.cite{padding-right:120px}}.block.cite .link{display:flex;flex-direction:column;padding:0}.block.cite .link:hover .cite-text{color:var(--color-curacao-40)}.block.cite .link .cite-text{transition:background .3s ease,color .3s ease,padding .3s ease;border-left:10px solid var(--color-curacao);color:var(--color-curacao);text-align:left;padding-left:10px;line-height:1.6;font-size:.9rem}@media screen and (min-width: 768px){.block.cite .link .cite-text{padding-left:110px}}.block.cite .link .author{margin-top:20px;text-align:left;padding-left:20px;color:var(--color-curacao)}@media screen and (min-width: 768px){.block.cite .link .author{padding-left:120px}}.block.text{padding:0 20px}@media screen and (min-width: 768px){.block.text{padding:0 120px}}.block.text .preheading{font-size:2rem;line-height:1;color:var(--color-curacao);margin:0;margin-bottom:40px}.block.text .heading{margin:0;color:var(--color-darkness);font-size:2.5rem;line-height:1;margin:10px 0}.block.image{margin:20px 0;padding:0 20px;justify-content:center}@media screen and (min-width: 768px){.block.image{padding:0 120px;margin:120px 0}}.block.image .description{line-height:1.8;font-style:italic;display:flex;width:50%}.block.image .picture{display:flex;justify-content:center}.block.image .picture .image{border-radius:5px;transition:opacity 500ms ease;box-shadow:0 20px 30px var(--color-ultradark-5)}.block.image .picture .image:hover{opacity:.7}.block.imagegrid{display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:10px;padding:0}@media screen and (min-width: 768px){.block.imagegrid{grid-gap:20px;padding:0 60px;grid-template-columns:repeat(2, 1fr)}}.block.imagegrid .clickable-image{margin:0;padding:0}.block.imagegrid .image{transition:box-shadow .3s ease;width:100%;border-radius:2px;margin:0}.block.imagegrid .image:hover{opacity:.7}.block.references{margin-top:120px;padding:0 20px}@media screen and (min-width: 768px){.block.references{margin-top:120px;padding:0 120px}}.block.references .heading{margin-bottom:40px;font-size:2rem}.block.references .reference-list{display:grid;grid-template-columns:1fr}@media screen and (min-width: 768px){.block.references .reference-list{grid-column-gap:120px;grid-template-columns:1fr 1fr}}.block.references .reference-list .reference{display:flex;line-height:1.2;margin-bottom:20px;font-size:.85rem}.block.references .reference-list .reference .number{color:var(--color-curacao);font-size:.75rem;position:relative;top:-5px;margin-right:10px}.block.video-embed .grid{width:90%;margin:0 auto;display:grid;grid-template-columns:1fr;grid-gap:20px}@media screen and (max-width: 768px){.block.video-embed .grid{width:120%}}.block.video-embed .iframe-wrapper{position:relative;min-height:50vh;min-width:100%;border-radius:10px;overflow:hidden}@media screen and (max-width: 768px){.block.video-embed .iframe-wrapper{min-height:30vh}}.block.video-embed .iframe-wrapper iframe{width:100%;height:100%;position:absolute}.block.video-embed .description{text-align:center;position:relative;top:-30px;padding:40px 20px;margin:0 auto;line-height:1.4}.block.hyperlinks{padding:0 20px}@media screen and (min-width: 768px){.block.hyperlinks{padding:0 120px}}.block.hyperlinks .flex{display:flex;flex-direction:column}.block.hyperlinks .link{display:inline-table;color:var(--color-curacao);margin-bottom:5px;padding:20px 20px;transition:background 250ms ease,color 250ms ease;display:flex;align-items:center;flex-direction:column;justify-content:flex-start;align-items:flex-start}.block.hyperlinks .link .heading{font-size:1.25rem;margin-bottom:20px}.block.hyperlinks .link .hyperlink{display:flex;flex-direction:row}.block.hyperlinks .link .hyperlink .emoji{margin-right:20px}.block.hyperlinks .link .hyperlink .linktext{text-align:left;line-height:1.7}.block.hyperlinks .link .hyperlink:hover{color:var(--color-darkness)}.block.podcast{width:100%;height:auto;display:inline-flex;box-shadow:0 50px 80px var(--color-litte-peacock-40);overflow:hidden;border-radius:4px;background:var(--color-litte-peacock)}.block.podcast iframe{margin-bottom:-10px}.block.podcast .player{width:100%}",""]),t.a=n},function(e,t,a){"use strict";a.r(t),a.d(t,"ButtonOpenNarrative",(function(){return h})),a.d(t,"ButtonToExhibition",(function(){return v})),a.d(t,"ButtonCloseNarrative",(function(){return s})),a.d(t,"ButtonDownloadRendering",(function(){return u})),a.d(t,"Narrative",(function(){return T})),a.d(t,"CiteBlock",(function(){return $})),a.d(t,"HyperlinkBlock",(function(){return H})),a.d(t,"VideoEmedBlock",(function(){return D})),a.d(t,"ReferencesBlock",(function(){return q})),a.d(t,"AudioBlock",(function(){return U})),a.d(t,"ImageGridBlock",(function(){return P})),a.d(t,"ImageBlock",(function(){return Y})),a.d(t,"TextBlock",(function(){return I})),a.d(t,"PodcastBlock",(function(){return Q}));var r=a(0),n=a.n(r),o=a(1),i=a.n(o),l=a(3),c={insert:"head",singleton:!1},s=(i()(l.a,c),l.a.locals,function(e){var t=e.showNarrative,a=e.setShowNarrative;return n.a.createElement("button",{className:["btn-close-details","emoji",t?"visible":"hidden"].join(" "),onClick:function(){return a(!1)}},window.matchMedia("(max-width: 768px)").matches?n.a.createElement("span",null,"☝️"):n.a.createElement("span",null,"👈"))}),d=a(4),m={insert:"head",singleton:!1},u=(i()(d.a,m),d.a.locals,function(e){var t=e.canvasRef,a=e.prepareDownload;return n.a.createElement("div",{className:"btn-download-rendering"},n.a.createElement("button",{className:"btn",onClick:function(){var e=t.toDataURL();a(e)}},n.a.createElement("span",{className:"emoji"},"📷")),n.a.createElement("span",{className:"text"},"Schnappschuss"))}),p=a(5),f={insert:"head",singleton:!1},h=(i()(p.a,f),p.a.locals,function(e){var t=e.setShowNarrative,a=e.showNarrative;return n.a.createElement("button",{className:"emoji btn-open-narrative",onClick:function(){return t(!a)}},n.a.createElement("span",{className:"emoji"},"📖"))}),g=a(6),b={insert:"head",singleton:!1},v=(i()(g.a,b),g.a.locals,function(e){var t=e.onClick,a=e.withText,r=e.light,o=function(e){var a=e.children,r=e.className;return t?n.a.createElement("div",{onClick:t,className:r},a):n.a.createElement("a",{href:"https://exhibition.mixing-senses.art",className:r},a)};return n.a.createElement(o,{className:["btn-to-exhibition",a?"":"hidden-text",r?"light":""].join(" "),onClick:t},n.a.createElement("span",{className:"emoji"},"🏛️"),n.a.createElement("span",{className:"description"},"Zum Foyer"))});function x(e){var t=function(e,t){if(!e)return"";var a=e,r=/\((\w+)\:[^\)]*\)/;return function e(){var t=a.match(r);if(t&&t.length){var n="",o=function(e){var t=e.match(/^\((\w+)\:/)[1],a=e.replace(/^\(/,"").replace(/\)$/,""),r=a.split(/\w+\: /).slice(1).map((function(e){return e.trim()})),n=a.match(/(\w+)\: /g).map((function(e){return e.replace(/\: $/,"")})).reduce((function(e,t,a){return e[t]=r[a],e}),{});return"link"===t&&(n.link="".concat(n.link)),{tag:t,attrs:n}}(t[0]),i=o.tag,l=o.attrs;"link"===i&&(n='<a href="'.concat(l.link,'">').concat(l.text,"</a>")),"image"===i&&(n="<figure".concat(l.class?' class="'.concat(l.class,'"'):"",'><img src="').concat(l.image,'" />').concat(l.caption?"<figcaption>".concat(l.caption,"</figcaption>"):"","</figure>")),a=a.replace(r,n),e()}return a}(),a}(e);return n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}var k=function(e){var t=e.content;return n.a.createElement("section",{className:"block text"},void 0!==t.headline?n.a.createElement("h2",{className:"heading"},t.headline):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:"foldout"},void 0!==t.preheadline?n.a.createElement("h4",{className:"preheading"},t.preheadline):n.a.createElement(n.a.Fragment,null),void 0!==t.text?n.a.createElement("article",{className:"text"},x(t.text)):n.a.createElement(n.a.Fragment,null)))},y=function(e){var t=e.content,a=t.image.length>0?"".concat(t.image[0].url):"";return n.a.createElement("section",{className:"block image"},n.a.createElement("div",{className:"picture"},n.a.createElement("a",{href:a,target:"_blank",className:"clickable-image"},n.a.createElement("img",{src:a,className:"image"}))),void 0!==t.text?n.a.createElement("small",{className:"description"},x(t.text)):n.a.createElement(n.a.Fragment,null))},w=function(e){var t=e.content;return n.a.createElement("section",{className:"block imagegrid"},t.image.map((function(e){return n.a.createElement("a",{key:e.id,href:e.url,target:"_blank",className:"clickable-image"},n.a.createElement("img",{className:"image",src:e.url}))})))};function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var j=function(e){var t=e.content,a=E(Object(r.useState)(!1),2);a[0],a[1];return n.a.createElement("section",{className:"block audio"},n.a.createElement("article",null,void 0!==t.text?x(t.text):""))},S=function(e){var t=e.content;return n.a.createElement("section",{className:"block references"},n.a.createElement("h3",{className:"heading"},"Quellen"),n.a.createElement("ul",{className:"reference-list"},t.referencesruct.map((function(e,t){return n.a.createElement("li",{key:t,className:"reference"},n.a.createElement("span",{className:"number"},e.footnote),n.a.createElement("small",{className:"text"},e.labeltext))}))))},_=function(e){var t=e.content;return n.a.createElement("section",{className:"block video-embed"},n.a.createElement("div",{className:"grid"},n.a.createElement("div",{className:"iframe-wrapper"},n.a.createElement("iframe",{src:t.video,frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0,muted:!0})),n.a.createElement("article",{className:"description"},x(t.text))))},C=function(e){var t=e.content;return n.a.createElement("section",{className:"block hyperlinks"},n.a.createElement("div",{className:"flex"},t.links.map((function(e){return n.a.createElement("a",{key:e.link,href:e.link,className:"link",target:"_blank"},n.a.createElement("div",{className:"hyperlink"},n.a.createElement("span",{className:"emoji"},"🔗"),n.a.createElement("span",{className:"linktext"},e.text)))}))))},B=function(e){var t=e.content;return n.a.createElement("section",{className:"block cite"},n.a.createElement("a",{className:"link",href:t.link,target:"_blank"},n.a.createElement("blockquote",{className:"cite-text",cite:t.link},void 0!==t.cite?x(t.cite):""),n.a.createElement("span",{className:"author"},void 0!==t.author?t.author:"")))},O=function(e){var t=e.content;return n.a.createElement("section",{className:"block podcast"},n.a.createElement("iframe",{className:"player",src:t.src}))},A=a(7),z={insert:"head",singleton:!1},F=(i()(A.a,z),A.a.locals,a(8)),M={insert:"head",singleton:!1},T=(i()(F.a,M),F.a.locals,function(e){var t=e.show,a=e.content,r=e.version;return n.a.createElement("div",{className:["layout-narrative",t?"visible":"hidden"].join(" ")},n.a.createElement("div",{className:"scroll-wrapper"},n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,a.title),n.a.createElement("article",null,a.shortdesription)),n.a.createElement("div",{className:"content"},a.blocks?a.blocks.map((function(e){switch(e._key){case"textblock":return n.a.createElement(k,{key:e._uid,content:e});case"imageblock":return n.a.createElement(y,{key:e._uid,content:e});case"imagegrid":return n.a.createElement(w,{key:e._uid,content:e});case"audioblock":return n.a.createElement(j,{key:e._uid,content:e});case"references":return n.a.createElement(S,{key:e._uid,content:e});case"videoembed":return n.a.createElement(_,{key:e._uid,content:e});case"hyperlinks":return n.a.createElement(C,{key:e._uid,content:e});case"citeblock":return n.a.createElement(B,{key:e._uid,content:e});case"podcastblock":return n.a.createElement(O,{key:e._uid,content:e});default:return n.a.createElement(n.a.Fragment,null)}})):n.a.createElement(n.a.Fragment,null)),n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"version"},n.a.createElement("span",null,n.a.createElement("b",null,a.title)),n.a.createElement("span",null,n.a.createElement("b",null,"Version: ")," ",r.tag),n.a.createElement("span",null,n.a.createElement("b",null,"Commit: ")," ",r.commit),n.a.createElement("span",null,n.a.createElement("b",null,"Bugs/Code: "),n.a.createElement("a",{href:r.package.bugs.url,target:"_blank"},r.package.name))))))}),I=function(e){var t=e.content;return n.a.createElement("section",{className:"block text"},void 0!==t.headline?n.a.createElement("h2",{className:"heading"},t.headline):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:"foldout"},void 0!==t.preheadline?n.a.createElement("h4",{className:"preheading"},t.preheadline):n.a.createElement(n.a.Fragment,null),void 0!==t.text?n.a.createElement("article",{className:"text"},x(t.text)):n.a.createElement(n.a.Fragment,null)))},Y=function(e){var t=e.content,a=t.image.length>0?"".concat(t.image[0].url):"";return n.a.createElement("section",{className:"block image"},n.a.createElement("div",{className:"picture"},n.a.createElement("a",{href:a,target:"_blank",className:"clickable-image"},n.a.createElement("img",{src:a,className:"image"}))),void 0!==t.text?n.a.createElement("small",{className:"description"},x(t.text)):n.a.createElement(n.a.Fragment,null))},P=function(e){var t=e.content;return n.a.createElement("section",{className:"block imagegrid"},t.image.map((function(e){return n.a.createElement("a",{key:e.id,href:e.url,target:"_blank",className:"clickable-image"},n.a.createElement("img",{className:"image",src:e.url}))})))};function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var U=function(e){var t=e.content,a=R(Object(r.useState)(!1),2);a[0],a[1];return n.a.createElement("section",{className:"block audio"},n.a.createElement("article",null,void 0!==t.text?x(t.text):""))},q=function(e){var t=e.content;return n.a.createElement("section",{className:"block references"},n.a.createElement("h3",{className:"heading"},"Quellen"),n.a.createElement("ul",{className:"reference-list"},t.referencesruct.map((function(e,t){return n.a.createElement("li",{key:t,className:"reference"},n.a.createElement("span",{className:"number"},e.footnote),n.a.createElement("small",{className:"text"},e.labeltext))}))))},D=function(e){var t=e.content;return n.a.createElement("section",{className:"block video-embed"},n.a.createElement("div",{className:"grid"},n.a.createElement("div",{className:"iframe-wrapper"},n.a.createElement("iframe",{src:t.video,frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0,muted:!0})),n.a.createElement("article",{className:"description"},x(t.text))))},H=function(e){var t=e.content;return n.a.createElement("section",{className:"block hyperlinks"},n.a.createElement("div",{className:"flex"},t.links.map((function(e){return n.a.createElement("a",{key:e.link,href:e.link,className:"link",target:"_blank"},n.a.createElement("div",{className:"hyperlink"},n.a.createElement("span",{className:"emoji"},"🔗"),n.a.createElement("span",{className:"linktext"},e.text)))}))))},$=function(e){var t=e.content;return n.a.createElement("section",{className:"block cite"},n.a.createElement("a",{className:"link",href:t.link,target:"_blank"},n.a.createElement("blockquote",{className:"cite-text",cite:t.link},void 0!==t.cite?x(t.cite):""),n.a.createElement("span",{className:"author"},void 0!==t.author?t.author:"")))},Q=function(e){var t=e.content;return n.a.createElement("section",{className:"block podcast"},n.a.createElement("iframe",{className:"player",src:t.src}))}}]);