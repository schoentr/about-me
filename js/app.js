'use strict';

var correctCounter = 0;
var incorrectCounter =0;
var userName = prompt('Welcome!  What is your name?');

//********************
// See if the want to play a game
var game = confirm( 'Hello ' + userName + '!  Click ok if you want to play a game. Cancel to exit.');
console.log ('game play: ' + game);

if(game === false){ 
    alert('Thats okay ' +userName + '..  maybe next time!');
} else{     


  // ** NEW QUESTION GAME PLAY ACTION
  var questionCounter=0;
  var correctCounter=0;
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
    alert('Sorry you are incorrect!')
  }
}
//******************** 
//Game Play Question 1

  // alert('OK Here a few qustions about myself -- Please respond with YES or NO');

//   var questionTexas = prompt('I am from Texas?');
//   // Response Manipulation
//   console.log ('User Input1: ' + questionTexas);
//   questionTexas = questionTexas.toUpperCase();
//   console.log ('Uppercase Input1: ' + questionTexas);

//   if (questionTexas === 'YES'){
//     alert(userName +' ARE CORRECT! I am from Denton, Texas. Home to the University of North Texas, Peterbuilt Trucks, and Josten\'s Jewelry');
//     correctCounter++;  
//   }else{
//     alert( 'Sorry ' + userName + ',I am from Denton, Texas.   It is about 30 minutes north of Dallas');
//     incorrectCounter++;
//   }
//   console.log('Correct Awnser #: ' +correctCounter);

// //********************   
// //Game Play Question 2


//    var questionGuitar = prompt('I know how to play the guitar!');
//    // Response Manipulation
//    console.log ('User Input2: ' + questionGuitar);
//    questionGuitar = questionGuitar.toUpperCase();
//    console.log ('Uppercase Input2: ' + questionGuitar);
 
//   if (questionGuitar === 'NO'){
//     alert(userName +' ARE CORRECT! I am know how to play the piano, and the violin. But not the guitar!');
//     correctCounter++;
//   }else{
//     alert( 'Sorry ' + userName + ',I cannot play the guitar, but really want to learn.');
//     incorrectCounter++;
//   }
//   console.log('Correct Awnser #: ' +correctCounter);
// //********************
// //Game Play Question 3


//   var questionCPR = prompt('I know CPR.');
//   // Response Manipulation
//   console.log ('User Input: ' + questionCPR);
//   questionCPR = questionCPR.toUpperCase();
//   console.log ('Uppercase Input: ' + questionCPR);

//   if (questionCPR === 'YES'){
//     alert(userName +' ARE CORRECT! My first job was a life-guard. I held an instructor trainer certification from the American Red Cross in CPR and first-aid, although not currently certified.');
//     correctCounter++;

//   }else{
//     alert( 'Your lucky' + userName + ', I once did. and I could possibly save your life.');
//     incorrectCounter++;
//   }
//   console.log('Correct Awnser #: ' +correctCounter);

// //********************
// // Play Question 4
// var questionSport = prompt('My Favorite sport to watch is Football.');

// // Response Manipulation

// console.log ('User Input: ' + questionSport);
// questionSport = questionSport.toUpperCase();
// console.log ('Uppercase Input: ' + questionSport);

//   if (questionSport === 'NO'){
//    alert(userName +' ARE CORRECT! Although I am a huge Husky and Seahawk fan.  I enjoy watching soccer and baseball more.');
//    correctCounter++;
//   }else{
//    alert( 'Sorry ' + userName + ', Although I am a huge Husky and Seahawk fan.  I enjoy watching soccer and baseball more.');
//    incorrectCounter++;
//   }
//   console.log('Correct Awnser #: ' +correctCounter);
//  //********************  
// //Game Play Question 5
//   var questionFly = prompt('I know how to fly a plane?');

// // Response Manipulation
//   console.log ('User Input5: ' + questionFly);
//   questionFly = questionFly.toUpperCase();
//   console.log ('Uppercase Input5: ' + questionFly);

//   if (questionFly === 'YES'){
//    alert(userName +' believe it or not.  I DID recieve my pilot\'s license before my drivers liscense!');
//    correctCounter++;
//   } else{
//    alert( 'Sorry ' + userName + ', I DID recieve my pilot\'s license at the age of 15!');
//    incorrectCounter++;
//   }
  
//   console.log('Correct Awnser #: ' +correctCounter)
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
      alert( "You are correct");
      correctCounter++;
      isCorrect= true;
      break;
    }else if (randomNumber > numberGuess){
      alert('My number is greater then your guess of ' + numberGuess);
    }else if (randomNumber < numberGuess){
      alert('My number is lower then your guess of ' + numberGuess); 
    }
    if(isCorrect === false){
      alert('Sorry ' + userName + ' you are not correct.')
      incorrectCounter++;
    }
  }
  var playAgain = prompt(userName + ', Would you like to play again? (YES / NO)');
  }while(playAgain ==='YES')


//   // Question 7 -- CITIES I WOULD LIVE
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
