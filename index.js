const menuOpen = document.querySelector(".menu-open-button")
const menuClose = document.querySelector(".menu-close-button")
const menu = document.querySelector(".menu")

menuOpen.addEventListener("click",function(){
    const list = Object.values(menu.classList)
    const removeAriaHidden = () => menu.removeAttribute("aria-hidden")

    if(list.includes("slide-out")){
        menu.classList.remove("slide-out")
        removeAriaHidden()
        menu.classList.add("slide-in")
    } else {
        removeAriaHidden()
        menu.classList.add("slide-in")
    }
})


menuClose.addEventListener("click", function(){
    const list = Object.values(menu.classList)
    const addAriaHidden = () => menu.setAttribute("aria-hidden","true")

    if(list.includes("slide-in")){
        menu.classList.remove("slide-in")
        addAriaHidden()
        menu.classList.add("slide-out")
    } else {
        addAriaHidden()
        menu.classList.add("slide-out")
    }
})