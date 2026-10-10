let score = {
  win: 0,
  lost: 0,
  tie: 0,
  displayScore: function() {
    return `Won: ${score.win} , Lost: ${score.lost} , Tie : ${score.tie}`;
  }
};
function genrateComputerChoice() {
  //this will genrate a random number between 0 to 3
  randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getresult(userMove, computerMove) {
  if (userMove == "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "User won";
    } else if (computerMove === "Bat") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Stump") {
      score.lost++;
      return `Computer has won`;
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Bat") {
      score.lost++;
      return `Computer has won`;
    } else if (computerMove === "Stump") {
      score.win++;
      return "User won";
    }
  } else {
    if (computerMove === "Ball") {
      score.lost++;
      return `Computer has won`;
    } else if (computerMove === "Bat") {
      score.win++;
      return "User won";
    } else if (computerMove === "Stump") {
      score.tie++;
      return `It's a tie`;
    }
  }
}

function printres(computerChoice, result) {
  console.log(score);
  alert(
    `You have chosen Stump and Computer chosen ${computerChoice}
    
    Result : ${result}
    ${score.displayScore()}
    `);
}
