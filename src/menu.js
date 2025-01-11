const barNav = document.querySelector("#id-nav");
const bAbrir = document.querySelector("#abrir");
const bCerrar = document.querySelector("#cerrar");
const barNav1 = document.querySelector("#id-nav1");
const bAbrir1 = document.querySelector("#abrir1");
const bCerrar1 = document.querySelector("#cerrar1");


bAbrir.addEventListener("click", ()=>{
    barNav.classList.add("visible");
});
bCerrar.addEventListener("click", ()=>{
    barNav.classList.remove("visible");
})

bAbrir1.addEventListener("click", ()=>{
    barNav1.classList.add("visible");
    bAbrir1.classList.add("novisible");
});
bCerrar1.addEventListener("click", ()=>{
    barNav1.classList.remove("visible");
    bAbrir1.classList.remove("novisible");
})