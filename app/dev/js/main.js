!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o,r,i,c,l,m,u=document.querySelector(".main-wrapper"),s=document.querySelector(".interactive-block"),f=document.querySelector(".student"),v=document.querySelector(".student-hand"),a=document.querySelector(".interactive-block"),h=document.querySelector(".determinate"),d=document.querySelector(".logo"),y=document.querySelector(".content-wrapeer"),p=document.querySelector(".money-in-hand1"),b=document.querySelector(".money-in-hand2"),L=document.querySelector(".money-in-hand3"),g=document.querySelector(".title"),S=document.querySelector(".subtitle"),q=(document.querySelector(".drag-btn"),document.querySelector(".tips")),w=!1,E=0,C=0,M=0,O=a.getBoundingClientRect(),x=O.width,j=O.left,T=f.getBoundingClientRect().width;function I(e){c="touchstart"===e.type?(i=e.touches[0].clientX-E,e.touches[0].clientY-C):(i=e.clientX-E,e.clientY-C),e.target===f&&(w=!0)}function P(e){i=o,c=r,w=!1}function _(e){var t;w&&(e.preventDefault(),r="touchmove"===e.type?(o=e.touches[0].clientX-i,e.touches[0].clientY-c):(o=e.clientX-i,e.clientY-c),C=r,(E=o)<0-T/2||x-j+T/2<o||(t=o,f.style.transform="translate3d("+t+"px, 0px, 0)"))}s.addEventListener("touchstart",I,!1),s.addEventListener("touchend",P,!1),u.addEventListener("touchmove",_,!1),s.addEventListener("mousedown",I,!1),s.addEventListener("mouseup",P,!1),u.addEventListener("mousemove",_,!1);var B=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"addMoney",function(){var e=document.createElement("div");e.style.left="".concat(Math.floor(45*Math.random()+25),"%"),u.append(e),e.classList.add("money"),t.moneyCash.push(e)}),n(this,"deleteFirstMoneyEl",function(){t.moneyCash[0].remove(),t.moneyCash.shift()}),n(this,"checker",function(){t.moneyCash.forEach(function(e){var t=e.getBoundingClientRect(),n=t.left,o=t.top,r=t.width,i=t.height,c=v.getBoundingClientRect(),u=c.left,s=c.top,a=c.width,d=c.height;s<=o+i&&o<=s+d&&u<=n+r&&n<=u+a&&(console.log("BINGO"),e.remove(),M+=33.3,h.setAttribute("style","width: ".concat(M,"%")),30<M&&p.classList.remove("hidden"),60<M&&b.classList.remove("hidden"),99<=M&&(clearInterval(l),clearInterval(m),clearInterval(void 0),f.classList.add("happy"),L.classList.remove("hidden"),g.innerText="Запишись на курс",S.innerText="Кращі студенти стануть тім-лідерами!",g.classList.remove("visibile"),S.classList.remove("visibile"),q.classList.add("hidden")))})}),this.moneyCash=[]};function k(){y.removeEventListener("mousedown",k,!1),l=setInterval(function(){B.addMoney()},2e3)}m=setInterval(function(){B.checker()},16),addEventListener("DOMContentLoaded",function(){d.classList.remove("hidden"),setTimeout(function(){d.classList.add("logo-to-top")},3e3),setTimeout(function(){y.classList.remove("hidden"),y.addEventListener("mousedown",k,!1)},5500),setTimeout(function(){g.classList.add("visibile"),S.classList.add("visibile")},6500)})}]);
//# sourceMappingURL=main.js.map