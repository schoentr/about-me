'use strict';

var correctCounter = 0;
var questionCounter = 0;
var userName;

//********************
// See if the want to play a game


// New functions

function getName() {
  var userName = prompt('Welcome!  What is your name?');

  return(userName);

}



function gamePlay() {

  var game = confirm( 'Hello ' + userName + '!  Click ok if you want to play a game. Cancel to exit.');
  console.log ('game play: ' + game);

  if(game === false){
    alert('Thats okay ' +userName + '..  maybe next time!');
  } else{
    firstFiveQuestions();
    question6();
    question7();
  }



  function firstFiveQuestions(){

    // ** NEW QUESTION GAME PLAY ACTION

    var question= [['Am I from Colorado','NO'],
      ['Do I know how to play the guitar?','NO'],
      ['Do I know CPR?', 'YES'],
      ['My Favorite Sport to play is Football?', 'NO'],
      ['I know how to fly a plane?', 'YES']];


    for( var i = 0; i < question.length; i++){
      questionCounter++;
      console.log (i);
      var questionGuess = prompt(question[i][0]);
      questionGuess=questionGuess.toUpperCase();
      console.log('guess:' + questionGuess, question[i][0],question[i][1]);
      if(questionGuess ===question[i][1]){
        alert('You are correct!');
        correctCounter++;
      }else{
        alert('Sorry you are incorrect!');
      }
    }

  }


  function question6(){
    // QUESTION  # 6 -- RANDOM NUMBER
    var randomNumber =  Math.floor(Math.random() * Math.floor(10));
    console.log('Random Number : '+randomNumber);

    var numberAttempts =3;
    var isCorrect =false;
    do{
      questionCounter++;
      for(var i=0; i<numberAttempts; i++){
        if(i<(numberAttempts-1)){
          var numberGuess = prompt('I have randomly piked a number between 1-10. You have ' +(numberAttempts-i)+' attempts. What do you think it is?');
        }else {
          var numberGuess = prompt('I have randomly piked a number between 1-10. You have 1 attempt left. What do you think it is?');
        }
        numberGuess = parseInt(numberGuess,10);
        console.log (numberGuess);
        if(randomNumber === numberGuess){
          alert( 'You are correct');
          correctCounter++;
          isCorrect= true;
          break;
        }else if (randomNumber > numberGuess){
          alert('My number is greater then your guess of ' + numberGuess);
        }else if (randomNumber < numberGuess){
          alert('My number is lower then your guess of ' + numberGuess);
        }
        if(isCorrect === false){
          alert('Sorry ' + userName + ' you are not correct.');
        }
      }
      var playAgain = prompt(userName + ', Would you like to play again? (YES / NO)');
    }while(playAgain ==='YES');

  }


  function question7(){
  // Question 7 -- CITIES I WOULD LIVE
    var correctCity = false;
    var cityWouldLive = ['NEW YORK', 'AUSTIN', 'DALLAS','CHICAGO','STOCKHOLM','BELFAST', 'ROME'];
    var cityGuessed;
    questionCounter++;

    for (var x =0; x <5 ; x++){
      if (correctCity===true){
        break;
      }
      cityGuessed = prompt('What Cities would I like to live?');
      cityGuessed = cityGuessed.toUpperCase();
      console.log ('User City Gussed: ' + cityGuessed);
      for(var i=0; i < cityWouldLive.length; i++){
        if (cityWouldLive[i] === cityGuessed){
          correctCity = true;
        }
      }
      console.log(cityWouldLive[i] + ' : '+ correctCity + ':' + cityGuessed);
      if(correctCity=== false){
        alert('Sorry '+ cityGuessed + ' is not in my favorite 7 places to live. You have ' + (5-x) + ' guesses remaining.');
      }else {
        alert('You are correct.  I love '+ cityGuessed +'.' );
        correctCounter++;
      }

    }
    alert('The cities I would live New York, Austin, Dallas, Chicago, Stockholm, Belfast,  and Rome.');
    alert('Thanks for playing ' + userName+ '.  Out of ' + questionCounter + ' questions you awnsered ' + correctCounter + ' correctly.');}


}
userName = getName();
gamePlay();
