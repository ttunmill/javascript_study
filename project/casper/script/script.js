const sub = document.querySelectorAll(".sub")
const sub_bg = document.querySelector(".sub_bg")
const nav = document.querySelector("nav")
const nav_clone = nav.cloneNode(true) //nav복제 변수
const m_nav = document.querySelector(".m_nav")
const m_gnb_li = nav_clone.querySelectorAll(" .gnb > li")
const m_gnb_sub = nav_clone.querySelectorAll(" .gnb > li > .sub")
const all_m_nav = m_nav.querySelector(".all_nav")
//console.log(sub, sub_bg, nav, nav_clone, m_nav, m_gnb_li, m_gnb_sub) //복제대상 붙여넣기 부모
console.log(m_gnb_li, m_gnb_sub) //복제대상 붙여넣기 부모

//모든 서브, 서브배경 숨기기
// for(var i of sub) {i.style.display = "none"}
// sub_bg.style.display = "none"

//m_nav 모바일 전용 메뉴의 기존 네비게이션 태그 마지막 자식 복붙
m_nav.appendChild(nav_clone)


nav_clone.style.transform = "translateX(100%)"
let flag = false;
all_m_nav.addEventListener("click", () => {
    flag = !flag;
    if(flag == true) {
        nav_clone.style.right = "60%"
        // console.log(flag)
    } else {
        nav_clone.style.right = "0"
        for(var i of m_gnb_sub) {i.style.display = "none"}
        // console.log(flag)
    }
})

nav_clone.style.transition = "all 0.3s"
for(var i of m_gnb_sub) {i.style.display = "none"}
m_gnb_li.forEach(function(index, number) {
    m_gnb_li[number].addEventListener("click", () => {
        for(var i of m_gnb_sub) {i.style.display = "none"}
        m_gnb_sub[number].style.display = "block"
    })
})

//메뉴에 마우스 올리면 서브 메뉴 나타나기(높이 길어지는 효과)
//height + transition + overflow
//1. 숨기는 처리를 display가 아닌 height 값으로 재설정 = 0
sub_bg.style.height = "0";
sub_bg.style.transition = "all 0.3s"
for(var i of sub) {i.style.transition = "all 0.3s";}
for(var i of sub) {
    i.style.height = "0"; 
    i.style.overflow = "hidden";
}
//2. 메뉴 마우스 올리면 서브, 서브배경 보이기
nav.addEventListener("mouseover", () => {
    for(var i of sub) {i.style.height = "240px";}
    sub_bg.style.height = "240px";
})
nav.addEventListener("mouseout", () => {
    for(var i of sub) {i.style.height = "0";}
    sub_bg.style.height = "0"
})

