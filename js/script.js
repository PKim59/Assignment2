const darkbutton = document.querySelector("#darkbutton")

function themeswap() {
    document.querySelector("aside").classList.toggle("darktheme2");
    document.querySelector("main").classList.toggle("darktheme")
    if (document.querySelector("main").classList.contains("darktheme")) {
        darkbutton.textContent = "Light Mode"
    }
}   

darkbutton.addEventListener("click", themeswap)

