let computerChoice;
function genrateComputerChoice()
{
         //this will genrate a random number between 0 to 3
        randomNumber = Math.random() * 3;
        if (randomNumber > 0 && randomNumber <= 1) {
          computerChoice = 'Bat';
        } else if (randomNumber > 1 && randomNumber <= 2) {
          computerChoice = 'Ball';
        } else {
          computerChoice = 'Stump';
        }
}