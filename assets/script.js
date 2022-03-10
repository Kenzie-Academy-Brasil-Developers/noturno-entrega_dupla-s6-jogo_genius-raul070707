let randomOrder = [];
let playerOrder = [];
let lastPlayerOrder = [];
let score = 0;
let scoreHistory = [];
let audio;

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
  addDiv.innerHTML = `Ordem do player:${lastPlayerOrder}, Ordem aleatória: ${randomOrder}`;
};
updScore();

// Função iniciar jogo //

const startClick = () => {
  randomOrder = [];
  playerOrder = [];
  score = 0;
  startBtn.innerHTML = "Jogando";
  randomColor();
  updScore();
  initialSequence();
  greenBtn.disabled = false;
  redBtn.disabled = false;
  yellowBtn.disabled = false;
  blueBtn.disabled = false;
  startBtn.disabled = true;
};

// Função de click //

const click = (color) => {
  playerOrder[playerOrder.length] = color;
  console.log(`Player order é ${playerOrder}`);
  checkSequence();
  activeButton(color);
};

// Função para gerar cor aleatória //

const randomColor = () => {
  lastPlayerOrder = playerOrder;
  playerOrder = [];
  randomOrder[randomOrder.length] = Math.floor(Math.random() * 4);
  console.log(`Random order é ${randomOrder}`);
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
  randomColor();
  score++;
  updScore();
  setTimeout(() => initialSequence(), 3000);
};

// Função sequência incorreta //

const gameOver = () => {
  scoreDisplay.innerHTML = `Você perdeu! Sua pontuação foi ${score}`;
  startBtn.innerHTML = "Reiniciar";
  scoreHistory.push(score);
  greenBtn.disabled = true;
  redBtn.disabled = true;
  yellowBtn.disabled = true;
  blueBtn.disabled = true;
  startBtn.disabled = false;
  audio = new Audio(
    "https://assets.mixkit.co/sfx/preview/mixkit-little-piano-game-over-1944.mp3"
  );
  audio.play();
};

// Função para fazer brilhar os botoes na sequência //

const initialSequence = () => {
  randomOrder.forEach((valor, index) => {
    setTimeout(() => {
      if (valor === 0) {
        displayAdd.className = "display-green";
        audio = new Audio(
          "https://d7d3471nr939s.cloudfront.net/RootsRevival_Noiz_SP/MP3/One+Shots/34_G_Piano_SP_222_02.mp3?cb=eab168e9-f94e-466f-ab2f-f9a2dfa7659d"
        );
        audio.play();

        setTimeout(() => (displayAdd.className = "display"), 1000);
      } else if (valor === 1) {
        displayAdd.className = "display-red";
        audio = new Audio(
          "https://d7d3471nr939s.cloudfront.net/RootsRevival_Noiz_SP/MP3/One+Shots/34_A_Piano_SP_222_08.mp3?cb=f6a44aab-9145-40d7-aec0-bf69a0d9d0ed"
        );
        audio.play();
        setTimeout(() => (displayAdd.className = "display"), 1000);
      } else if (valor === 2) {
        displayAdd.className = "display-yellow";
        audio = new Audio(
          "https://d7d3471nr939s.cloudfront.net/RootsRevival_Noiz_SP/MP3/One+Shots/34_A_Piano_SP_222_03.mp3?cb=65c2ed1d-8b14-4d4d-95fd-fa0bb03843b1"
        );
        audio.play();
        setTimeout(() => (displayAdd.className = "display"), 1000);
      } else {
        displayAdd.className = "display-blue";
        audio = new Audio(
          "https://d7d3471nr939s.cloudfront.net/RootsRevival_Noiz_SP/MP3/One+Shots/34_A_Piano_SP_222_02.mp3?cb=d51ce799-90a7-40f6-aedf-a5ad635c3f8c"
        );
        audio.play();
        setTimeout(() => (displayAdd.className = "display"), 1000);
      }
    }, index * 1500);
  });
};

// Função para fazer brilhar os botoes + som//

const activeButton = (index) => {
  if (index === 0) {
    greenBtn.className = "shine-green";
    audio = new Audio(
      "https://d7d3471nr939s.cloudfront.net/RootsRevival_Noiz_SP/MP3/One+Shots/34_G_Piano_SP_222_02.mp3?cb=eab168e9-f94e-466f-ab2f-f9a2dfa7659d"
    );
    audio.play();
    setTimeout(() => (greenBtn.className = "button-green"), 1000);
  } else if (index === 1) {
    redBtn.className = "shine-red";
    audio = new Audio(
      "https://d7d3471nr939s.cloudfront.net/RootsRevival_Noiz_SP/MP3/One+Shots/34_A_Piano_SP_222_08.mp3?cb=f6a44aab-9145-40d7-aec0-bf69a0d9d0ed"
    );
    audio.play();
    setTimeout(() => (redBtn.className = "button-red"), 1000);
  } else if (index === 2) {
    yellowBtn.className = "shine-yellow";
    audio = new Audio(
      "https://d7d3471nr939s.cloudfront.net/RootsRevival_Noiz_SP/MP3/One+Shots/34_A_Piano_SP_222_03.mp3?cb=65c2ed1d-8b14-4d4d-95fd-fa0bb03843b1"
    );
    audio.play();
    setTimeout(() => (yellowBtn.className = "button-yellow"), 1000);
  } else {
    blueBtn.className = "shine-blue";
    audio = new Audio(
      "https://d7d3471nr939s.cloudfront.net/RootsRevival_Noiz_SP/MP3/One+Shots/34_A_Piano_SP_222_02.mp3?cb=d51ce799-90a7-40f6-aedf-a5ad635c3f8c"
    );
    audio.play();
    setTimeout(() => (blueBtn.className = "button-blue"), 1000);
  }
};

// Adicionar histórico ao menu //

function addHistoryToMenu() {
  const sortedHistory = scoreHistory.sort((a, b) => a - b);
  sortedHistory.forEach((scoreValue) => {
    const addLi = document.createElement("li");
    addLi.textContent = `Pontuação ${scoreValue}`;
    ulHistory.appendChild(addLi);
  });
}
