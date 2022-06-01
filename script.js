'use strict';
let random=Math.floor((Math.random()*20)+1);
let score=20;
let highScore=0;


document.querySelector('.check').addEventListener('click',function (){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='no number selected...';
    }else if(guess<random){
        if(score!==1){
            document.querySelector('.message').textContent='too low!';
            document.querySelector('.score').textContent=--score;
        }else{
            document.querySelector('.message').textContent='R.I.P Bozo!!';
            document.querySelector('.score').textContent=0;
        } 
    }else if(guess>random){
        if(score!==1){
            document.querySelector('.message').textContent='too high!';
            document.querySelector('.score').textContent=--score;
        }else{
            document.querySelector('.message').textContent='R.I.P Bozo!!';
            document.querySelector('.score').textContent=0;
        }    
    }else if(guess===random){
        if(highScore>score){
            document.querySelector('.highscore').textContent=highScore;
        }else{
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
        document.querySelector('.number').textContent=guess;
        document.querySelector('.message').textContent='correct  number!!';
        document.querySelector('.highscore').textContent=highScore;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
    }
});

document.querySelector('.again').addEventListener('click', function (){
    score=20;
    random=Math.floor((Math.random()*20)+1);
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    

});