// 1. 서브숨기기
// 2. gnb 마우스를 올리면
// 3. sub 3개가 모두 출력
// 동적 절차 체크 후 HTML 태그 확인 후
// HTML DOM 필요 변수 생성
let gnb = document.querySelector(".gnb");
let sub = document.querySelectorAll(".sub");
let gnb2 = document.querySelectorAll(".gnb > li");
/* sub[0].style.display = "none";
sub[1].style.display = "none";
sub[2].style.display = "none"; */
subHide();
gnb.addEventListener("mouseover", function() {
    sub[0].style.display = "block";
    sub[1].style.display = "block";
    sub[2].style.display = "block";
});
gnb.addEventListener("mouseout", function() {
    sub[0].style.display = "none";
    sub[1].style.display = "none";
    sub[2].style.display = "none";
});
// gnb.addEventListener("mouseover", subShow());
// gnb.addEventListener("mouseout", subHide());
// 4. gnb 마우스를 나가면
// 5. sub 3개 모두 숨기기
// 6. gnb 모든 메뉴에 마우스 올리면 sub 모두 출력하기

function subShow() {
    sub[0].style.display = "block";
    sub[1].style.display = "block";
    sub[2].style.display = "block";
}
function subHide() {
    sub[0].style.display = "none";
    sub[1].style.display = "none";
    sub[2].style.display = "none";
}
