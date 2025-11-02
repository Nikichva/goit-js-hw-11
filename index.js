/* empty css                      */import{S as m,i as n}from"./assets/vendor-CePATv9e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),i=document.querySelector(".gallery"),p=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});l.addEventListener("submit",c=>{c.preventDefault(),i.innerHTML='<span class="loader"></span>';const a=l.elements.searchInput.value.trim();if(a.length===0)return i.innerHTML="",n.error({message:"Empty field"});fetch(`https://pixabay.com/api/?key=14990931-ad4ebe1f82b0ac4449d9d4609&q=${a}&image_type=photo&orientation=horizontal&safesearch=false`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(({hits:r})=>{if(r.length===0)return i.innerHTML="",n.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",r.forEach(({webformatURL:o,largeImageURL:e,tags:t,likes:s,views:d,comments:u,downloads:f})=>{i.innerHTML+=`
            <li class="gallery-item">
        <a class="gallery-link" href="${e}">
            <img
            class="gallery-image"
            src="${o}"
            alt="${t}"
            />
            <div class="img-data">
        <div class="data-values">Likes <p>${s}</p></div>
        <div class="data-values">Views <p>${d}</p></div>
        <div class="data-values">Comments <p>${u}</p></div>
        <div class="data-values">Downloads <p>${f}</p></div>
        </div>
        </a>
        </li>
    `}),p.refresh()}).catch(r=>{n.error({message:`Request failed: ${r.message}`})}).finally(()=>l.reset())});
//# sourceMappingURL=index.js.map
