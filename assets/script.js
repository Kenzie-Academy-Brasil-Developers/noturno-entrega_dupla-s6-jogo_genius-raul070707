let randomOrder = [];
let playerOrder = [];
let lastPlayerOrder = [];
let score = 0;

// Mapeando botões //

const startBtn = document.querySelector(".start");
const greenBtn = document.querySelector(".button-green");
const redBtn = document.querySelector(".button-red");
const yellowBtn = document.querySelector(".button-yellow");
const blueBtn = document.querySelector(".button-blue");
const displayAdd = document.querySelector(".display");
const scoreDisplay = document.querySelector(".scoreDisplay");
const addDiv = document.createElement("div");
displayAdd.appendChild(addDiv);

startBtn.onclick = () => startClick();
greenBtn.onclick = () => click(0);
redBtn.onclick = () => click(1);
yellowBtn.onclick = () => click(2);
blueBtn.onclick = () => click(3);

// Função atualizar score //

const updScore = () => {
  scoreDisplay.innerHTML = score;
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
};

// Função de click //

const click = (color) => {
  playerOrder[playerOrder.length] = color;
  console.log(`Player order é ${playerOrder}`);
  checkSequence();
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
};

// Função sequência incorreta //

const gameOver = () => {
  scoreDisplay.innerHTML = `Você perdeu! Sua pontuação foi ${score}`;
  startBtn.innerHTML = "Reiniciar";
};