const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}



const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver= false;


winningScoreSelect.addEventListener('change', function(){
  winningScore = parseInt(this.value);
})

function updateScore(player, opponent){
  if(!isGameOver){
    if (player.score !== winningScore) {
      player.score += 1;
      if(player.score === winningScore){
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true; //deactivăm butoanele
        opponent.button.disabled = true;
      }
      player.display.textContent = player.score;
    }
  }
}

p1.button.addEventListener('click', function () {
  updateScore(p1,p2);
})

p2.button.addEventListener('click', function () {
  updateScore(p2,p1);
})


  resetButton.addEventListener('click', reset);
  
  
  
  function reset(){
  
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false; //deactivăm butoanele
    p2.button.disabled = false;
}

