const menu = document.querySelector('.menu')
const scoreList = document.getElementById('scoreList')
let menuOpen = false;
menu.addEventListener('click', () => {
    if(!menuOpen){
        menu.classList.add('open');
        scoreList.classList.add('listScore');
        menuOpen = true;
    } else {
        menu.classList.remove('open');
        scoreList.classList.remove('listScore');
        menuOpen = false;
    }
})