// Create a game of 'Rock Paper Scissors' that runs until one player has three wins
//
//  - Store the player names and number of wins for each player in variables
//  - Use a while loop to run the game until one player has 3 wins
//  - Use:
//    ```
//    var weapons = ['rock' , 'paper', 'scissors'];
//
//    var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
//    ```
//   ```
//    to randomly select an item
//  - Output each players hand to the console
//  - Use an `if` or `switch` statement to determine a winner of the round
//  - Output the round winner's name to the console
//  - Create a way to track how many rounds each player has won
//  - When one player wins 3 rounds, announce that player's name as the game winner
//  - Push the code to our class GitHub Repo

var player1 = 'Kim';
var player2 = 'Tim';
var player1Win = 0;
var player2Win = 0;
var round = 1;

var weapons = ['rock','paper','scissors'];

while(player1Win !== 3  && player2Win !== 3){

  var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length)%3];
  var player1Hand = weaponOfChoice;
  console.log(player1Hand);
  var weaponOfChoice2 = weapons[parseInt(Math.random()*weapons.length)%3];
  var player2Hand = weaponOfChoice2;
  console.log(player2Hand)


  if(player1Hand === 'rock' && player2Hand === 'scissors'
     ||
     player1Hand === 'scissors' && player2Hand === 'paper'
     ||
     player1Hand === 'paper' && player2Hand === 'rock'){
       player1Win += 1;
    console.log("Player1 " + player1 + " is the winner of the round"+round);
    console.log("player1Win = " + player1Win);
      console.log("player2Win = " + player2Win );
  } else {
    player2Win += 1;
    console.log("Player2 " + player2 + " is the winner of the round"+round);
    console.log("player2Win = " + player2Win );
      console.log("player1Win = " + player1Win);
  }

  round +=1;
}
// tie condition not given , consider player2 wins if tie
