//id, pw 유효성 검사 JS
//id, pw를 입력하지 않고 로그인 클릭 시 error 위치에 "정보를 입력하세요"
//올바른정보 기준 : admin / 1234
//id, pw가 모두 입력 기준으로 id가 admin이 아니면 "아이디를 확인하세요" error 출력
//id, pw가 모두 입력된것을 기준으로 id가 admin이 맞고 pw가 1234가 아니면 "비밀번호를 확인하세요 error 출력"
//id, pw가 모두 입력 기준으로 id가 admin이고 pw도 1234면 로그인 성공 팝업 출력
//디자인 스타일 조건 추가
//입력안해서 생긴 에러 -> 초록, 700굵기
//입력은 했는데 데이터가 잘못되서 생긴 에러 -> 빨강, 900굵기
const user_id = document.querySelector("#user_id");
const user_pw = document.querySelector("#user_pw");
const error_p = document.querySelector(".error");
const login_btn = document.querySelector("#login_btn");
//1. 클릭 이벤트 생성
//2. 조건문으로 id, pw 입력했는가?
//3. 위 2번이 입력안했다면 "정보를 입력하세요"
login_btn.addEventListener("click" ,() => {
    if(user_id.value == "" || user_pw.value == "") {
        error_p.classList.remove("error_input")
        error_p.classList.add("no_input")
        // error_p.style.color = "green"
        // error_p.style.fontWeight = "700"
        if(user_id.value == "" && user_pw.value == "") {
            error_p.innerHTML = `아이디와 비밀번호를 입력하세요.`
        } else if(user_id.value != "") {
            error_p.innerHTML = `비밀번호를 입력하세요.`
        } else if(user_pw.value != "") {
            error_p.innerHTML = `아이디를 입력하세요.`
        }
    } else {
        error_p.classList.remove("no_input")
        error_p.classList.add("error_input")
        // error_p.style.color = "red"
        // error_p.style.fontWeight = "900"
        if(user_id.value != "admin") {
            error_p.innerHTML = `아이디를 확인하세요.`
        } else if (user_pw.value != 1234) {
            error_p.innerHTML = `비밀번호를 확인하세요`
        } else if (user_id.value == "admin" && user_pw.value == 1234) {
            alert(`로그인 성공`)
        }
    }
})