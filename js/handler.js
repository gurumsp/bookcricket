let myScore = 0;
let lastPage = document.querySelector(".lastPage");
let bookNoHolder = document.querySelector('#bookNo');
let scoreUpdater = document.querySelector('#score');
let outHolder = document.querySelector('.out');

const openBook = (event) => {
    let cover = document.querySelectorAll('.cover')
    let pages = document.querySelectorAll('.page')
    cover.forEach(obj => {obj.classList.toggle("turn")})
    pages.forEach(obj => {obj.classList.toggle("turn")})
    bookNoHolder.classList.remove("bookNoShow")
}

const updateBookPage = () => {
    let bookNo = Math.floor(Math.random() * 500) + 1;
    let bookNoHolder = document.querySelector('#bookNo');
}

const updateScore = () => {
    let currentScore = Number(scoreUpdater.textContent);
    let hitNow = bookNoHolder.textContent.split('');
    hitNow = Number(hitNow[hitNow.length - 1]);
    if (hitNow > 6) {
        hitNow = 6;
    }
    if (hitNow === 5) {
        hitNow = 4;
    }
    if (hitNow === 0) {
        scoreUpdater.classList.add('red');
        outHolder.classList.add('red');
        outHolder.classList.add('visible');
    } else {
        scoreUpdater.textContent = currentScore + hitNow;
    }
}

lastPage.addEventListener("animationend", () => {
    let bookNo = Math.floor(Math.random() * 500) + 1;
    bookNoHolder.textContent = bookNo;
    bookNoHolder.classList.toggle("bookNoShow");
    updateScore();
})