
const handsArray = ['rock','paper','scissors'];

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
      }
        else {
        console.log("winner is " + player2.name);
      }

}


playRound(player1, player2);
