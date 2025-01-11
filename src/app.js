const slider = document.querySelector(".slider")
const sliderInner = document.querySelectorAll(".slider-inner");

let operacion = 0;
let contador = 0;
let anchoImg = 100 / sliderInner.length;

setInterval(() => {
    moverDiv()
}, 3000);

function moverDiv() {
    if (contador >= sliderInner.length-1){
        contador = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    contador++;
    operacion = operacion + anchoImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}


