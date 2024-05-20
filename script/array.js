// 1. 배열 작성법 
let yoil = ['']; //빈 배열
yoil = ['월','화','수','목','금','토','일'];
console.log(yoil);
console.log(`오늘은 ${yoil[0]}요일 입니다.`)//오늘은 월요일입니다
// 2. 배열 작성법 
let yoil_v2 = new Array(2); //빈 배열2개 생성
let yoil_v22 = new Array(2, 4); 
console.log(yoil_v2[1]); //undefined
yoil_v2[1] = '월';
console.log(yoil_v2[1]); //월
yoil_v2[0] = '일';
console.log(yoil_v2);
//배열 기초 문제
// 1. 원하는 색상을 6개 배열로 각각 저장하고 그 중 좋아하는 색상 2개를 골라서 콘솔에 출력하세요.
// 콘솔결과 예) 좋아하는 색상은 O, O 입니다.
var colors = ["빨강","주황","노랑","초록","파랑","보라"];
console.log(`좋아하는 색상은 ${colors[2]},${colors[3]} 입니다.`);
//2. 좋아하는 과일을 5개 배열로 저장하고 모두 역순으로 출력해보세요.
var cudamono = ["딸기","샤인머스켓","수박","메론","레몬"];
var result = `${cudamono[4]},${cudamono[3]},${cudamono[2]},${cudamono[1]},${cudamono[0]}`
var cudamono_revers = cudamono.reverse();
console.log(`${cudamono_revers}`);
console.log(result);
//날씨카드(맑음, 흐림, 비, 눈)을 배열로 생성하고 이번주 기상예보를 출력하세요.
//결과 예)
//월요일 : 맑음
//화요일 : 눈
//수요일 : 비
//목요일 : 흐림
//금요일 : 맑음
//토요일 : 맑음
//일요일 : 눈
var weather = ["맑음", "흐림", "비", "눈"];
console.log(
    `
    ${yoil[0]}요일 : ${weather[0]}
    ${yoil[1]}요일 : ${weather[3]}
    ${yoil[2]}요일 : ${weather[2]}
    ${yoil[3]}요일 : ${weather[1]}
    ${yoil[4]}요일 : ${weather[0]}
    ${yoil[5]}요일 : ${weather[0]}
    ${yoil[6]}요일 : ${weather[3]}
    `
)
console.log('--------------------');
let cgv = new Array(8);
console.log(cgv);
console.log(cgv.length);
cgv[0] = "A1";
console.log(cgv);
cgv[1] = "C3";
console.log(cgv);
cgv.push('F5');
console.log(cgv);
//배열 속성 활용
let megabox = [];
console.log(megabox);
console.log(megabox.length);
megabox.push("A2");
console.log(megabox);
megabox.push("B1");
console.log(megabox);
megabox.unshift("A1");
console.log(megabox);
megabox.pop();
console.log(megabox);
megabox.shift();
console.log(megabox);
megabox.push("F5","F6");
console.log(megabox);
console.log('---------------------');
let lottecinema = [];
lottecinema.push("A1","A2","A3","A4","B1","B2","B3","B4");
console.log(lottecinema);
// ex) 좌석 배열에 3개의 조석 정보가 들어있을 때
// 예매하신 좌석은 총 3좌석이며 성인 1명당 10000원 기준으로 총 결제 금액은 30000원 입니다.
console.log(typeof(lottecinema.length));
let money_movie = 10000;
let result_movie = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1명당 ${money_movie}원 기준으로 총 결제 금액은 ${lottecinema.length*money_movie}원 입니다.`;
let total_movie = '';
// console.log(`예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1명당 ${money}원 기준으로 총 결제 금액은 ${lottecinema.length*money}원 입니다.`);
//console.log(result_movie);
// 뒤로가기 인원 수정
//result_movie = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1명당 ${money_movie}원 기준으로 총 결제 금액은 ${lottecinema.length*money_movie}원 입니다.`;
//console.log(result_movie);
// result_movie = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1명당 ${money_movie}원 기준으로 총 결제 금액은 ${lottecinema.length*money_movie}원 입니다.`;
//console.log(result_movie);
movie_fc();
lottecinema.pop();
movie_fc();
lottecinema.push("C1","C2");
movie_fc();
function movie_fc() {
    total_movie = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1명당 ${money_movie}원 기준으로 총 결제 금액은 ${lottecinema.length*money_movie}원 입니다.`;
    console.log(total_movie);
}