let randomOrder = [];
let playerOrder = [];
let lastPlayerOrder = [];
let score = 1;

// Mapeando botões //

const startBtn = document.querySelector(".start");
const greenBtn = document.getElementById("buttonGreen");
const redBtn = document.getElementById("buttonRed");
const yellowBtn = document.getElementById("buttonYellow");
const blueBtn = document.getElementById("buttonBlue");
const displayAdd = document.querySelector(".display");
const scoreDisplay = document.querySelector(".scoreDisplay");
const check = document.querySelector('.check');
const addDiv = document.createElement("div");
displayAdd.appendChild(addDiv);

startBtn.onclick = () => startClick();
greenBtn.onclick = () => click(0);
redBtn.onclick = () => click(1);
yellowBtn.onclick = () => click(2);
blueBtn.onclick = () => click(3);

// Função atualizar score //

const updScore = () => {
  check.innerHTML = `Lvl: ${score}`;
  addDiv.innerHTML = `Ordem do player:${lastPlayerOrder}, Ordem aleatória: ${randomOrder}`;
};
updScore();

// Função iniciar jogo //

const startClick = () => {
  randomOrder = [];
  playerOrder = [];
  score = 1;
  startBtn.innerHTML = "Jogando";
  randomColor();
  updScore();
  initialSequence();
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
  setTimeout(() => initialSequence(), 3000)
};

// Função sequência incorreta //

const gameOver = () => {
  scoreDisplay.innerHTML = `Você perdeu! Sua pontuação foi ${score}`;
  startBtn.innerHTML = "Reiniciar";

  startBtn.disabled = false;
};

// Função para fazer brilhar os botoes na sequência //

const initialSequence = () => {
  randomOrder.forEach((valor, index) => {
    
    setTimeout(() =>{

      if(valor === 0){

        displayAdd.className = 'display-green'
  
        setTimeout(() => displayAdd.className ='display', 1000);

      } else if(valor === 1){

        displayAdd.className = 'display-red'
  
        setTimeout(() => displayAdd.className ='display', 1000);

      } else if(valor === 2){

        displayAdd.className = 'display-yellow'
  
        setTimeout(() => displayAdd.className ='display', 1000);

      } else {

        displayAdd.className = 'display-blue'
  
        setTimeout(() => displayAdd.className ='display', 1000);
      }
    }, index * 1500)
  })
}

// Função para fazer brilhar os botoes //

const activeButton = (index) => {
  if(index === 0){

    greenBtn.className = 'shine-green'

    setTimeout(() => greenBtn.className ='button-green', 1000);

  } else if(index === 1){

    redBtn.className = 'shine-red'

    setTimeout(() => redBtn.className ='button-red', 1000);

  } else if(index === 2){

    yellowBtn.className = 'shine-yellow'

    setTimeout(() => yellowBtn.className ='button-yellow', 1000);

  } else {

    blueBtn.className = 'shine-blue'

    setTimeout(() => blueBtn.className ='button-blue', 1000);
  }
}