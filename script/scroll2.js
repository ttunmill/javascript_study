const bg = document.querySelectorAll(".bg")
const btn = document.querySelectorAll(".btn")
const color = ["red","orange","yellow","green"]
console.log(bg, btn)
//스크롤 움직일 때 인식하는 이벤트
window.addEventListener("scroll", function() {
    /* console.log(window.pageYOffset)
    btn[0].innerText = window.pageYOffset; */

    //연습1. pageY 좌표가 200 이상일 때 1번버튼 배경색 노랑
    //연습2. pageY 좌표가 600 이상일 때 2번버튼 배경색 파랑
    /* if(this.window.pageYOffset >= 200) {
        btn[0].style.backgroundColor = "yellow"
    }
    if(this.window.pageYOffset >= 600) {
        btn[1].style.backgroundColor = "blue"
    } */
    //특정 DOM 위치 자동 인식하기
    if(bg[0].getBoundingClientRect().y <= 400) {
        btn[0].style.backgroundColor = color[0]
    }
    if(bg[1].getBoundingClientRect().y <= 400) {
        btn[1].style.backgroundColor = color[1]
    }
    if(bg[2].getBoundingClientRect().y <= 400) {
        btn[2].style.backgroundColor = color[2]
    }
    if(bg[3].getBoundingClientRect().y <= 400) {
        btn[3].style.backgroundColor = color[3]
    }
})