!function(){function e(e){return e&&e.__esModule?e.default:e}var t="004a3a7ad0ebfa9ee53f6d0ac407af43",n="https://api.themoviedb.org/3",r={};function a(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,s,"next",e)}function s(e){a(i,r,o,c,s,"throw",e)}c(void 0)}))}};var o={},i=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),i=new O(r||[]);return o._invoke=function(e,t,n){var r=l;return function(a,o){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw o;return M()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=d(e,t,n);if("normal"===s.type){if(r=n.done?m:p,s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=m,n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var l="suspendedStart",p="suspendedYield",h="executing",m="completed",f={};function v(){}function y(){}function g(){}var L={};s(L,o,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(j([])));E&&E!==n&&r.call(E,o)&&(L=E);var b=g.prototype=v.prototype=Object.create(L);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(a,o,i,c){var s=d(e[a],e,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(l).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=d(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,f;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function j(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:M}}function M(){return{value:t,done:!0}}return y.prototype=g,s(b,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},x(C.prototype),s(C.prototype,i,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new C(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(b),s(b,c,"Generator"),s(b,o,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),f}},e}(o);try{regeneratorRuntime=i}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}var c="004a3a7ad0ebfa9ee53f6d0ac407af43",s="https://api.themoviedb.org/3";function u(e){return d.apply(this,arguments)}function d(){return(d=e(r)(e(o).mark((function t(n){var r,a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"/").concat(n,"?api_key=").concat(c),e.prev=1,e.next=4,fetch(r);case 4:return a=e.sent,e.next=7,a.json();case 7:return i=e.sent,e.abrupt("return",i);case 11:e.prev=11,e.t0=e.catch(1),console.error("Error at ".concat(r),e.t0);case 14:case"end":return e.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return(p=e(r)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u("trending/movie/week"));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return(m=e(r)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u("genre/movie/list"));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function f(e){return Math.abs(e%1)>=.005?Math.ceil(100*e)/100:Math.floor(100*e)/100}function v(){return v=e(r)(e(o).mark((function t(){var n,a,i,c;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("main-content"),(a=document.createElement("div")).classList.add("movies"),(i=document.createElement("div")).id="movie-container",a.appendChild(i),n.appendChild(a),t.next=9,l();case 9:return c=t.sent,t.next=12,h();case 12:t.sent,c.results.forEach(function(){var t=e(r)(e(o).mark((function t(n){var r,a,c,s,d,l,p,h,m,v,g;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("movie/".concat(n.id));case 2:r=e.sent,a=r.vote_average,c=r.popularity,s=r.genres.map((function(e){return e.name})),d=r.overview,(l=document.createElement("div")).classList.add("movie-card"),(p=document.createElement("img")).src="https://image.tmdb.org/t/p/w500/".concat(n.poster_path),p.alt="".concat(n.title," Poster"),p.classList.add("movie-image"),(h=document.createElement("div")).classList.add("movie-description"),(m=document.createElement("h2")).textContent=n.title,m.classList.add("movie-title"),(v=document.createElement("span")).classList.add("rating"),v.textContent=" ".concat(f(a)),(g=document.createElement("p")).innerHTML="".concat(s.slice(0,2).join(", "),", ").concat(s.length>2?"Other":""," | ").concat(n.release_date?n.release_date.substring(0,4):"N/A"," | "),g.appendChild(v),g.classList.add("movie-details"),h.appendChild(m),h.appendChild(g),l.appendChild(p),l.appendChild(h),l.addEventListener("click",(function(){return y(n.title,n.poster_path,f(a),c,s,d)})),i.appendChild(l);case 31:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 14:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function y(e,t,n,r,a,o){var i=document.createElement("div");i.classList.add("modal-backdrop"),i.addEventListener("click",(function(e){e.target===i&&g(i)}));var c=document.createElement("div");c.classList.add("modal-content");var s=document.createElement("img");s.src="https://image.tmdb.org/t/p/w500/".concat(t),s.alt="".concat(e," Poster"),s.classList.add("movie-image");var u=document.createElement("h2");u.textContent=e;var d=document.createElement("button");d.classList.add("close-button"),d.addEventListener("click",(function(){return g(i)}));var l=document.createElement("div");l.classList.add("modal-movie-description");var p=document.createElement("p");p.innerHTML="<b>ABOUT:</b>";var h=document.createElement("p");h.textContent=o;var m=document.createElement("div");m.classList.add("movie-modal-stats");var f=document.createElement("div");f.classList.add("movie-modal-tags");var v=document.createElement("div");v.classList.add("movie-modal-results");var y=document.createElement("span");y.textContent="Rating:";var w=document.createElement("span");w.classList.add("rating"),w.textContent=n;var E=document.createElement("span");E.textContent="Popularity:";var b=document.createElement("span");b.textContent=r;var x=document.createElement("span");x.textContent="Genres:";var C=document.createElement("span");C.textContent=a.join(", "),f.appendChild(y),f.appendChild(E),f.appendChild(x),v.appendChild(w),v.appendChild(b),v.appendChild(C),m.appendChild(f),m.appendChild(v),l.appendChild(u),l.appendChild(m),l.appendChild(p),l.appendChild(h);var k=document.createElement("div");k.classList.add("modal-buttons");var _=L("ADD TO WATCHED","movie-watched-btn"),S=L("ADD TO QUEUE","movie-queue-btn");k.appendChild(_),k.appendChild(S),l.appendChild(k),c.appendChild(s),c.appendChild(l),c.appendChild(d),i.appendChild(c),document.body.appendChild(i),i.style.display="flex",document.body.style.overflow="hidden"}function g(e){e.style.display="none",document.body.style.overflow="",e.remove()}function L(e,t){var n=document.createElement("button");return n.textContent=e,n.classList.add(t),n}window.onload=function(){return v.apply(this,arguments)},document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".numbers-container"),t=document.querySelector(".left-arrow"),n=document.querySelector(".right-arrow"),r=1;function a(t,n){var c=function(t){var n=document.createElement("div");n.classList.add("number"),n.textContent=t,t===r&&n.classList.add("active"),n.addEventListener("click",(function(){r=t,a(o(),i())})),e.appendChild(n)};e.innerHTML="";for(var s=t;s<=n;s++)c(s)}function o(){return Math.max(1,r-Math.floor(3.5))}function i(){return Math.min(20,o()+7-1)}function c(){t.style.display=1===r?"none":"block",n.style.display=20===r?"none":"block"}t.addEventListener("click",(function(){r>1&&(r--,a(o(),i()),c())})),n.addEventListener("click",(function(){r<20&&(r++,a(o(),i()),c())})),a(o(),i()),c()}));var w={libraryLink:document.querySelector(".library-btn"),homeLink:document.querySelector(".home-btn"),headerButtons:document.querySelector(".list-button"),filmsList:document.querySelector(".movies"),headerForm:document.querySelector(".search-bar"),libraryHeader:document.querySelector(".container-header")};function E(e,t){return b.apply(this,arguments)}function b(){return(b=e(r)(e(o).mark((function t(n,r){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n,r);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,a.json();case 8:return i=e.sent,e.abrupt("return",i);case 12:return e.prev=12,e.t0=e.catch(0),console.error("Error fetching data:",e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function x(e){return C.apply(this,arguments)}function C(){return(C=e(r)(e(o).mark((function r(a){var i,c,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(n,"/").concat(a,"?api_key=").concat(t),e.prev=1,e.next=4,fetch(i);case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(1),console.error("Error at ".concat(i),e.t0);case 14:case"end":return e.stop()}}),r,null,[[1,11]])})))).apply(this,arguments)}function k(){return _.apply(this,arguments)}function _(){return(_=e(r)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x("/genre/movie/list"));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function S(){return O.apply(this,arguments)}function O(){return(O=e(r)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x("/trending/movie/week"));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function j(e){return M.apply(this,arguments)}function M(){return(M=e(r)(e(o).mark((function r(a){var i,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(n,"/search/movie?api_key=").concat(t,"&query=").concat(a,"&language=en-US&include_adult=false&page=1"),c={method:"GET",headers:{accept:"application/json"}},e.next=4,E(i,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function T(e){return q.apply(this,arguments)}function q(){return(q=e(r)(e(o).mark((function t(n){var r,a,i,c,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return e.next=4,j(n);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,S();case 9:r=e.sent;case 10:if((a=document.getElementById("movie-container")).innerHTML="",0!==r.results.length){e.next=16;break}(i=document.createElement("p")).textContent="Nu s-au găsit filme pentru căutarea dată.",a.appendChild(i),document.querySelector(".movies").hidden=!0,e.next=27;break;case 16:return document.querySelector(".movies").remove(),(c=document.createElement("div")).classList.add("movies"),(s=document.createElement("div")).id="movie-container",c.appendChild(s),document.body.appendChild(c),e.next=25,k();case 25:u=e.sent,r.results.forEach((function(e){N(e,u,s)}));case 27:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function N(e,t,n){var r=document.createElement("div");r.classList.add("movie-card");var a=document.createElement("img");a.src="https://image.tmdb.org/t/p/w500/".concat(e.poster_path),a.alt="".concat(e.title," Poster"),a.classList.add("movie-image");var o=document.createElement("div");o.classList.add("movie-description");var i=document.createElement("h2");i.textContent=e.title,i.classList.add("movie-title");var c,s=e.genre_ids.map((function(e){var n=t.genres.find((function(t){return t.id===e}));return n?n.name:""})),u=s.slice(0,2),d=s.slice(2),l=(c=e.vote_average,Math.abs(c%1)>=.005?Math.ceil(100*c)/100:Math.floor(100*c)/100),p=document.createElement("p"),h=document.createElement("span");h.classList.add("rating"),h.textContent=" ".concat(l),d.length>0?p.innerHTML="".concat(u.join(", "),", Other | ").concat(e.release_date?e.release_date.substring(0,4):"N/A"," | "):p.innerHTML="".concat(u.join(", ")," | ").concat(e.release_date?e.release_date.substring(0,4):"N/A"," | "),p.appendChild(h),p.classList.add("movie-details"),o.appendChild(i),o.appendChild(p),r.appendChild(a),r.appendChild(o),n.appendChild(r),r.addEventListener("click",(function(){y(e.title,e.poster_path,e.vote_average,e.popularity,u,e.overview)}))}function H(){var e,t;e=document.getElementById("spinner"),t=new Spinner({lines:10,length:1,width:6,radius:27,scale:1,corners:1,color:"#FFA500",opacity:.25,rotate:0,direction:1,speed:3,trail:60,fps:20,zIndex:2e9,className:"spinner",top:"51%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"}).spin(e),setTimeout((function(){t.stop()}),250)}document.addEventListener("DOMContentLoaded",(function(){var t,n=document.querySelector(".search-input");document.querySelector(".search-bar").addEventListener("submit",(t=e(r)(e(o).mark((function t(r){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),a=n.value.trim(),e.next=4,T(a);case 4:case"end":return e.stop()}}),t)}))),function(e){return t.apply(this,arguments)}))})),w.homeLink.addEventListener("click",(function(){w.headerForm.classList.remove("visually-hidden"),w.headerButtons.classList.add("visually-hidden"),w.libraryHeader.classList.add("container-header"),w.libraryHeader.classList.remove("library-header")})),document.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("movie-watched-btn")||t.classList.contains("movie-queue-btn")){var n=t.closest(".movie-card").querySelector(".movie-title").textContent,r=JSON.parse(localStorage.getItem("movies"))||[],a={title:n,watched:!!t.classList.contains("movie-watched-btn")};r.push(a),localStorage.setItem("movies",JSON.stringify(r))}})),w.libraryLink.addEventListener("click",(function(){w.headerForm.classList.add("visually-hidden"),w.headerButtons.classList.remove("visually-hidden"),w.libraryHeader.classList.remove("container-header"),w.libraryHeader.classList.add("library-header")})),document.addEventListener("click",(function(e){if("library-btn"===e.target.id){var t=document.getElementById("main-content");t.innerHTML="",(JSON.parse(localStorage.getItem("movies"))||[]).forEach((function(e){if(e.watched){var n=document.createElement("div");n.classList.add("movie-card");var r=document.createElement("h2");r.textContent=e.title,r.classList.add("movie-title"),n.appendChild(r),t.appendChild(n)}}))}})),document.addEventListener("keydown",(function(e){"Enter"===e.key&&H()})),window.addEventListener("load",H),window.addEventListener("beforeunload",H),document.querySelector(".search-button").addEventListener("click",(function(){H()})),document.querySelector(".numbers-container").addEventListener("click",(function(e){e.target.classList.contains("number")&&H()})),document.getElementById("checkbox").addEventListener("change",(function(){document.body.classList.toggle("dark")}))}();
//# sourceMappingURL=index.a9470c6e.js.map