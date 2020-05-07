/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/





var scores, roundScore,activePlayer,dice;


 scores = [0,0];
 roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';




function next_player(){
    activePlayer === 0 ? activePlayer = 1: activePlayer =0;
        roundScore =0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
    
}


function btn_roll(){
    
    
   //1. Random Number 
    
    dice = Math.floor(Math.random()*6 +1);
    
    // 2. Display the score in photos
    
    document.querySelector('.dice').style.display = 'block' ;
    
    document.querySelector('.dice').src = 'dice-' +dice+ '.png';
    
    //3. Update the round score if the number rolled is not 1
    
    if(dice!==1)
        {
            //add score
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
             document.querySelector('.dice').style.display = 'none';
        }
    else{
        // next players turn
        next_player();
    }
    
    
}
document.querySelector('.btn-roll').addEventListener('click',btn_roll);



function btn_hold(){
    
    //Add current score to global score
    scores[activePlayer] += roundScore;
    
    // Update the UI
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    
    
    // Check if the user has won
    if(scores[activePlayer]>=100)
        {
            document.getElementById('name-'+activePlayer).innerHTML='WINNER';
        }
    else{
         next_player();
    }
    
}


document.querySelector('.btn-hold').addEventListener('click',btn_hold);




































//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;








/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
