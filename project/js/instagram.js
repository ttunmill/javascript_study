const like = document.querySelector(".like > img");
console.log(like.src)
// console.log(like.children[0].src)
const comments = document.querySelector(".comments > img")
const paper = document.querySelector(".paper > img")
// --------------------------------------------------
like.addEventListener("click", () => {
    like.src = "./icons/like_on.png"
})
const like_func = () => {}
comments.addEventListener("click", () => {
    comments.src = "./icons/comment_on.png"
})
paper.addEventListener("click", () => {
    paper.src = "./icons/paper_on.png"
})
