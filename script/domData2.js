const section = document.querySelector("section")
let books = [
    {
        name: "나를 소모하지 않는 현명한 태도에 관하여",
        author: ["마티아스 뇔케","이미옥"],
        publisher: "퍼스트펭귄",
        date: "2024년 3월",
        price: 17800,
        sale: 10,
        tag: ["#얼리리더","#이달의굿즈","#나를바라보다","#인간관계에대하여"]
    },{
        name: "하루 한 장 나의 어휘력을 위한 필사 노트",
        author: "유선경",
        publisher: "위즈덤하우스",
        date: "2024년 3월",
        price: 	23800,
        sale: 10,
        tag: ["#얼리리더","#필사","#쓰는맛"]
    },{
        name: "불변의 법칙",
        author: ["모건 하우절","이수경"],
        publisher: "서삼독",
        date: "2024년 2월",
        price: 25000,
        sale: 10,
        tag: ["#얼리리더","#부자되는법","#부자만들기","#돈좀벌어보자","#돈모으고싶을때"]
    }
]
console.log(books)
//HTML DOM
let product = "";
let total_price = books[0].price * ((100 - books[0].sale) / 100);
console.log(total_price)
/* product = `<div class="book">`
product += `<h1>${books[0].name}</h1>`
product += `<div class="info">`
product += `<p class="author">${books[0].author}</p>`
product += `<p class="author">${books[0].author[0]}/${books[0].author[1]}</p>`
product += `<a href="#" class="publisher">${books[0].publisher}</a>`
product += `<p class="date">${books[0].date}</p>`
product += `</div>`
product += `<div class="price">`
product += `<em>${books[0].price.toLocaleString("ko-kr")}원</em><br>`
product += `<span class="sale">${books[0].sale}%</span><br>`
product += `<span class="total_price">${total_price.toLocaleString("ko-kr")}원</span>`
product += `</div>`
product += `<p class="tag">${books[0].tag[0]}${books[0].tag[1]}${books[0].tag[2]}${books[0].tag[3]}</p>`
product += `</div>` */
section.innerHTML = product;

for(let i = 0; i < books.length; i++) {
    product = `<div class="book">`
    product += `<h1>${books[i].name}</h1>`
    product += `<div class="info">`
    product += `<p class="author">${books[i].author[i]}/${books[i].author[i]}</p>`
    product += `<a href="#" class="publisher">${books[i].publisher}</a>`
    product += `<p class="date">${books[i].date}</p>`
    product += `</div>`
    product += `<div class="price">`
    product += `<em>${books[i].price.toLocaleString("ko-kr")}원</em><br>`
    product += `<span class="sale">${books[i].sale}%</span><br>`
    product += `<span class="total_price">${total_price.toLocaleString("ko-kr")}원</span>`
    product += `</div>`
    product += `<p class="tag">${books[i].tag[i]}${books[i].tag[1]}${books[i].tag[2]}${books[i].tag[3]}</p>`
    product += `</div>`
}
section.innerHTML = product;