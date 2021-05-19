var userChoice = [];
var compChoice = [];
const choices = ['red', 'blue', 'green', 'yellow'];
var gameInProgress = false;

$(".btn.blue").click(function() {
  $(".btn.blue").fadeOut(150).fadeIn(150);
  var blueAudio = new Audio('sounds/blue.mp3');
  blueAudio.play();
  userChoice.push("blue");
  checkAccuracy();
});

$(".btn.red").click(function() {
  $(".btn.red").fadeOut(150).fadeIn(150);
  var redAudio = new Audio('sounds/red.mp3');
  redAudio.play();
  userChoice.push("red");
  checkAccuracy();
});

$(".btn.yellow").click(function() {
  $(".btn.yellow").fadeOut(150).fadeIn(150);
  var yellowAudio = new Audio('sounds/yellow.mp3');
  yellowAudio.play();
  userChoice.push("yellow");
  checkAccuracy();
});

$(".btn.green").click(function() {
  $(".btn.green").fadeOut(150).fadeIn(150);
  var greenAudio = new Audio('sounds/green.mp3');
  greenAudio.play();
  userChoice.push("green");
  checkAccuracy();
});

$(document).keypress(function() {
  if (gameInProgress == false) {
    gameInProgress = true;
    startGame();
  }
});


function startGame() {
  setUpNextLevel(1);
}

function checkAccuracy() {
  var userChoiceLength = userChoice.length;
  var compChoiceLength = compChoice.length;
  var nextLevel = compChoiceLength + 1;

  if (userChoiceLength < compChoiceLength) {
    if (userChoice[userChoiceLength - 1] != compChoice[userChoiceLength - 1]) {
      stopGame();
    }
  } else if (userChoiceLength == compChoiceLength) {
    if (userChoice[userChoiceLength - 1] != compChoice[userChoiceLength - 1]) {
      stopGame();
    } else {
      setUpNextLevel(nextLevel);
    }
  }
}


function setUpNextLevel(level) {
  userChoice.length = 0;
  setTimeout(function() {
    $('h1').text("Level " + level.toString());
  }, 200);
  chooseBox = choices[Math.floor(Math.random() * 4)];
  compChoice.push(chooseBox);
  setTimeout(function() {
    $("." + chooseBox).fadeOut(100).fadeIn(100);
  }, 1000);
}

function stopGame() {
  var gameOver = new Audio('sounds/wrong.mp3');
  gameOver.play();
  $('body').addClass('game-over');
  setTimeout(function (){
    $('body').removeClass('game-over');
  }, 200);
  $('h1').text("Game Over, Press Any Key To Restart")
  compChoice.length = 0;
  gameInProgress = false;
}


// playGame();
