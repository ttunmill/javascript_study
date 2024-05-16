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
console.log("----------------------------------------------");
//const는 변하지 않는 상수를 가지는 변수이다.
//let은 변하는 데이터 값을 가지는 변수이다.
//var는 변하는 데이터 값을 가지는 변수이다.
let pro_lang = "const"
const vari = "변수";
console.log(`${pro_lang}는 변하지 않는 상수를 가지는 ${vari}이다`)
pro_lang = "let"
console.log(`${pro_lang}은 변하는 데이터 값을 가지는 ${vari}이다`)
pro_lang = "var"
console.log(`${pro_lang}은 변하는 데이터 값을 가지는 ${vari}이다`)
// 회원 정보 저장 변수
// 이름 : 홍길동
// 나이 : 20
// 혈액형 : o
// mbti : enfj
// 거주지 : 인천시 부평구
// 성별 : 남성
let user_name = "홍길동";
let user_age2 = 20;
const blood_type = "O";
let mbti = "enfj";
let address = "인천시 부평구";
let gender = "male";
console.log(`${user_name}의 나이는 ${user_age2}살 입니다.`)
console.log(`${user_name}의 내년 나이는 ${user_age2 + 1}살 입니다.`)
console.log(`${user_name}의 작년 나이는 ${user_age2 - 1}살 입니다.`)
console.log(`${user_name}의 혈액형은 ${blood_type}형 입니다`)
console.log(`${user_name}의 성별은 ${gender}입니다`)
console.log("----------------------------------------------");
let global_variable = 1;
function local_func() {
    let local_variable2 = 2;
    console.log(local_variable2 + global_variable);
}
console.log(global_variable);
local_func();
console.log("----------------------------------------------");
// null(비어있는, 삭제된) vs undefined (정의안됨)
let cart1 = 10;
console.log(cart1);
cart1 = null; //장바구니 비움
console.log(cart1);
let cart2; // 처음 사용자가 아무것도 물건을 담지 않았을 떄
console.log(cart2); // undefined
console.log("----------------------------------------------");
//하루 총 지출액 가계부 만들기
//커피 1500원, 도시락 6000원, 대중교통 2천원
//오늘 총 지출액은 ooo원 입니다.
let coffee = 1500;
let lunch = 6000;
let transport = 2000;
let phone = 2000000;
let phone_divide = phone / 6;
function account() {
    let result = coffee + lunch + transport
    console.log(`오늘 총 지출액은 ${result}원 입니다`);
}
function installment() {
    console.log(`이번 달 핸드폰 할부비용은 ${phone_divide}원 입니다.`);
}
function money_sum() {
    let result = coffee + lunch + transport + phone_divide;
    console.log(`핸드폰 할부 포함 총 지출액은 ${result}원 입니다.`)
}
