//반복문
/* 
반복문키워드 (반복초기값; 반복조건식; 증감식) {반복실행결과}
반복초기값 = 조건, 증감에 사용할 변수생성과 초기값 설정 
초기값변수에 주로 사용하는 변수명 = i, j, k, m, n
for (let i = 1; i < 6; i++)  {i가 5번 반복될때마다 실행결과}
*/
for(let i =1; i<6; i++) {
    console.log("반복" + i)
}
console.log("반복종료")
console.log("------------------------------------")
//0~10 반복문
for(var i=0; i<11; i++) {
    console.log("자바스크립트" + i);
}
//7~1 반복문
for(var i=7; i>=1; i--) {
    console.log("반복문" + i);
}

//배열과 반복문
const study = ['html', 'css', 'js', 'figma', 'design', 'photoshop', 'illustrator']
console.log(study)
for (var i=0; i<study.length; i++) {
    console.log(study[i])
}

//배열연습문제 1.
//아메리카노, 카페라떼, 에스프레소, 돌체라떼 배열생성
//1번 메뉴 아메리카노 ~ 4번 메뉴 돌체라떼 콘솔 출력
const cafe = ["아메리카노", "카페라떼", "에스프레소", "돌체라떼"]
for(var i=0; i<cafe.length; i++) {
    console.log(`${[i+1]}번메뉴 ${cafe[i]}`)
}
//반복문과 배열연습문제 2.
//사과, 망고, 오렌지, 딸기, 귤, 복숭아, 수박 배열저장
//수박->사과 역순 출력하는 반복문
const fruit = ["사과", "망고", "오렌지", "딸기", "귤", "복숭아", "수박"]
for(var i=fruit.length-1; i>0; i--) {
    console.log(fruit[i])
}
console.log("--------------------------")
fruit.reverse();
for(var i=0; i<fruit.length; i++) {
    console.log(fruit[i])
}
//반복문과 배열연습문제 3.
//사과 1000원, 망고 2000원, 수박 10000원
const mart = [
    {
        name : "사과",
        price : 1000
    },
    {
        name : "망고",
        price : 2000
    },
    {
        name : "수박",
        price : 10000
    }
]
//출력예시) 사과 : 1000원 ~ 수박 : 10000원
for(var i=0; i<mart.length; i++) {
    console.log(`${mart[i].name} : ${mart[i].price}원`)
}
//반복문 + 조건문 활용
//for반복문 + if조건문 활용
//for() {if() {}}
//if() {for() {}}
//1~20 출력 홀수
for(var i=1; i<=20; i++) {
    // console.log(i)
}
for(var i=1; i<=20; i++) {
    if(i%2 == 1) {
        console.log(i)
    }
}
console.log("--------------------------")
//5~25까지 숫자 중 짝수만 출력
//반복문 무한로딩
//ctrl + alt + delete 인터넷브라우저 강제종료
for(var i=5; i<=25; i++) {
    if(i%2 == 0) {
        console.log(i)
    }
}

console.log("--------------------------")
//10~20까지 역순으로 홀수만 출력
for(var i=20; i>=10; i--) {
    if(i%2 == 1) {
        console.log(i)
    }
}
console.log("--------------------------")
//DOM과 반복문
const main = document.querySelector("main")
console.log(main)
//ul - li*4
let tag1 = "<ul>"
for(var i=0; i<4; i++) {
    console.log(i)//0123
    tag1 += `<li class="list">${i}</li>`
}
tag1 += "</ul>"
main.innerHTML = tag1;
main.classList.add("list")
console.log("--------------------------")
const table = document.querySelector("table")
console.log(table)
//table 안 1행(tr) 3열(td)태그 삽입
let tag2 = "<tr>"
for(var i=0; i<3; i++) {
    tag2 += `<td>${i}</td>`
}
tag2 += "</tr>"
table.innerHTML = tag2;
//이미 존재하는 HTML대상에 속성 반복 추가
const nav_a = document.querySelectorAll("nav a")
console.log(nav_a)
//특정 조건 발동 시 design1 클래스 적용
/* for(let i=0; i<nav_a.length; i++) {
    nav_a[i].classList.add('design1')
} */
//반복문을 사용하지 않았다면?
//nav_a[0].classList.add("design1")
//nav_a[1].classList.add("design1")
//nav_a[2].classList.add("design1")
//nav_a[3].classList.add("design1")
for(let i=0; i<nav_a.length; i++) {
    if(i%2 == 0) {
        nav_a[i].classList.add('design1')
    } else {
        nav_a[i].classList.add('design2')
    }
}