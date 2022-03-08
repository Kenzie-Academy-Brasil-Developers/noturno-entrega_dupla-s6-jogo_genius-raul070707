let randomOrder = [];
let playerOrder = [];
let score = 0;

// Mapeando botões //

const startBtn = document.querySelector(".start");
const greenBtn = document.querySelector(".button-green");
const redBtn = document.querySelector(".button-red");
const yellowBtn = document.querySelector(".button-yellow");
const blueBtn = document.querySelector(".button-blue");
const scoreDisplay = document.querySelector(".scoreDisplay");

startBtn.onclick = () => startClick();
greenBtn.onclick = () => click(0);
redBtn.onclick = () => click(1);
yellowBtn.onclick = () => click(2);
blueBtn.onclick = () => click(3);


// Função atualizar score //

const updScore = () => {
    scoreDisplay.innerHTML = score;
}
updScore();

// Função iniciar jogo //

const startClick = () => {
  randomOrder = [];
  playerOrder = [];
  score = 0;
  randomColor();
};

// Função de click //

const click = (color) => {
  playerOrder[playerOrder.length] = color;
  console.log(`Player order é ${playerOrder}`);
  checkSequence();
};

// Função para gerar cor aleatória //

const randomColor = () => {
  randomOrder[randomOrder.length] = Math.floor(Math.random() * 4);
  console.log(`Random order é ${randomOrder}`);
};

// Função para checar o resultado //

const checkSequence = () => {
  for (let counter in playerOrder) {
    if (playerOrder[counter] != randomOrder[counter]) {
      gameOver();
      break;
    }
    if (playerOrder.length == randomOrder.length) {
      lvlUp();
    }
  }
};

// Função sequência correta //

const lvlUp = () => {
  randomColor();
  score++;
  updScore();
};

// Função sequência incorreta //

const gameOver = () => {
  randomOrder = [];
  playerOrder = [];
  console.log("Você perdeu");
};
