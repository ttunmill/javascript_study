const nav = document.querySelectorAll("nav a")
const bg = document.querySelectorAll("main img")

nav.forEach((i, j) => {
    console.log(i, j)
    i.addEventListener("click", (/* e */) => {
        window.scrollTo(0, bg[j].offsetTop)
        //e.preventDefault() //a의 고유 이벤트 막기
    })
/*     i.addEventListener("mouseover", () => {
        i.innerText = `interior${j + 1}`
    })
    i.addEventListener("mouseout", () => {
        i.innerText = ``
    }) */
})
nav.forEach((i, j) => {
    i.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo(0, bg[j].offsetTop)
    })
})
// a태그에 javascript event 적용 시 주의사항
// a태그는 고유의 href 속성으로 특정 주소로 이동한다는 특징이 있어서 js click 이벤트연결을 하려고 하면 click처리를 먼저 해야하는지? href속성 처리를 먼저 해야하는지? 구분을 못해서 스크롤이 위로 올라가는 문제가 생긴다.
//a태그에 js click 이벤트를 줄때 href속성의 기능을 막아야 정상 작동한다.