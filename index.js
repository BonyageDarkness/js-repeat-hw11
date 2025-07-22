import{a,S as c,i as u}from"./assets/vendor-DRgUjrIE.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function d(o){return a.get(`https://pixabay.com/api/?key=44822574-4b43621c9303530917b2f490d&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>s.data)}const f=new c(".gallery a");function g(){document.getElementById("loader").classList.remove("is-visible")}function m(o){const n=document.querySelector(".gallery"),s=o.map(e=>`
    <li class="gallery-item" style="list-style-type: none;">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"
            style="width: 360px; height: 200px; flex-shrink: 0; font-size: 0;" />
      </a>
      <div class="description">
      <p class="likes"><strong>Likes</strong>${e.likes}</p>
      <p class="views"><strong>Views</strong>${e.views}</p>
      <p class="comments"><strong>Comments</strong>${e.comments}</p>
      <p class="downloads"><strong>Downloads</strong>${e.downloads}</p>
      </div>

    </li>
  `).join("");n.innerHTML=s,f.refresh(),g()}const l=document.querySelector(".form");l.addEventListener("submit",p);function p(o){o.preventDefault();const s=o.currentTarget.elements["search-text"].value.toLowerCase();d(s).then(e=>e.hits.length===0?u.error({message:`Sorry, there are no images matching your ${s}. Please try again!`}):m(e.hits)).catch(e=>console.log("error catch",e)),l.reset()}
//# sourceMappingURL=index.js.map
