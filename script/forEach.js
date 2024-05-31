const nav_a = document.querySelectorAll("nav > a")
console.log(nav_a)
console.log("-----------------------------")
//(위 콘솔 해석)
//Nodelist 구조로 0~4 인덱스 정보로 변수 정보 출력
//배열로 구성된 확인정보로 실제 디자인 및 동적기능등을
//적용할 때는 인덱스 및 반복문 등으로 개별 접근을 해야한다.
console.log(nav_a[0])
console.log("-----------------------------")
//(위) [index]를 사용함으로써 개별접근을 해서 다양한 기능 수행이 가능하지만 개수가 많을 때 반복입력을 해야 해서 비효율적이다. 이 문제를 해결하는게 "반복문" 이다
//초기값은 DOM index 시작 값 0
//조건식 DOM 개수 입력 또는 length활용 ex) DOM.length
//i는 초기값 0으로 시작해서 nav_a의 실제 개수 4보다 작을 때 까지 반복문 결과를 실행시키면서 증감해라
for(let i=0; i<4; i++) {
    console.log(nav_a[i])
}
console.log("-----------------------------")
//for~in (ES6)
//for~in 뒤로 2개 이상의 배열값을 가지고 있는 객체를 삽입하면 그 대상이 자동으로 let i 로 생성한 반복변수에 모두 대입되서 반복처리된다.
//let a = [1,2,3,4] // for~in => 0 1 2 3
//let a = document... // for~in => 0 1 2 3 ..고유속성
for(let i in nav_a) {console.log(i)}
console.log("-----------------------------")
//for~of (ES6)
//인덱스 번호가 아닌 객체 정보 반복 출력
for(let i of nav_a) {console.log(i)}
console.log("-----------------------------")
//forEach() (ES6)
/* 
- forEach는 index, object, array 정보에 모두 접근가능하다.
- 객체, 인덱스, 배열 매개변수는 의미있는 이름으로 자유설정가능
- 실행함수는 일반함수와 화살표함수 모두 가능하다.
객체.forEach(실행함수(객체, 인덱스, 배열){반복실행결과})
*/
/* nav_a.forEach(function(obj, ind, arr) {
    console.log(obj)
    console.log(ind)
    console.log(arr)
    console.log("-----------------------------")
}) */
//가족관계 속성으로 연결하기 어려운 2개 이상의 객체를 잡을 때 forEach의 인덱스, 객체 접근 방법을 이용한다.
const snb = document.querySelectorAll(".snb li a")
console.log(snb)
nav_a.forEach((target, index)=>{
    console.log(target, index)
    //nav_a 마우스를 올렸을 때 이벤트
    //객체.addEventListener
    target.addEventListener("mouseover", () => {
        //전체 초기화
        for(var i of snb) {i.style.backgroundColor = "unset"}
        //console.log(target, index)
        //snb 작성하면 4개 DOM을 모두 인식한다
        //nav_a와 snb의 일치포인트를 찾아야한다 (index)
        snb[index].style.backgroundColor = "green"
    })
    target.addEventListener("mouseout", () => {
        snb[index].style.backgroundColor = "unset"
    })
})
console.log("-----------------------------")
const gnb = document.querySelectorAll(".gnb > li")
const sub = document.querySelectorAll(".sub")
console.log(gnb, sub)

//sub 모두 숨기기
/* for(var i=0; i<sub.length; i++) {
    sub[i].style.display = 'none'
} */
let subHide = () => {for(var i of sub) {i.style.display = 'none'}}
subHide()
//forEach 활용 gnb 마우스 올렸을 때 각각의 sub 출력
gnb.forEach((obj, ind)=> {
    obj.addEventListener("mouseover", () => {
        subHide()
        sub[ind].style.display = "block"
    })
    obj.addEventListener("mouseout", () => {subHide()})
})