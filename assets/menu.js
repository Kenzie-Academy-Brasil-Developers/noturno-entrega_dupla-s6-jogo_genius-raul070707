const menu = document.querySelector('.menu')
const scoreList = document.getElementById('scoreList')
let menuOpen = false;
menu.addEventListener('click', () => {
    if(!menuOpen){
        menu.classList.add('open');
        scoreList.className = 'listScore';
        menuOpen = true;
        addHistoryToMenu();
    } else {
        menu.classList.remove('open');
        scoreList.className = "scored-list";
        menuOpen = false;
    }
})
