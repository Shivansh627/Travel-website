function tt() {

    let mobile = document.querySelector("nav")
    let mn = document.querySelector(".mob:first-child")
    let m = document.querySelector(".mob:last-child")
    let n = document.querySelector(".mob:nth-child(2)")


    mn.classList.toggle("fi")
    n.classList.toggle("fo")
    m.classList.toggle("do")
    mobile.classList.toggle("open")
}
