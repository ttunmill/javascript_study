// h1 마우스를 올리면
// "네이버" -> "NAVER" 내용 변경
const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.innerText);
//h1.innerText = "NAVER";
h1.addEventListener("mouseover", function() {
    h1.innerText = 'NAVER'
})
h1.addEventListener("mouseout", function() {
    h1.innerText = '네이버'
})
//header에 마우스를 올리면
//자식 nav-a 내용 "메뉴" -> "MENU"
const header = document.querySelector("header");
console.log(header.childElementCount) //자식 개수 //2
console.log(header.children[1].childElementCount) //4
console.log(header.children.length); //2
//const menu = document.querySelectorAll("nav a");
// header.addEventListener("mouseover", function() {
//     menu[0].innerText = "MENU";
//     menu[1].innerText = "MENU";
//     menu[2].innerText = "MENU";
//     menu[3].innerText = "MENU";
// })
// header.addEventListener("mouseout", function() {
//     menu[0].innerText = "메뉴";
//     menu[1].innerText = "메뉴";
//     menu[2].innerText = "메뉴";
//     menu[3].innerText = "메뉴";
// })
header.addEventListener("mouseover", function() {
    header.children[1].children[0].innerHTML = "MENU1"
    header.children[1].children[1].innerHTML = "MENU2"
    header.children[1].children[2].innerHTML = "MENU3"
    header.children[1].children[3].innerHTML = "MENU4"
})
header.addEventListener("mouseout", function() {
    header.children[1].children[0].innerHTML = "메뉴1"
    header.children[1].children[1].innerHTML = "메뉴2"
    header.children[1].children[2].innerHTML = "메뉴3"
    header.children[1].children[3].innerHTML = "메뉴4"
})
// --------------------------------
// childNode[n], children[n] == 부모 자식:nth-child(n)
// firstChild(공백o), firstElementChild(공백x) == first-child, last-child
const nav = document.querySelector("nav")
console.log(nav)
console.log(nav.firstChild) // 공백 #text
console.log(nav.firstElementChild) // 메뉴1
console.log(nav.firstElementChild.innerHTML)
console.log(nav.firstElementChild.innerText)
console.log(nav.lastElementChild) // 메뉴4
console.log(nav.lastElementChild.innerHTML)
console.log(nav.lastElementChild.innerText)
// 형제 관계 (+) 인접 관계
// JS 이전, 다음 형제 모두 처리 가능
// nextSibling 공백포함 다음 형제
// nextElementSibling 다음 형제 요소만 인식
// previousSibling 공백포함 이전 형제
// previousElementSibling 이전 형제 요소만 인식
const nav_a = document.querySelectorAll("nav a")
console.log(nav_a)
// Q. 메뉴2의 이전형제 메뉴1을 선택해서 배경색 노랑 변경
nav_a[1].previousElementSibling.style.background = "yellow";
nav_a[1].nextElementSibling.style.background = "crimson"
nav_a[1].nextElementSibling.nextElementSibling.style.background = "aqua";