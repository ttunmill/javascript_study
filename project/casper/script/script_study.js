//m_nav 출력
//=============모바일 nav js
//m_nav 상단 변수 존재함
//1. 모바일전체메뉴 아이콘(m_nav > all_nav) 클릭시
//1-1. 모바일 네비(m_nav > nav)가 보이는 상태라면 -> 숨기기
//1-2. 모바일 네비가 숨겨진 상태라면 -> 보이기
// const all_m_nav = m_nav.querySelector(".all_nav")
const nav_m = m_nav.querySelector("nav")
const all_m_nav = m_nav.querySelector(".all_nav")
let boolean = false; //안보이는 상태(기본)
console.log(all_m_nav, nav_m)
//2. 모바일 서브 메뉴 모두 숨기기(기본)
//3. 모바일 주 메뉴 클릭 시
//3-1. 모든 서브 메뉴 숨기기
//3-2. 해당 주 메뉴의 서브 메뉴 보이기
const sub_m = nav_m.querySelectorAll(".sub")
const gnb_li_m = nav_m.querySelectorAll(".gnb > li")
console.log(sub_m)
for(let i of sub_m) {i.style.display = "none"}
for(let i of gnb_li_m) {
    i.addEventListener("click", () => {
        for(let i of sub_m) {i.style.display = "none"}
        i.children[1].style.display = "block"
    })
}
nav_m.classList.add("m_nav_hide") //숨긴값 클래스적용
all_m_nav.addEventListener("click", (e) => {
    e.preventDefault(); //a href 막기
    //=========클래스(classList.toggle)
    nav_m.classList.toggle("m_nav_hide")

    //=========조건문(if)
    //조건문(if) or 클래스(classList.toggle)
    boolean = !boolean;
/*     if(boolean == true) {
        nav_m.style.display = "block"
    } else {
        nav_m.style.display = "none"
    } */
    //삼항조건연산자 조건 ? 참 : 거짓결과;
    // boolean == true ? nav_m.style.display = "block" : nav_m.style.display = "none"
    // nav_m.style.display = boolan ? "block" : "none";
})