let randomOrder = [];
let playerOrder = [];
let lastPlayerOrder = [];
let score = 0;

// Mapeando botões //

const startBtn = document.querySelector(".start");
const greenBtn = document.getElementById("buttonGreen");
const redBtn = document.getElementById("buttonRed");
const yellowBtn = document.getElementById("buttonYellow");
const blueBtn = document.getElementById("buttonBlue");
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
  activeButton();
};

// Função de click //

const click = (color) => {
  playerOrder[playerOrder.length] = color;
  console.log(`Player order é ${playerOrder}`);
  checkSequence();
  activeButton();
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

// Função para fazer brilhar os botoes //

const activeButton = () => {
  randomOrder.forEach((index) => {

      if(index === 0){

        greenBtn.className = 'shine-green'
  
        setTimeout(() => greenBtn.className ='button-green', 2000);

      } else if(index === 1){

        redBtn.className = 'shine-red'
  
        setTimeout(() => redBtn.className ='button-red', 2000);

      } else if(index === 2){

        yellowBtn.className = 'shine-yellow'
  
        setTimeout(() => yellowBtn.className ='button-yellow', 2000);

      } else {

        blueBtn.className = 'shine-blue'
  
        setTimeout(() => blueBtn.className ='button-blue', 2000);
      }
  })
}