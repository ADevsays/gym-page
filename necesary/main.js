const movilMenu = document.querySelector(".container-m-m");
const activeMovilMenu = document.querySelector(".active-m-m");

const mostrarMenuMovil=(value)=>{
    if(value){
        movilMenu.style.transform = "translateX(0)";
        activeMovilMenu.addEventListener("click", ()=>{
            mostrarMenuMovil(false);
        })
    }else{
        movilMenu.style.transform = "translateX(1000px)";
        activeMovilMenu.addEventListener("click", ()=>{
            mostrarMenuMovil(true);
        })
    }
}
activeMovilMenu.addEventListener("click", ()=>{
    mostrarMenuMovil(true);
})