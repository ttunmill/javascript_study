const btn1 = document.querySelector("#btn1");
console.log(btn1);
// 버튼을 클릭했을 때 실행
// 인라인스크립트 <button onclick="실행함수"></button>
// JS 내에서 addEventListener 메소드 활용한 이벤트 방식
// 이벤트대상.addEventListener("이벤트종류",실행함수)
// btn1.addEventListener("click", btn1_func)
function btn1_func() {
    console.log("test")
}
btn1.addEventListener("click", function(){
    console.log("test")
})
btn1.addEventListener("mouseover", btn1_func);
btn1.addEventListener("mousedown", btn1_func);
btn1.addEventListener("mouseout", btn1_func);
// -----------------------------
//btn2 클릭했을 떄 위 prompt로 받은 메소드 두개의 수를 더해서 경고창에 출력
//ex)1+2=3
btn2.addEventListener("click", btn2_func)
function btn2_func() {
    let num1 = prompt("첫번째 수") //더하기 첫째 수
    let num2 = prompt("두번째 수") //더하기 두번째 수
    let result = Number(num1) + Number(num2);
    alert(`${num1}+${num2}=${result}`)
}