 //(session 1 exercise 2)

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

// Trying better code and along with Bonus Question
//  function playRound(){
// var winner = null;
// console.log('\n'+ player1.name + " :player1 gets hand " + round + " as " + player1.getHand);
// console.log(player2.name + " :player2 gets hand " + round + " as " + player2.getHand);
//   if ( player1.getHand === player2.getHand){
//        console.log(" hand played by player1 is "+player1.getHand+ "in round " +round);
//        console.log(" hand played by player2 is "+player2.getHand+ "in round " +round+ '\n');
//        console.log(">>>Its a tie!<<<"+ '\n');
//        winner = null;
//   } else if (
//     player1.getHand === 'rock' && player2.getHand === 'scissors'
//     ||
//     player1.getHand === 'scissors' && player2.getHand === 'paper'
//     ||
//     player1.getHand === 'paper' && player2.getHand === 'rock'
//     ){
//        console.log(" hand played by player1 is "+player1.getHand+ " in round " +round);
//        console.log(" hand played by player2 is "+player2.getHand+ " in round " +round+ '\n');
//        console.log(" Winner is Player1 : " + player1.name+ ' \n');
//        winner = player1.name;
//         player1Count += 1;
//        }
//         else {
//       console.log(" hand played by player1 is "+player1.getHand+ "in round " +round);
//       console.log(" hand played by player2 is "+player2.getHand+ "in round " +round + '\n');
//       console.log(" Winner is Player2 : " + player2.name+ ' \n');
//       winner = player2.name;
//        player2Count += 1;
//       }
// console.log("Hands played so far : " +round);
// console.log(" *** Winner for Round " +round+ " is : " +winner+ ' *** \n');
//  round +=1;
// }
//
//  function playGame(player1, player2, playUntil){
//      while(!!(player1Count < playUntil) && !!(player2Count < playUntil)){
//       playRound();
//       console.log("   Player1 wins " +player1Count+ " times \n");
//       console.log("   Player2 wins " +player2Count+ " times \n");
//       if(player1Count === player2Count){
//         return null;
//        }
//
//  console.log(" New round to begin is Round:: "+round);
// }
//   }
//
//   // function playTournament(player1,player2, player3, player4, playUntil){
//   //   playGame(player1, player2, playUntil)
//   //   {
//   //     if(player1Count > player2Count){
//   //       console.log(" Team A winner is " + player1.name+ "- The Player1");
//   //       return teamAwinner = player1;
//   //     } else {
//   //       console.log(" Team A winner is " + player2.name+ "- The Player2");
//   //       return teamAwinner = player2;
//   //     }
//   //   }
//   //
//   //   playGame(player3, player4, playUntil)
//   //   {
//   //     if(player3Count > player4Count){
//   //       console.log(" Team B winner is " + player3.name+ "- The Player3");
//   //       return teamBwinner = player3;
//   //     } else {
//   //       console.log(" Team B winner is " + player4.name+ "- The Player4");
//   //       return teamBwinner = player4;
//   //     }
//   //   }
//   //
//   //   playGame(teamAwinner, teamBwinner, playUntil)
//   //   {
//   //     if(teamAwinner > teamBwinner){
//   //       console.log(" Team A wins and " + teamAwinner+ " is the World Champion");
//   //       return teamBwinner;
//   //     } else {
//   //       console.log(" Team B winner is " + teamBwinner+ " is the World Champion");
//   //       return teamBwinner;
//   //     }
//   //   }
//   // }
//   //
//   // playTournament(player1,player2, player3, player4, 3)
//
// playGame(player1, player2, 5);
