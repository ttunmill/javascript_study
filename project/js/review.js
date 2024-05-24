//#re 영역에 100자 이상을 쓰고 리뷰 등록버튼을 클릭하면 "등록완료" 팝업 출력
//#re 영역에 100자 이하를 쓰고 리뷰 등록버튼을 클릭하면 "100자 이상 써주세요" 팝업 출력
const re = document.querySelector("#re");
const btn = document.querySelector("#reviewBtn");
btn.addEventListener("click", function() {
    // console.log(re.value.length)
    // console.log(typeof(re.value.length))
    let event = re.value.length>=100 ?
    `등록완료`: `100자 이상 써주세요`;
    alert(event);
})