/* se hará un toggle class a la clase .nav agregandole un "active". Al hacerle click al boton*/
const buttom = document.querySelector(".menu_buttom")
const nav = document.querySelector(".nav")

buttom.addEventListener("click", ()=>{
    nav.classList.toggle("active")
})