let num1 = 4;
let num2 = 2;
let result = num1 + num2;
console.log(result); //6
result = num1 - num2;
console.log(result); //2
result = num1 * num2;
console.log(result); //8
result = num1 / num2;
console.log(result); //2
result = num1 % num2;
console.log(result); //0
// 나머지연산자를 이용할 경우는 0 또는 1의 결과가 필요한 경우 사용한다.
// 홀 짝 구분 가능
console.log("----------------");
let x = 5;
let y = x++;
console.log(`x=${x}`);
console.log(`y=${y}`);
let a = 10;
let b = a++
console.log(a, b);

let c = 4;
let d = --c;
console.log(c, d);

a = 10;
b = 20;
c = 30;
d = 40;
console.log(a,b,c,d); //10 20 30 40

a++
b--
c++
d--
console.log(a,b,c,d); //11 19 31 39

a = ++b
b = a++
console.log(a,b,c,d); //21 20 31 39

c = a+b
d = ++c
console.log(a,b,c,d) //21 20 42 42

a = ++c + 10
b = --d + 1
console.log(a,b,c,d); //53 42 43 41

console.log("----------------");
// 복합대입연산자
// 1이상의 값을 산술연산자와 함께 대입하고 싶을 때
//복합대입은 += 문자열연결용으로 많이 활용한다.
let number = 10;
console.log(number) //10
number += 5; //number = number + 5
console.log(number) //15
number -= 5; //number = number - 5
console.log(number) //10
number *= 5; //number = number * 5
console.log(number) //50
number /= 5; //number = number / 5
console.log(number) //10
number %= 2; //number = number % 2
console.log(number)
//삼항연산자
x = 5;
y = x+10;
//x와 y의 값을 비교해서 비교에 따른 결과 ox 출력하기
let total = y == 15;
console.log(total) //true
total = y==15 ? "O" : "X";
console.log(total) //true
// let age = prompt("몇살인가요?")
// total = age>=18 ? "성인" : "어린이";
console.log(total)

//게임스코어
//1위 이웹 1000점
//2의 김웹 900점
const game_score = [
    {
        id: '이웹',
        score : 1000,
    },
    {
        id: '김웹',
        score : 900,
    }
]
let max_score2 = game_score[0].score > game_score[1].score ?
game_score[0] : game_score[1]
console.log(`${max_score2.id}의 최고점수는 ${max_score2.score}점이다.`)


let max_score = game_score[0].score > game_score[1].score ?
`${game_score[0].id}의 최고점수는 ${game_score[0].score}점이다.` : 
`${game_score[1].id}의 최고점수는 ${game_score[1].score}점이다.`
console.log(max_score)