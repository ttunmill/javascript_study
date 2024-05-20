//객체
//2개 이상의 데이터 담을 수 있다.
//배열 = 2개 이상의 데이터 "값"
//객체 = 2개 이상의 데이터 "속성", "값"
const obj1 = {
    type:"코리안 숏헤어",
    age:2,
    color: ["흰색", "갈색"]
};
console.log(obj1);
console.log(obj1.type)
console.log(`고양이 종은 ${obj1.type} 입니다.`)
console.log(obj1.color) //흰색, 갈색
console.log(obj1.color[0]) //흰색
console.log(obj1.color[0], obj1.color[1]) //흰색, 갈색
const cat1 = {
    name: "러블",
    type: "러시안 블루",
    color: "회색", 
    age: "1",
    gender: "암",
    health: "양호",
    birth: "5/20",
    birth_message:function() {
        //return this.birth + "생일축하해!"
        return `${this.name}아 ${this.birth} 생일축하해!`
    }
}
console.log(cat1);
console.log(cat1.birth_message());
console.log('---------------------------')
// const movie = {
//     kor_name : "퓨리오사-매드맥스 사가",
//     eng_name : "Furiosa: A mad Max Saga",
//     director :  "조지 밀러",
//     actor : ["안야 테일러 조이","크리스 헴스워스","톰 버크"],
//     genre : ["액션"],
//     country : "미국",
//     release : "2024.05.22",
//     age : "15세 이상 관람가",
//     rate : "37.4%",
//     time : 148,
//     egg_score: "99%",
//     poster : "./image/mad_max_poster.jpg",
//     story : "문명 붕괴 45년 후, 황폐해진 세상에 무참히 던져진 '퓨리오사'가고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터"
// }
const movie = [
    {
    kor_name : "퓨리오사-매드맥스 사가",
    eng_name : "Furiosa: A mad Max Saga",
    director :  "조지 밀러",
    actor : ["안야 테일러 조이","크리스 헴스워스","톰 버크"],
    genre : ["액션"],
    country : "미국",
    release : "2024.05.22",
    age : "15세 이상 관람가",
    rate : "37.4%",
    time : 148,
    egg_score: "99%",
    poster : "./image/mad_max_poster.jpg",
    story : "문명 붕괴 45년 후, 황폐해진 세상에 무참히 던져진 '퓨리오사'가고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터"
    },
    {
    kor_name : "",
    eng_name : "",
    director :  "",
    actor : [""],
    genre : [""],
    country : "",
    release : "",
    age : "",
    rate : "",
    time : 1,
    egg_score: "",
    poster : "./image/",
    story : ""
    }
];
console.log(movie)
document.write(`<img src="${movie[0].poster}" alt="${movie[0].kor_name}">`);
console.log("------------------------------");
const cat_shelter = [
    {
        type : "코리안 숏헤어",
        age : 1,
        gender : "남자",
        color : ["갈색", "흰색", "검은색"],
        neuter : "O"
    },
    {
        type : "코리안 숏헤어",
        age : 2,
        gender : "여자",
        color : ["검은색", "흰색"],
        neuter : "X"
    },
    {
        type : "코리안 숏헤어",
        age : 3,
        gender : "남자",
        color : ["흰색", "회색"],
        neuter : "O"
    }
];
console.log(cat_shelter);
console.log(cat_shelter[0]);
console.log(`현재 보호소 동물은 ${cat_shelter.length}마리 입니다.`);
let cat_age = `현재 보호소 동물 나이대는 ${cat_shelter[0].age}살, ${cat_shelter[1].age}살, ${cat_shelter[2].age}살 입니다.`;
console.log(cat_age);