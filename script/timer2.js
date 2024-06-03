const slide = document.querySelectorAll(".slide")
//slider 모든 대상 opacity 0
//slider 모든 대상 transition:opacity 0.3s
//slider 첫번째 opacity:1
let slide_timer = setInterval(slide_func, 3000);
let slide_num = 0;

//슬라이드 공통 적용 재사용 함수
let slide_style = (properti, val) => {
    for(var i of slide) {i.style[properti] = val}
}
/* let slide_style1 = () => {
    for(var i of slide) {i.style.opacity = 0}
}
let slide_style2 = () => {
    for(var i of slide) {i.style.transition = `opacity 0.3s`}
} */
/* slide_style1()
slide_style2() */
//슬라이드 진행 타이머 함수
slide_style("opacity", 0) //모두 숨기기
slide_style("transition", "0.3s") //모든 동적기능
slide[0].style.opacity = 1 //(초기) 첫번째 슬라이드 보이기
function slide_func() {
    slide_num++
    if(slide_num >= slide.length) {
        slide_num = 0
        slide_style("opacity", 0)
    }
    slide[slide_num].style.opacity = 1;
}