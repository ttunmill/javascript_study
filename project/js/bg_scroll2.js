const nav = document.querySelectorAll("nav a")
const img = document.querySelectorAll(".container img")
const stick = document.querySelectorAll(".stick div")

nav.forEach((i, j) => {
    i.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo(0, img[j].offsetTop)
    })
    window.addEventListener("scroll", function() {
        if(img[j].getBoundingClientRect().y <= 400) {
            for(var i of stick) {i.style.width = "20px"}
            for(var i of stick) {i.style.backgroundColor = "#fff"}
            stick[j].style.width = "100px"
            stick[j].style.backgroundColor = "#aaa"
        } else {
            stick[j].style.width = "20px"
        }
    })
})
// 마우스 따라다니는 이벤트
const circle = document.querySelector(".mouse")
console.log(circle)
window.addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY)
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;

})
//window mousemove 좌표 인식하는 매개변수 종류
/* 
1. screenX, Y : 사용자 모니터 화면 기준으로 좌표 표시
2. clientX, Y : 웹브라우저의 뷰포트 크기 기준으로 좌표 표시
3. offsetX, Y : 객체(노드) 위치 기준으로 좌표 표시
4. pageX, Y : 전체 세로 길이 포함 문서 기준으로 좌표 표시
*/