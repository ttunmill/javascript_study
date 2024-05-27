//함수
//매개변수, 화살표 함수(ES6)
function func1(num1, num2) {
    console.log(num1 + num2)
}
func1(1, 2)
//ES6 화살표함수
// 화살표함수는 function 키워드가 생략되므로 function 뒤에 작성하는 함수이름도 쓸 수 없기 때문에 익명함수라고 부른다. 대신 함수는 함수이름으로 호출하지 않으면 사용할 수 없기 때문에 function 뒤에 작성하던 함수명을 const 또는 let을 활용하여 변수로 대신 사용한다.
let func2 = (num1, num2) => {
    console.log(num1+num2)
}
func2(3,4)
//------------------------------
//2~9단 구구단 모두 result 줄바꿈으로 출력하기
//함수명 dan99
//2*2=4
//2*3
//2*4
//매개변수 반드시 1개 이상 생성
//변수, 복합대입연산자, 태그 내용 삽입 속성 활용

const result = document.querySelector(".result");
let text_insert = "";
function dan99(num) {
    text_insert = `<ul claas="dan99">`
    text_insert += `<li>${num}X1 = ${num*1}</li>`
    text_insert += `<li>${num}X2 = ${num*2}</li>`
    text_insert += `<li>${num}X3 = ${num*3}</li>`
    text_insert += `<li>${num}X4 = ${num*4}</li>`
    text_insert += `<li>${num}X5 = ${num*5}</li>`
    text_insert += `<li>${num}X6 = ${num*6}</li>`
    text_insert += `<li>${num}X7 = ${num*7}</li>`
    text_insert += `<li>${num}X8 = ${num*8}</li>`
    text_insert += `<li>${num}X9 = ${num*9}</li>`
    text_insert += `</ul>`
    result.innerHTML += text_insert;
}
dan99(1);
dan99(2);
dan99(3);
dan99(4);
dan99(5);
dan99(6);
dan99(7);
dan99(8);
dan99(9);
// result.innerHTML = dan99(1);
console.log("--------------------")
//매개변수, ES^ 화살표함수, 리턴(함수 내에 값을 밖으로 반환)
function func3(a) {
    console.log(a + 5);
}
/* function func3_1(a) {
    alert(a+5);
} */
func3(10)
// func3_1(10)
//(위) 리턴이 없는 함수
console.log("--------------------")
//(아래) 리턴이 있는 함수
const func4 = (a) => {return a+5};
func4(10) //x 실행메서드 없음
console.log(func4(10))
result.innerHTML = func4(10); //위 구구단 잠시 지울려고 적음
// alert(func4(10))
console.log("--------------------");
let n1 = 10;
let n2 = 20;
function func5(a,b) {
    n1 += n2 //30
    n2 = a+b //6
    n1 += n2 //36
    return n1; //36
}
console.log(func5(2,4)) //36
//함수의 return은 함수 내의 표현식 중 원하는 결과값만 함수 호출 위치에서 반환해서 사용할 수 있기 때문에 필수속성으로 사용한다.
// const p_reuslt = document.querySelectorAll(".result")[1]
const p_reuslt = document.querySelector("p.result")
const errorBtn = document.querySelector("#error")
console.log(p_reuslt, error)
//경고 버튼을 클릭 시 p.result 위치에 "잘못클릭하셨습니다" 훔수의 경고메세지 출력
/* errorBtn.addEventListener("click", function() {
    p_reuslt.innerText = error_message();
}) */
errorBtn.addEventListener("click", () => {
    p_reuslt.innerText = error_message();
})
function error_message() {
    return '잘못클릭하셨습니다';
}
//동의 버튼 클릭시 result 위치에 "동의하셨습니다."
//동의안함 버튼 클릭시 result 위치에 "비동의하셨습니다."
/* const agree_result = document.querySelectorAll(".result")[2] */
const agree_result = document.querySelector("p.result:nth-of-type(2)")
const agree = document.querySelector("#agree")
const disagree = document.querySelector("#disagree")
let agree_message = (data) => {
    return `${data} 하셨습니다.`
}
/* let disagree_message = (data) => {
    
    return "비동의 하셨습니다."
} */
agree.addEventListener("click",() => {
    agree_result.innerText = agree_message("동의")
})
disagree.addEventListener("click",() => {
    agree_result.innerText = agree_message("비동의")
})
