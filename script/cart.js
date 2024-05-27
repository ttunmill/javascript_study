//item_wrap 안 자식 item의 개수를 top의 total_num 출력
//item_wrap 안 자식 item의 개수 <= 콘솔 출력
const item_wrap = document.querySelector(".item_wrap");
const total_num = document.querySelector(".total_num")
const plus_btn = document.querySelector("#plus")
const minus_btn = document.querySelector("#minus")
const count_input = document.querySelector("#count")
const price = document.querySelector(".item_price_txt")
const regular_price = document.querySelector(".item_regular_price")
/* console.log(item_wrap.children);
console.log(item_wrap.childElementCount);
console.log(item_wrap.children.length); */

// 전체 아이템 갯수 출력
total_num.innerText = item_wrap.childElementCount;
// -,+ 버튼시 count 숫자 변경
//장바구니 수량 설정하기
//1. 기본수량 1
//DOM 기본 태그 및 내용 추가 innerText, innerHTML 속성
//input, textarea 입력 수정, 읽기 value 속성
//2. plus 버튼 클릭시 count가 1씩 증가
let count = 1 //수량변수
let test_price = 1000; //가격변수
let rate = 0.1; //할인율
// let sale_price = 900; 
// let sale = test_price * ((100 - 10) / 100)
count_input.value = count;
regular_price.innerText = `${test_price.toLocaleString("ko-kr")}원`
price.innerText = `${test_price*(1-rate).toLocaleString("ko-kr")}원`
/* plus_btn.addEventListener("click", function() {
    count_input.value = Number(count_input.value) + 1;
    최대 구매 수량 10, 삼항조건연산자 조건?참결과:거짓결과
    10개 이상 수량 변경 시 '최대 구매수량입니다' 메세지출력
    count++; //조건없이 무조건 1씩 증가
    count < 10 ? count++ : console.log(count)"";
    count_input.value = count;
})
minus_btn.addEventListener("click", function() {
    count_input.value = Number(count_input.value) - 1;
    count > 1 ? count-- : console.log(count)"";
    count_input.value = count;
}) */
const plusFunc = () => {
    count < 10 ? count++ : alert("최대수량입니다.");
    //증가되는 count 변수를 이용해서
    //변수의 수량에 따른 가격 출력
    count_input.value = count;
    // regular_price.innerHTML = `${(test_price*count).toLocaleString("ko-kr")}원`
    original_price();
    sale_price_func();
}
const minusFunc = () => {
    count > 1 ? count-- : alert("최소수량입니다.");
    count_input.value = count;
    // regular_price.innerHMTL = `${(test_price*count).toLocaleString("ko-kr")}원`
    original_price();
    sale_price_func();
}
plus_btn.addEventListener("click",plusFunc)
minus_btn.addEventListener("click",minusFunc)
let original_price = () => {
    regular_price.innerHTML = `${(test_price*count).toLocaleString("ko-kr")}원`
}
let sale_price_func = () => {
    price.innerHTML = `${((test_price*(1-rate))*count).toLocaleString("ko-kr")}원`
}













