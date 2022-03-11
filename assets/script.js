let randomOrder = [];
let playerOrder = [];
let lastPlayerOrder = [];
let score = 0;
let scoreHistory = [];


// Mapeando botões //

const startBtn = document.querySelector(".start");
const greenBtn = document.getElementById("buttonGreen");
const redBtn = document.getElementById("buttonRed");
const yellowBtn = document.getElementById("buttonYellow");
const blueBtn = document.getElementById("buttonBlue");
const displayAdd = document.querySelector(".display");
const scoreDisplay = document.querySelector(".scoreDisplay");
const check = document.querySelector(".check");
const historyList = document.getElementById("scoreList");
const addDiv = document.createElement("div");
const addUl = document.createElement("ul");
historyList.appendChild(addUl);

addUl.id = "scoreUl";
const ulHistory = document.getElementById("scoreUl");

displayAdd.appendChild(addDiv);

startBtn.onclick = () => startClick();
greenBtn.onclick = () => click(0);
redBtn.onclick = () => click(1);
yellowBtn.onclick = () => click(2);
blueBtn.onclick = () => click(3);

// Função atualizar score //

const updScore = () => {
  check.innerHTML = `Lvl: ${score + 1}`;
};
updScore();

// Função iniciar jogo //

const startClick = () => {
  randomOrder = [];
  playerOrder = [];
  score = 0;  
  randomColor();
  updScore();
  initialSequence();
  greenBtn.disabled = false;
  redBtn.disabled = false;
  yellowBtn.disabled = false;
  blueBtn.disabled = false;
};

// Função de click //

const click = (color) => {
  playerOrder[playerOrder.length] = color;
  checkSequence();
  activeButton(color);
};

// Função para gerar cor aleatória //

const randomColor = () => {
  lastPlayerOrder = playerOrder;
  playerOrder = [];
  randomOrder[randomOrder.length] = Math.floor(Math.random() * 4);
};

// Função para checar o resultado //

const checkSequence = () => {
  const hasWrongNumber = playerOrder.filter((current, index) => {
    return current !== randomOrder[index];
  }).length;

  if (hasWrongNumber) {
    gameOver();
  }

  if (playerOrder.length === randomOrder.length && !hasWrongNumber) {
    lvlUp();
  }
};

// Função sequência correta //

const lvlUp = () => {
  displayAdd.innerHTML = "";

  const lvlUpMensage = document.createElement('h3');

  lvlUpMensage.innerHTML = 'Parabens! Você passou de nível.';

  displayAdd.appendChild(lvlUpMensage)

  randomColor();
  score++;
  updScore();
  setTimeout(() => initialSequence(), 3000);
};

// Função sequência incorreta //

const gameOver = () => {
  displayAdd.innerHTML = "";

  const restartButton = document.createElement('button');
  const restartMensage = document.createElement('h3');

  restartMensage.innerHTML = `Você perdeu! Sua pontuação foi de ${score} rodadas.`;
  restartButton.innerHTML = "Reiniciar";

  displayAdd.appendChild(restartButton);
  displayAdd.appendChild(restartMensage);

  restartButton.addEventListener('click', () => startClick())

  scoreHistory.push(score);
  greenBtn.disabled = true;
  redBtn.disabled = true;
  yellowBtn.disabled = true;
  blueBtn.disabled = true;

  audio = new Audio(
    "https://assets.mixkit.co/sfx/preview/mixkit-little-piano-game-over-1944.mp3"
  );
  audio.play();
};

// Função para fazer brilhar os botoes na sequência //

const initialSequence = () => {

  displayAdd.innerHTML = "";

  const playedMensage = document.createElement('h3');

  playedMensage.innerHTML = "Acerte a sequência de cores!"

  displayAdd.appendChild(playedMensage)

  setTimeout(() => {randomOrder.forEach((valor, index) => {
    
    setTimeout(() =>{
      if(valor === 0){
        displayAdd.className = 'display-green'
  
        setTimeout(() => (displayAdd.className = "display"), 1000);
      } else if (valor === 1) {
        displayAdd.className = "display-red";

        setTimeout(() => (displayAdd.className = "display"), 1000);
      } else if (valor === 2) {
        displayAdd.className = "display-yellow";

        setTimeout(() => (displayAdd.className = "display"), 1000);
      } else {
        displayAdd.className = "display-blue";

        setTimeout(() => (displayAdd.className = "display"), 1000);
      }
    }, index * 1500)
  })
}, 2000);
}


// Função para fazer brilhar os botoes //

const activeButton = (index) => {
  if (index === 0) {
    greenBtn.className = "shine-green";

    setTimeout(() => (greenBtn.className = "button-green"), 1000);
  } else if (index === 1) {
    redBtn.className = "shine-red";

    setTimeout(() => (redBtn.className = "button-red"), 1000);
  } else if (index === 2) {
    yellowBtn.className = "shine-yellow";

    setTimeout(() => (yellowBtn.className = "button-yellow"), 1000);
  } else {
    blueBtn.className = "shine-blue";

    setTimeout(() => (blueBtn.className = "button-blue"), 1000);
  }
};

// Adicionar histórico ao menu //

function addHistoryToMenu() {
  const sortedHistory = scoreHistory.sort((a, b) => a - b)
  sortedHistory.forEach((scoreValue) => {
    const addLi = document.createElement("li");
    addLi.textContent =  `Pontuação ${scoreValue}`;
    ulHistory.appendChild(addLi);
  });
}
