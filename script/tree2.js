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
    header.children[1].children[0].innerHTML = "MENU"
    header.children[1].children[1].innerHTML = "MENU"
    header.children[1].children[2].innerHTML = "MENU"
    header.children[1].children[3].innerHTML = "MENU"
})
header.addEventListener("mouseout", function() {
    header.children[1].children[0].innerHTML = "메뉴"
    header.children[1].children[1].innerHTML = "메뉴"
    header.children[1].children[2].innerHTML = "메뉴"
    header.children[1].children[3].innerHTML = "메뉴"
})