// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <0.34){
//     computerChoice = "rock";
// }else if(computerChoice <=0.67){
//     computerChoice = "paper";
// }
// else{
//     computerChoice = "scissors";
// }
// var compare = function(choice1,choice2){
//     if(choice1===choice2){
//         return "The result is a tie!";
//     }
//     if(choice1==="rock"){
//         if(choice2==="scissors"){
//             return "rock wins";
//         }
//         else{
//             return "paper wins";
//         }
//     }
//     if(choice1==="paper"){
//         if(choice2==="rock"){
//             return "paper wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
//     if(choice1==="scissors"){
//         if(choice2==="rock"){
//             return "rock wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
// };
// console.log(compare(userChoice,computerChoice));
const hands = ['rock','paper','scissors'];
var Count1 = 0;
var Count2 = 0;
var round = 1;
var winner = null;
function getHand(){
  var getHand = hands[parseInt((Math.random()*10)%3)];
  return getHand;
}

// var players = {
//   name: ['Kim','Tim','Sim','Dim'],
//   getHand: getHand(),
// }
var player1 = {
  name: 'Kim',
  getHand: getHand,
  playRound: playRound,
//  playGame: playGame
}
var player2 = {
  name: 'Tim',
  getHand: getHand,
    playRound: playRound,
    //playGame: playGame
}
var player3 = {
  name: 'Sim',
  getHand: getHand,
  playRound: playRound,
  //playGame: playGame
}
var player4 = {
  name: 'Dim',
  getHand: getHand,
    playRound: playRound,
    //playGame: playGame
}
// var teamAwinner = {
//
//   getHand: getHand(),
// }
// var teamBwinner = {
//   getHand: getHand(),
// }
//
 function playRound(p1,p2){
// winner = null;
var p1 = this.getHand;console.log(p1);
var p2 = this.getHand;console.log(p2);
//console.log('\n'+ this.name + " :player1 gets hand " + round + " as " + this.getHand());
if ( p1 === p2){
     //console.log(" hand played by player1 is "+this.getHand()+ "in round " +round);
     //console.log(" hand played by player2 is "+this.getHand()+ "in round " +round+ '\n');
     console.log(">>>Its a tie!<<<"+ '\n');
     winner = null;
}
else if(p1 === 'rock'&& p2 ==='scissors'
||
p1  === 'scissors'&& p2 ==='paper'
||
p1 === 'paper'&& p2 === 'rock'){ var n1 = this.name; console.log(n1);
  //console.log(" hand played by player1 is "+this.getHand()+ " in round " +round);
  console.log(" Winner is : " + n1+ ' \n');
  winner = n1;
   Count1 += 1;
}  else {
  var n2 = this.name; console.log(n2);
  console.log(" Winner is : " + n2+ ' \n');
  winner = n2;
   Count2 += 1;
}

//console.log(this.name + " :player2 gets hand " + round + " as " + this.getHand());
  // if ( this.getHand() === this.getHand()){
  //      console.log(" hand played by player1 is "+this.getHand()+ "in round " +round);
  //      console.log(" hand played by player2 is "+this.getHand()+ "in round " +round+ '\n');
  //      console.log(">>>Its a tie!<<<"+ '\n');
  //      winner = null;
  // } else if (
  //   this.getHand()=== 'rock' && this.getHand() === 'scissors'
  //   ||
  //   this.getHan()d === 'scissors' && this.getHand() === 'paper'
  //   ||
  //   this.getHand() === 'paper' && this.getHand() === 'rock'
  //   ){
  //      console.log(" hand played by player1 is "+this.getHand()+ " in round " +round);
  //      console.log(" hand played by player2 is "+this.getHand()+ " in round " +round+ '\n');
  //      console.log(" Winner is Player1 : " + this.name+ ' \n');
  //      winner = this.name;
  //       player1Count += 1;
  //      }
  //       else {
  //     console.log(" hand played by player1 is "+this.getHand()+ "in round " +round);
  //     console.log(" hand played by player2 is "+this.getHand()+ "in round " +round + '\n');
  //     console.log(" Winner is Player2 : " + this.name+ ' \n');
  //     winner = this.name;
  //      player2Count += 1;
//console.log("Hands played so far : " +round);
console.log(" *** Winner for Round " +round+ " is : " +winner+ ' *** \n');
 round +=1;
}

 function playGame() {
   var playUntil = function(){
     while(!!(winner === null)){
       return winner;
     }
   }

     //while(!!(Count1 < playUntil) && !!(Count2 < playUntil)){

      this.playRound;
      if(Count1 === Count2){
        return null;
       }
      else if (Count1 > 0){console.log("   PlayerA wins " +Count1+ " times \n");} else{
      console.log("   PlayerB wins " +Count2+ " times \n");}


 console.log(" New round to begin is Round:: "+round);
}


player3.playRound();
player2.playRound();
playGame();
//
// player3.playRound();
// player4.playRound();
// // player1.playGame();
// player2.playGame();
