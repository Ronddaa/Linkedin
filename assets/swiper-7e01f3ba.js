import{S as c}from"./vendor-527b82d5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();new c(".swiper-container",{direction:"horizontal",loop:!1,slidesPerView:2,slidesPerGroup:2,grabCursor:!0,mousewheel:{sensitivity:1,eventTarget:".swiper-slider"},autoHeight:!0,spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0}});function l(){const i=window.innerWidth,r=document.getElementById("addSwiperContainer"),n=document.getElementById("addSwiperWrapper"),s=document.getElementById("addSwiperSlide");i>=768&&i<=1158?(d(r,"swiper-container"),d(n,"swiper-wrapper"),d(s,"swiper-slide")):(a(r,"swiper-container"),a(n,"swiper-wrapper"),a(s,"swiper-slide"))}function d(i,r){i&&!i.classList.contains(r)&&i.classList.add(r)}function a(i,r){i&&i.classList.contains(r)&&i.classList.remove(r)}window.addEventListener("load",l);window.addEventListener("resize",l);
//# sourceMappingURL=swiper-7e01f3ba.js.map
