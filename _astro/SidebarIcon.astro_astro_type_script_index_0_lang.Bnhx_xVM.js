let n=document.getElementById("menu-icon"),s=document.getElementById("menu-icon-close"),i=document.getElementById("mobile-menu"),e=document.getElementById("aside-btn"),c=document.getElementById("aside-close-btn"),g=document.getElementById("personal-info");n.addEventListener("click",()=>{e&&e.classList.contains("hidden")&&(e.classList.toggle("hidden"),c.classList.toggle("hidden"),g.classList.toggle("hidden")),n.classList.toggle("hidden"),s.classList.toggle("hidden"),i.classList.toggle("hidden")});s.addEventListener("click",()=>{s.classList.toggle("hidden"),i.classList.toggle("hidden"),n.classList.toggle("hidden")});let d=document.getElementById("aside-btn"),l=document.getElementById("aside-close-btn"),t=document.getElementById("menu-icon"),m=document.getElementById("menu-icon-close"),a=document.getElementById("mobile-menu"),o=document.getElementById("personal-info");d.addEventListener("click",()=>{t&&t.classList.contains("hidden")&&(t.classList.toggle("hidden"),m.classList.toggle("hidden"),a.classList.toggle("hidden")),d.classList.toggle("hidden"),l.classList.toggle("hidden"),o.classList.toggle("hidden")});l.addEventListener("click",()=>{l.classList.toggle("hidden"),o.classList.toggle("hidden"),d.classList.toggle("hidden")});
