document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector(".numbers-container"),e=document.querySelector(".left-arrow"),t=document.querySelector(".right-arrow"),c=1;function o(e,t){var a=function(e){var t=document.createElement("div");t.classList.add("number"),t.textContent=e,e===c&&t.classList.add("active"),t.addEventListener("click",(function(){c=e,o(r(),i())})),n.appendChild(t)};n.innerHTML="";for(var d=e;d<=t;d++)a(d)}function r(){return Math.max(1,c-Math.floor(3.5))}function i(){return Math.min(20,r()+7-1)}function a(){e.style.display=1===c?"none":"block",t.style.display=20===c?"none":"block"}e.addEventListener("click",(function(){c>1&&(c--,o(r(),i()),a())})),t.addEventListener("click",(function(){c<20&&(c++,o(r(),i()),a())})),o(r(),i()),a()}));
//# sourceMappingURL=index.ccce27dd.js.map