//제이쿼리 시작
//자바스크립트 DOM제어 쉽게 도와주는 라이브러리 언어
//제이쿼리 사용을 위해서는 cdnJs 외부파일을 링크로 연결해야 사용할 수 있다.(필수 !)
//javascript DOM 스타일 적용법
const h1 = document.querySelector("h1")
h1.style.backgroundColor = "red"

//jquery DOM 스타일 적용법
//jquery 방식으로 변수를 선택했을 땐 자바스크립트의 DOM 속성 및 메소드를 사용하지 못한다.
const $h1 = $("h1");
//제이쿼리변수.css("속성", "값")
$h1.css("background-color","blue")
//제이쿼리변수와 자바스크립트 속성 및 메소드를 사용하고 싶다면 그 중간에 추가 속성을 붙여야한다.
$h1.get(0).style.color = "orange"
//웹사이트에서 자주 이용하는 동적기능을 제이쿼리는 일부 간단한 메소드 명령으로 제공해준다.
//DOM 숨기기, 보이기 display = none, block
const test = document.querySelector(".test")
// test.style.display = "none" //JS
const $test = $(".test");
// $test.css("display", "none");
// $test.get(0).style.display = "none";
$test.hide() //display:none 호출함수명
$test.show() //display:block 호출함수명
$test.css ({
    color : "blut",
    fontSize : "20px",
    backgroundColor : "aqua",
})

const $btn = $("#btn");
const $btn2 = $("#btn2");
$btn.on("click", function() {
    $("h1+p").css("background-color", "lime")
})
// $btn2.on("click", function() {
//     $("p > img").attr("src", "./project/casper/images/advantage2.png")
// })
const btn2 = document.querySelector("#btn2")
const img = document.querySelector("p > img")
btn2.addEventListener("click", () => {
    img.src = "./project/casper/images/advantage2.png"
})
//반복문(for) 없이도 변수 하나로 전체를 인식한다.
const $p = $("p")
console.log($p.length)
$p.css("border", "1px solid black")

const p = document.querySelectorAll("p")
for(var i of p) {i.style.color = "purple"}

$p.eq(1).css("border", "5px solid black")
$p.filter(".first").css("transform","scaleY(1.5)")
$p.find("em").css({
    backgroundColor : "coral",
})
$p.not("first").css("transform", "rotate(2deg)")