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

  
//******************** 
//Game Play Question 1

  alert('OK Here a few qustions about myself -- Please respond with YES or NO');

  var questionTexas = prompt('I am from Texas?');
  // Response Manipulation
  console.log ('User Input1: ' + questionTexas);
  questionTexas = questionTexas.toUpperCase();
  console.log ('Uppercase Input1: ' + questionTexas);

  if (questionTexas === 'YES'){
    alert(userName +' ARE CORRECT! I am from Denton, Texas. Home to the University of North Texas, Peterbuilt Trucks, and Josten\'s Jewelry');
    correctCounter++;  
  } else{
     alert( 'Sorry ' + userName + ',I am from Denton, Texas.   It is about 30 minutes north of Dallas');
     incorrectCounter++;
  }
  console.log('Correct Awnser #: ' +correctCounter);

//********************   
//Game Play Question 2


   var questionGuitar = prompt('I know how to play the guitar!');
   // Response Manipulation
   console.log ('User Input2: ' + questionGuitar);
   questionGuitar = questionGuitar.toUpperCase();
   console.log ('Uppercase Input2: ' + questionGuitar);
 
    if (questionGuitar === 'NO'){
      alert(userName +' ARE CORRECT! I am know how to play the piano, and the violin. But not the guitar!');
      correctCounter++;
    } else{
      alert( 'Sorry ' + userName + ',I cannot play the guitar, but really want to learn.');
      incorrectCounter++;
    }
  console.log('Correct Awnser #: ' +correctCounter);
//********************
//Game Play Question 3


  var questionCPR = prompt('I know CPR.');
  // Response Manipulation
  console.log ('User Input: ' + questionCPR);
  questionCPR = questionCPR.toUpperCase();
  console.log ('Uppercase Input: ' + questionCPR);

  if (questionCPR === 'YES'){
    alert(userName +' ARE CORRECT! My first job was a life-guard. I held an instructor trainer certification from the American Red Cross in CPR and first-aid, although not currently certified.');
    correctCounter++;

  } else{
    alert( 'Your lucky' + userName + ', I once did. and I could possibly save your life.');
    incorrectCounter++;
  }
    console.log('Correct Awnser #: ' +correctCounter);

//********************
// Play Question 4
var questionSport = prompt('My Favorite sport to watch is Football.');

// Response Manipulation

console.log ('User Input: ' + questionSport);
questionSport = questionSport.toUpperCase();
console.log ('Uppercase Input: ' + questionSport);

 if (questionSport === 'NO'){
   alert(userName +' ARE CORRECT! Although I am a huge Husky and Seahawk fan.  I enjoy watching soccer and baseball more.');
   correctCounter++;
  } else{
   alert( 'Sorry ' + userName + ', Although I am a huge Husky and Seahawk fan.  I enjoy watching soccer and baseball more.');
   incorrectCounter++;
  }
 console.log('Correct Awnser #: ' +correctCounter);
 //********************  
//Game Play Question 5
var questionFly = prompt('I know how to fly a plane?');

// Response Manipulation
console.log ('User Input5: ' + questionFly);
questionFly = questionFly.toUpperCase();
console.log ('Uppercase Input5: ' + questionFly);

 if (questionFly === 'YES'){
   alert(userName +' believe it or not.  I DID recieve my pilot\'s license before my drivers liscense!');
   correctCounter++;
  } else{
   alert( 'Sorry ' + userName + ', I DID recieve my pilot\'s license at the age of 15!');
   incorrectCounter++;
  }
  
  console.log('Correct Awnser #: ' +correctCounter)
// Soccer Jerzey Question
  var soccerNumber = 8;
  var soccerNumberGuess;
  
  for (var i =0 ; i <3 ; i++){
    soccerNumberGuess = prompt('What Jersery Number did I where playing soccer?');
    soccerNumberGuess = parseInt(soccerNumberGuess,10);
    console.log('Number Guessed: '+soccerNumberGuess);
    console.log('Incorrect Responses:' + incorrectCounter);
    console.log('Correct Responses: ' + correctCounter);

    if(soccerNumber === soccerNumberGuess){
      alert( "You are correct");
      correctCounter++;
      break;
    }else if (soccerNumber > soccerNumberGuess){
      alert('My soccer number is greater then your guess of ' + soccerNumberGuess);
      incorrectCounter++;   
    }else if (soccerNumber < soccerNumberGuess){
      alert('My soccer number is lower then your guess of ' + soccerNumberGuess); 
      incorrectCounter++;
    }
  }
  var correctCity = false;
  var citiesVisited = ['NEW YORK', 'MILAN', 'DALLAS','SPOKANE','PORTLAND','BELFAST', 'DUBLIN'];
  var cityGuessed;

  for (var ii =0; ii <5 ; ii++){
     if (correctCity===true){
      console.log('AARRGGGG!!!!');
      break;
     }
    cityGuessed = prompt('What is one of my favorite cities?');
    cityGuessed = cityGuessed.toUpperCase();
    console.log ('User City Gussed: ' + cityGuessed);
   
      
    
    
    
    for(var i=0; i < citiesVisited.length; i++){
      if (citiesVisited[i] === cityGuessed){
        correctCity = true;
      }
    }
    console.log(citiesVisited[i] + ' : '+ correctCity + ':' + cityGuessed);
    if(correctCity=== false){
      alert('I have never been to ' + cityGuessed + '!  We should plan a trip. You have ' + (5-ii) + ' guesses remaining.');
      incorrectCounter++;
    }else {
      alert('You are correct.  I love '+ cityGuessed);
      correctCounter++;
    }

  }

  alert('Thanks for playing ' + userName+ '.  Out of ' + (correctCounter + incorrectCounter)+ ' opportunities you awnsered ' + correctCounter + ' correctly.');
  

 }