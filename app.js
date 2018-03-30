var scores, roundScore, activePlayer, dice ,gamePlaying;
init();
var lastdice;

document.querySelector('.btn-roll').addEventListener('click',function()
{
  if(gamePlaying){
    var dice = Math.floor(Math.random()*6)+1;
   
    var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice + '.png';
     if(dice === 6 && lastdice === 6){
       scores[activePlayer]=0;
       document.querySelector('#score-' + activePlayer).textContent= '0';

     }
     else if(dice!==1){
       roundScore += dice;
       document.querySelector('#current-' + activePlayer).textContent= roundScore;
     }
     else{
      nextPlayer();
   
     }
     lastdice = dice;
  }
  /*var dice1 = Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;

    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    if(dice1 !==1 && dice2!==1){
      roundScore += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent= roundScore;
    }
    else{
     nextPlayer(); 
  
    }
*/
  
});
document.querySelector('.btn-hold').addEventListener('click',function(){
  if(gamePlaying){
    scores[activePlayer]+=roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
     var input= document.querySelector('.final-score').value;
     var winningscore;
    if(input){
      winningscore = input;
    }
    else{
      winningscore = 50;
    }
 


    if(scores[activePlayer] >= winningscore){
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
      document.querySelector('.dice').style.display = 'none';
      /*document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';*/
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying=false;
    }
    else{
      nextPlayer();
    }
  }



});
function nextPlayer(){
  activePlayer === 0? activePlayer=1 :activePlayer=0;
  roundScore=0;
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
  /*document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';*/
}

document.querySelector('.btn-new').addEventListener('click' , init);

function init(){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  document.querySelector('.dice').style.display='none';
  /*
  document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';*/
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}
