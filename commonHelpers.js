import{S as c}from"./assets/vendor-527b82d5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new c(".swiper-container",{direction:"horizontal",loop:!1,slidesPerView:2,slidesPerGroup:2,grabCursor:!0,mousewheel:{sensitivity:1,eventTarget:".swiper-slider"},autoHeight:!0,spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0}});function a(){const i=window.innerWidth,r=document.getElementById("addSwiperContainer"),s=document.getElementById("addSwiperWrapper"),n=document.getElementById("addSwiperSlide");i>=768&&i<=1158?(d(r,"swiper-container"),d(s,"swiper-wrapper"),d(n,"swiper-slide")):(l(r,"swiper-container"),l(s,"swiper-wrapper"),l(n,"swiper-slide"))}function d(i,r){i&&!i.classList.contains(r)&&i.classList.add(r)}function l(i,r){i&&i.classList.contains(r)&&i.classList.remove(r)}window.addEventListener("load",a);window.addEventListener("resize",a);
//# sourceMappingURL=commonHelpers.js.map
