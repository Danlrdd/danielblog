/* se hará un toggle class a la clase .nav agregandole un "active". Al hacerle click al boton*/
const button = document.querySelector(".menu_buttom")
const nav = document.querySelector(".nav")

// button.addEventListener("click", ()=>{
//     nav.classList.toggle("active")
// })

button.addEventListener("click", toggleNavSectionMobile);

function toggleNavSectionMobile(){
    // const isNavSectionMobileClosed = nav.classList.contains("active");
    nav.classList.toggle("active")
}