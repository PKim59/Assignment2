const darkbutton = document.querySelector("#darkbutton")

function themeswap() {
    document.querySelector("aside").classList.toggle("darktheme2");
    document.querySelector("main").classList.toggle("darktheme")
}   

darkbutton.addEventListener("click", themeswap)

