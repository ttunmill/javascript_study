//item_wrap 안 자식 item의 개수를 top의 total_num 출력
//item_wrap 안 자식 item의 개수 <= 콘솔 출력
const item_wrap = document.querySelector(".item_wrap");
const total_num = document.querySelector(".total_num")
const plus_btn = document.querySelector("#plus")
const minus_btn = document.querySelector("#minus")
const count = document.querySelector("#count")
const price = document.querySelector(".item_price_txt")
const regular_price = document.querySelector(".item_regular_price")
/* console.log(item_wrap.children);
console.log(item_wrap.childElementCount);
console.log(item_wrap.children.length); */

// 전체 아이템 갯수 출력
total_num.innerText = item_wrap.childElementCount;
// -,+ 버튼시 count 숫자 변경
plus_btn.addEventListener("click", function() {
    count.value = Number(count.value) + 1;
})
minus_btn.addEventListener("click", function() {
    count.value = Number(count.value) - 1;
})















