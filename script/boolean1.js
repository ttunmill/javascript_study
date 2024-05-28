// 논리데이터 true, false
console.log(true) //논리데이터 "참" true
console.log("true") //논리(x) 문자데이터 "true" 주의!!
console.log(typeof true) //boolean
console.log(typeof false) //boolean

//자바스크립트가 인식하는 참, 거짓종류
//false
/* 
1. false
2. null
3. undefined
4. NaN (Not a number)
5. 0
6. ""
*/
// ------------------------------------------------
//true
/* 
참으로 인식하는 값 => truthy
1. true
2. false가 아닌 모든 값들
3. 0보다 큰 숫자
4. " "
5. [] //빈 배열
6. {} //빈 객체
*/
console.log("1"==0)
console.log("1"===1) //데이터타입 구분
let x = "1"
let y = 1
let xy = x===y
console.log(x == y)
console.log(x === y)
console.log(xy)
console.log("---------------------")
//논리연산자
//and(&&) or(||)
//데이터 && 데이터
//비교연산자 || 비교연산자
let a = 123
let b = 0
console.log(b && a) //0 모두 참이여야 참 반환 (false)
console.log(b || a) //123 하나만 참이여도 참 반환 (true)
let ab = (a || b) && !false;
console.log(ab) //true
console.log("---------------------")
/* function print(value) {
    let message = value || "web"
    return console.log(message)
}
print();
print("design");
print(0);
print(""); */
console.log("---------------------")
//if 조건문
//if(조건식) {조건식이 참일 떄 실행되는 결과}
a = 10;
b = 20;

if(a > b) {console.log("a는 b보다 작다")}
if(a != b) {console.log("a는 b와 다르다")}
if(a == b) {console.log("a와 b는 같다")} //실행 x
console.log("---------------------")
a = true
b = false
let c = 10
let d = 20
if(a == true) {console.log("a는 참이다")} //o
if(c > 10) {console.log("c는 10보다 크다")} //x
if(d <= 20) {console.log("d는 20보다 작거나 같다")} //o
if(b != true) {console.log("b는 참이 아니다")} // o
console.log("---------------------")
//사용자의 아이디에 따라 다른 인사말 출력
//아이디 미입력 후 버튼 누르면 반응없음
const user_id = document.querySelector("#user_id")
const login_btn = document.querySelector("#login_btn")
//관리자 아이디 : admin
login_btn.addEventListener("click", () => {
    if(user_id.value == "admin") {
        alert("관리자님 어서오세요")
    } else {
        alert(`일반회원 ${user_id.value}님 어서오세요`)
    }
})
console.log("---------------------")
const user_number = document.querySelector("#user_number")
const number_btn = document.querySelector("#number_btn")
//사용자가 입력한 숫자가 짝수일경우만 (홀수는 반응없음)
//팝업창으로 "당신이 입력한 ?? 수는 짝수입니다" 출력
number_btn.addEventListener("click", ()=> {
    if(user_number.value%2 == 0) {
        alert(`당신이 입력한 ${user_number.value}는 짝수입니다.`)
    } else {
        alert(`당신이 입력한 ${user_number.value}는 홀수입니다.`)
    }
})
console.log("---------------------")
//5천보 이상일 경우 "목표 달성 완료!!" 출력
const walk = document.querySelector("#walk")
const walk_btn = document.querySelector("#walk_btn")
walk_btn.addEventListener("click", ()=> {
    if(walk.value >= 5000) {
        alert(`목표 달성 완료!! ${walk.value}보 걸으셨습니다`)
    } else {
        alert(`${5000 - walk.value}보 부족합니다.`)
    }
})
//-------------------------------------
const print_btn = document.querySelector("#print_btn")
print_btn.addEventListener("click", ()=> {
    let result = window.confirm("인쇄할까요?");
    if(result) { //참에 대한 코드 블록 {}
        //인쇄할까요? 에서 "확인"을 클릭해서 true를 반환받을 때
        // if문이 실행되는 결과 만들기
        window.print()
    } else { //거짓에 대한 코드 블록 {}
        alert("인쇄가 취소 되었습니다.")
    }
})