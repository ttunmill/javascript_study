var box1; //변수 생성은 됐지만 데이터는 정의되지 않은 상태
//undefined
console.log(box1);
var box1 = 1; //중복 선언해도 에러는 나지 않는다.
box_all(); //변수가 없어도 undefined가 출력된다.
var box2 = box1 + 1;
box_all();
var box3 = "1" + (1 + 1);
box_all();
console.log(box1); // 1
console.log(box2); // box11? 2?
console.log(box3);
box_all();
// ==================================
function box_all() {
    console.log("all=>",box1, box2, box3);
    //템플릿 문자열 (ES6)
    console.log(`all=>${box1}과 ${box2}와 ${box3}`);
    console.log(`all=>${box1, box2, box3}`);
}
//======================== 회원의 나이를 저장하고 있는 함수
var lee = 20;
var kim = 21;
var soo = 22;
function user_age() {
    console.log(`당신의 나이는 ${kim}살 입니다.`);
}
//======================== 상품 수량 증가 함수
var num = 0; //기본 설정
function productNum() {
    num = num + 1
    console.log(num);
}
productNum();
console.log("----------------------------------------------");
var a = 1; //초기 생성
var a = 2; //이미 생성한 변수를 중복 선언해도 에러 없음
let b = 3;
b = 4; // 이미 생성한 변수를 중복 선언하면 에러발생
//let 변하는 변수 vs const 변하지 않는 상수(undefined X)
const c = 5;
//자바스크립트는 절차적언어이다.
//자바스크립트는 객체지향언어이다.
//자바스크립트는 함수형언어이다.
const js = "자바스크립트";
let js_lang = "절차적";
console.log(`${js}는 ${js_lang}언어이다.`);
js_lang = "객체지향언어";
console.log(`${js}는 ${js_lang}언어이다.`);
js_lang = "함수형언어";
console.log(`${js}는 ${js_lang}언어이다.`);