(window.blocksyJsonP=window.blocksyJsonP||[]).push([[8],{29:function(e,t,n){"use strict";n.r(t),n.d(t,"mountMenuLevel",(function(){return l})),n.d(t,"handleUpdate",(function(){return u}));const i=()=>"rtl"===document.querySelector("html").dir,s=e=>e.classList.contains("animated-submenu")&&(!e.parentNode.classList.contains("menu")||-1===e.className.indexOf("ct-mega-menu")&&e.parentNode.classList.contains("menu"));const r=(e,t)=>{let{startPosition:n="end"}=t;const s=e.querySelector(".sub-menu"),r=(e=>{const t=function(e,t){for(var n=[];e.parentNode;)e.parentNode&&e.parentNode.matches&&e.parentNode.matches(t)&&n.push(e.parentNode),e=e.parentNode;return n[n.length-1]}(e,"li.menu-item");return t&&t.querySelector(".sub-menu .sub-menu .sub-menu")?t.getBoundingClientRect().left>innerWidth/2?"left":"right":i()?"left":"right"})(s),{left:c,width:a,right:l}=s.getBoundingClientRect();let o=r,u=e.getBoundingClientRect();if("left"===r){("end"===n?u.left:u.right)-a<0&&(o="right")}if("right"===r){("end"===n?u.right:u.left)+a>innerWidth&&(o="left")}e.dataset.submenu=o,e.addEventListener("click",()=>{})},c=e=>{const t=e.target.closest("li");t.classList.add("ct-active"),t.firstElementChild.querySelector(".child-indicator").setAttribute("aria-expanded","true")},a=e=>{const t=e.target.closest("li");t.classList.remove("ct-active"),t.firstElementChild.querySelector(".child-indicator").setAttribute("aria-expanded","false")},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};[...e.children].filter(e=>e.matches(".menu-item-has-children, .page_item_has_children")).map(e=>{if(e.classList.contains("ct-mega-menu-custom-width")){const t=e.querySelector(".sub-menu"),n=e.getBoundingClientRect(),i=t.getBoundingClientRect();n.left+n.width/2+i.width/2>innerWidth&&(e.dataset.submenu="left"),n.left+n.width/2-i.width/2<0&&(e.dataset.submenu="right")}s(e)&&r(e,t);let n=e.firstElementChild.querySelector(".child-indicator");n&&!n.hasEventListener&&(n.hasEventListener=!0,n.addEventListener("keyup",e=>{13===e.keyCode&&(e.target.closest("li").classList.contains("ct-active")?a(e):(c(e),e.target.closest("li").addEventListener("focusout",t=>{e.target.closest("li").contains(t.relatedTarget)||a(e)})))}))})},o=e=>{let{target:t}=e;if(t.matches(".menu-item-has-children, .page_item_has_children")||(t=t.closest(".menu-item-has-children, .page_item_has_children")),t.parentNode.classList.contains("menu")&&t.className.indexOf("ct-mega-menu")>-1&&-1===t.className.indexOf("ct-mega-menu-custom-width")&&wp&&wp.customize&&wp.customize("active_theme")){t.querySelector(".sub-menu").style.left=Math.round(t.closest('[class*="ct-container"]').firstElementChild.getBoundingClientRect().x)-Math.round(t.closest("nav").getBoundingClientRect().x)+"px"}if(!s(t))return;const n=t.querySelector(".sub-menu");l(n),n._timeout_id&&clearTimeout(n._timeout_id),n.parentNode.addEventListener("mouseleave",()=>{n._timeout_id=setTimeout(()=>{n._timeout_id=null,[...n.children].filter(e=>s(e)).map(e=>e.removeAttribute("data-submenu"))},200)},{once:!0})},u=e=>{e.parentNode||(e=document.querySelector(`[class="${e.className}"]`)),e&&(e.querySelector(".menu-item-has-children")||e.querySelector(".page_item_has_children"))&&(e.removeEventListener("mouseenter",o),e.addEventListener("mouseenter",o),e.removeEventListener("focusin",o),e.addEventListener("focusin",o))}}}]);