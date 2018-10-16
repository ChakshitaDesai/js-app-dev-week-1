
const handsArray = ['rock','paper','scissors'];
var player1count = 0;
var player2count = 0;
function getHand(){

  return handsArray[parseInt((Math.random()*10)%3)];

}

const player1 = {
  name: 'sam',
  getHand: getHand
}
const player2 = {
  name: 'kim',
  getHand: getHand
}
function playRound(player1, player2){

    var p1 = player1.getHand();
    var p2 = player2.getHand();

    console.log(p1);
    console.log(p2);

    if (p1 == p2){
      console.log(" It's a tie! ");
    }else if (
        p1 === 'rock' && p2 === 'scissors'
        ||
        p1 === 'scissors' && p2 === 'paper'
        ||
        p1 === 'paper' && p2 === 'rock'

     ) {
        console.log("winner is " + player1.name);
        player1count++;
        //console.log(player1count);
      }
        else {
        console.log("winner is " + player2.name);
        player2count++;
          //console.log(player2count);
      }
//else {
  //console.log("No Winner");
//}

}
function playGame( player1, player2, playUntil){
  while (!!(player1count < playUntil) &&  !!(player2count < playUntil)){
    playRound(player1, player2);
    console.log(player1count);
    console.log(player2count);
  }
}


playGame( player1, player2, 5);
