const e=i("ADD TO WATCHED","movie-watched-btn"),t=i("ADD TO QUEUE","movie-queue-btn");async function n(e){const t=`https://api.themoviedb.org/3/${e}?api_key=004a3a7ad0ebfa9ee53f6d0ac407af43`;try{const e=await fetch(t);return await e.json()}catch(e){console.error(`Error at ${t}`,e)}}function a(e){return Math.abs(e%1)>=.005?Math.ceil(100*e)/100:Math.floor(100*e)/100}function o(e,t,n,a,o,d,s){const r=document.createElement("div");r.classList.add("modal-backdrop"),r.addEventListener("click",(e=>{e.target===r&&c(r)}));const l=document.createElement("div");l.classList.add("modal-content");const m=document.createElement("img");m.src=`https://image.tmdb.org/t/p/w500/${n}`,m.alt=`${t} Poster`,m.classList.add("movie-image");const u=document.createElement("h2");u.textContent=t;const p=document.createElement("button");p.classList.add("close-button"),p.addEventListener("click",(()=>c(r)));const h=document.createElement("div");h.classList.add("modal-movie-description");const v=document.createElement("p");v.innerHTML="<b>ABOUT:</b>";const y=document.createElement("p");y.textContent=s;const f=document.createElement("div");f.classList.add("movie-modal-stats");const E=document.createElement("div");E.classList.add("movie-modal-tags");const g=document.createElement("div");g.classList.add("movie-modal-results");const L=document.createElement("span");L.textContent="Rating:";const b=document.createElement("span");b.classList.add("rating"),b.textContent=a;const C=document.createElement("span");C.textContent="Popularity:";const w=document.createElement("span");w.textContent=o;const S=document.createElement("span");S.textContent="Genres:";const k=document.createElement("span");k.textContent=d.join(", "),E.appendChild(L),E.appendChild(C),E.appendChild(S),g.appendChild(b),g.appendChild(w),g.appendChild(k),f.appendChild(E),f.appendChild(g),h.appendChild(u),h.appendChild(f),h.appendChild(v),h.appendChild(y);const q=document.createElement("div");q.classList.add("modal-buttons");const M=i("ADD TO WATCHED","movie-watched-btn"),$=i("ADD TO QUEUE","movie-queue-btn");q.appendChild(M),q.appendChild($),h.appendChild(q),l.appendChild(m),l.appendChild(h),l.appendChild(p),r.appendChild(l),document.body.appendChild(r),r.style.display="flex",document.body.style.overflow="hidden",M.addEventListener("click",(()=>{!function(e){let t=JSON.parse(localStorage.getItem("watchedMovies"))||[];t.includes(e)||(t.push(e),localStorage.setItem("watchedMovies",JSON.stringify(t)))}(e)})),$.addEventListener("click",(()=>{!function(e){let t=JSON.parse(localStorage.getItem("queueMovies"))||[];t.includes(e)||(t.push(e),localStorage.setItem("queueMovies",JSON.stringify(t)))}(e)}))}function c(e){e.style.display="none",document.body.style.overflow="",e.remove()}function i(e,t){const n=document.createElement("button");return n.textContent=e,n.classList.add(t),n}window.onload=async function(){const e=document.getElementById("main-content"),t=document.createElement("div");t.classList.add("movies");const c=document.createElement("div");c.id="movie-container",t.appendChild(c),e.appendChild(t);const i=await async function(){return n("trending/movie/week")}();await async function(){return n("genre/movie/list")}(),i.results.forEach((async e=>{const t=await n(`movie/${e.id}`),i=t.vote_average,d=t.popularity,s=t.genres.map((e=>e.name)),r=t.overview,l=document.createElement("div");l.classList.add("movie-card");const m=document.createElement("img");m.src=`https://image.tmdb.org/t/p/w500/${e.poster_path}`,m.alt=`${e.title} Poster`,m.classList.add("movie-image");const u=document.createElement("div");u.classList.add("movie-description");const p=document.createElement("h2");p.textContent=e.title,p.classList.add("movie-title");const h=document.createElement("span");h.classList.add("rating"),h.textContent=` ${a(i)}`;const v=document.createElement("p");v.innerHTML=`${s.slice(0,2).join(", ")}, ${s.length>2?"Other":""} | ${e.release_date?e.release_date.substring(0,4):"N/A"} | `,v.appendChild(h),v.classList.add("movie-details"),u.appendChild(p),u.appendChild(v),l.appendChild(m),l.appendChild(u),l.addEventListener("click",(()=>o(e.id,e.title,e.poster_path,a(i),d,s,r))),c.appendChild(l)}))},document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".numbers-container"),t=document.querySelector(".left-arrow"),n=document.querySelector(".right-arrow");let a=1;function o(t,n){e.innerHTML="";for(let d=t;d<=n;d++){const t=document.createElement("div");t.classList.add("number"),t.textContent=d,d===a&&t.classList.add("active"),t.addEventListener("click",(function(){a=d,o(c(),i())})),e.appendChild(t)}}function c(){return Math.max(1,a-Math.floor(3.5))}function i(){return Math.min(20,c()+7-1)}function d(){t.style.display=1===a?"none":"block",n.style.display=20===a?"none":"block"}t.addEventListener("click",(function(){a>1&&(a--,o(c(),i()),d())})),n.addEventListener("click",(function(){a<20&&(a++,o(c(),i()),d())})),o(c(),i()),d()}));var d={libraryLink:document.querySelector(".library-btn"),homeLink:document.querySelector(".home-btn"),headerButtons:document.querySelector(".list-button"),filmsList:document.querySelector(".movies"),headerForm:document.querySelector(".search-bar"),libraryHeader:document.querySelector(".container-header")};async function s(e,t){try{const n=await fetch(e,t);if(!n.ok)throw new Error("Network response was not ok");return await n.json()}catch(e){return console.error("Error fetching data:",e),null}}async function r(e){const t=`https://api.themoviedb.org/3/${e}?api_key=004a3a7ad0ebfa9ee53f6d0ac407af43`;try{const e=await fetch(t);return await e.json()}catch(e){console.error(`Error at ${t}`,e)}}async function l(){return r("/genre/movie/list")}async function m(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=004a3a7ad0ebfa9ee53f6d0ac407af43`;return await s(t,{method:"GET",headers:{accept:"application/json"}})}async function u(e){let t;t=e?await async function(e){const t=`https://api.themoviedb.org/3/search/movie?api_key=004a3a7ad0ebfa9ee53f6d0ac407af43&query=${e}&language=en-US&include_adult=false&page=1`;return await s(t,{method:"GET",headers:{accept:"application/json"}})}(e):await async function(){return r("/trending/movie/week")}();const n=document.getElementById("movie-container");if(n.innerHTML="",0===t.results.length){const e=document.createElement("p");e.textContent="Nu s-au găsit filme pentru căutarea dată.",n.appendChild(e),document.querySelector(".movies").hidden=!0}else{document.querySelector(".movies").remove();const e=document.createElement("div");e.classList.add("movies");const n=document.createElement("div");n.id="movie-container",e.appendChild(n),document.body.appendChild(e);const a=await l();t.results.forEach((e=>{p(e,a,n)}))}}function p(e,t,n){const a=document.createElement("div");a.classList.add("movie-card");const c=document.createElement("img");c.src=`https://image.tmdb.org/t/p/w500/${e.poster_path}`,c.alt=`${e.title} Poster`,c.classList.add("movie-image");const i=document.createElement("div");i.classList.add("movie-description");const d=document.createElement("h2");let s;d.textContent=e.title,d.classList.add("movie-title"),s=e.genre_ids?e.genre_ids.map((n=>{console.log(e);const a=t.genres.find((e=>e.id===n));return a?a.name:""})):e.genres.map((e=>e.name));const r=s.slice(0,2),l=s.slice(2),m=(u=e.vote_average,Math.abs(u%1)>=.005?Math.ceil(100*u)/100:Math.floor(100*u)/100);var u;const p=document.createElement("p"),h=document.createElement("span");h.classList.add("rating"),h.textContent=` ${m}`,l.length>0?p.innerHTML=`${r.join(", ")}, Other | ${e.release_date?e.release_date.substring(0,4):"N/A"} | `:p.innerHTML=`${r.join(", ")} | ${e.release_date?e.release_date.substring(0,4):"N/A"} | `,p.appendChild(h),p.classList.add("movie-details"),i.appendChild(d),i.appendChild(p),a.appendChild(c),a.appendChild(i),n.appendChild(a),a.addEventListener("click",(()=>{o(e.id,e.title,e.poster_path,e.vote_average,e.popularity,r,e.overview)}))}function h(){!function(){let e=document.getElementById("spinner"),t=new Spinner({lines:10,length:1,width:6,radius:27,scale:1,corners:1,color:"#FFA500",opacity:.25,rotate:0,direction:1,speed:3,trail:60,fps:20,zIndex:2e9,className:"spinner",top:"51%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"}).spin(e);setTimeout((function(){t.stop()}),250)}()}document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".search-input");document.querySelector(".search-bar").addEventListener("submit",(async t=>{t.preventDefault();const n=e.value.trim();await u(n)}))})),d.homeLink.addEventListener("click",(function(){d.headerForm.classList.remove("visually-hidden"),d.headerButtons.classList.add("visually-hidden"),d.libraryHeader.classList.add("container-header"),d.libraryHeader.classList.remove("library-header")})),e.addEventListener("click",(()=>{!function(e){let t=JSON.parse(localStorage.getItem("watchedMovies"))||[];t.includes(e)||(t.push(e),localStorage.setItem("watchedMovies",JSON.stringify(t)))}((void 0).dataset.movieId)})),t.addEventListener("click",(function(){!function(e){let t=JSON.parse(localStorage.getItem("queueMovies"))||[];t.includes(e)||(t.push(e),localStorage.setItem("queueMovies",JSON.stringify(t)))}(this.dataset.movieId)})),d.libraryLink.addEventListener("click",(function(){d.headerForm.classList.add("visually-hidden"),d.headerButtons.classList.remove("visually-hidden"),d.libraryHeader.classList.remove("container-header"),d.libraryHeader.classList.add("library-header")})),document.addEventListener("click",(function(e){if("library-btn"===e.target.id){t();document.getElementById("main-content").innerHTML="";const a=document.querySelector(".js-button-library-queue"),o=document.querySelector(".js-button-library-watched"),c=document.querySelector(".js-button-library-clear");async function t(){let e=JSON.parse(localStorage.getItem("watchedMovies"))||[];const t=[];for(const n of e){const e=await m(n);t.push(e)}n(t)}async function n(e){document.getElementById("movie-container").innerHTML="",document.querySelector(".movies")&&document.querySelector(".movies").remove();const t=document.createElement("div");t.classList.add("movies");const n=document.createElement("div");n.id="movie-container",t.appendChild(n),document.body.appendChild(t);const a=await l();e.forEach((e=>{p(e,a,n)}))}a.addEventListener("click",(async function(){let e=JSON.parse(localStorage.getItem("queueMovies"))||[];const t=[];for(const n of e){const e=await m(n);t.push(e)}n(t)})),o.addEventListener("click",t),c.addEventListener("click",(function(){localStorage.clear(),location.reload()}))}})),document.addEventListener("keydown",(function(e){"Enter"===e.key&&h()})),window.addEventListener("load",h),window.addEventListener("beforeunload",h),document.querySelector(".search-button").addEventListener("click",(function(){h()})),document.querySelector(".numbers-container").addEventListener("click",(function(e){e.target.classList.contains("number")&&h()}));document.getElementById("checkbox").addEventListener("change",(()=>{document.body.classList.toggle("dark")}));
//# sourceMappingURL=index.0af3afc3.js.map