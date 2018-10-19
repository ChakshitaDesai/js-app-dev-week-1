// // // function multiply(num1, num2){
// // //   return num1*num2;
// // // }
// // // var product = multiply(4,5);
// // // console.log(product);
// // // // functin name -argument list- body/ code block
// // // // takes any num of arguments regardless of their declaired signaute
// // // //also arguments are optional for functions
// // // // in ES6 function arguments can be pre-defined
// // // console.log(multiply(1));//NaN
// // // // console.log(multiply(5,6,10));
// // // // function multiply(num1=9, num2=10){
// // // //   return num1*num2;
// // // // }
// // // // console.log(multiply());
// // // function add() {
// // //   var sum = 0;
// // //   for ( var i = 0; i < arguments.length; i++){
// // //     sum += arguments[i];
// // //   //  console.log(sum);
// // //   }
// // //   return sum;
// // //
// // // }
// // // console.log(add(1,2,3,4,5,6,7,8));
// //
// // //
// // // var billAmount = 100.776;
// // //  function gratuity(){
// // //   var amt = billAmount*0.2;
// // //   return amt;
// // // }console.log(gratuity());
// // // function totalWithGrat(){
// // //   var totalgratuity = gratuity()+billAmount;
// // //   return totalgratuity;
// // // }console.log("your total including gratuity is : " + totalWithGrat().toFixed(2));
// // //
// // // // Functions as Objects can be instantiated, assigned , reassigned and passed around like variable
// // // // Functions as Variables
// // // var add = function(a,b){return a+b;}// Function Assignment without function name
// // // // Function Declaration is function add(){} syntax
// // // console.log(add);
// // // console.log(add());
// // // //[Function: add]
// // // //NaN
// //
// // hoisted();// function Declaration
// // function hoisted(){
// //   console.log("foo");
// // }
// // notHoisted();
// // var notHoisted = function(){
// //   console.log("foo");
// // };//TypeError: notHoisted is not a function
//
// //
// // var calculator = {
// //   add: function(a,b){
// //     return a+b;
// //   }
// // }
// // console.log(calculator.add(4,5));// like with arrays and objects
// //
// // var arrayOfMystery = [
// //   ['apple','orange'],
// //   { name: 'fruits'},
// //   function(){return arrayOfMystery[1].name}
// // ];
// // console.log(arrayOfMystery[2]());
// // console.log(arrayOfMystery[0]);
// // console.log(arrayOfMystery[0][1]);
//
// // exercise 2 revisit rock p s
//
// const hands = ['rock','paper','scissors'];
// var player1Count = 0;
// var player2Count = 0;
// var round = 1;
//
// function getHand(){
//   var getHand = hands[parseInt((Math.random()*10)%3)];
//   return getHand;
// }
//
// // var players = {
// //   name: ['Kim','Tim','Sim','Dim'],
// //   getHand: getHand(),
// // }
// var player1 = {
//   name: 'Kim',
//   getHand: getHand(),
// }
// var player2 = {
//   name: 'Tim',
//   getHand: getHand(),
// }
// var player3 = {
//   name: 'Sim',
//   getHand: getHand(),
// }
// // var player4 = {
// //   name: 'Dim',
// //   getHand: getHand(),
// // }
// // var teamAwinner = {
// //
// //   getHand: getHand(),
// // }
// // var teamBwinner = {
// //   getHand: getHand(),
// // }
//
//  function playRound(){
// winner = null;
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
// playGame(player1, player2, 5);
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
// //
//
// //
//
//
// //// function greeting(name){
// //   var greetings = 'hi ';
// //   return greetings + name;
// // }
// // console.log(greeting('kim'));
// // //console.log(greetings);//ReferenceError: greetings is not defined
//
//
// ///
// //
// // function outer() {
// // 	var x = 'x';
// // 	function inner() {
// // 		var y = 'y';
// // 		console.log(x); //'x'
// // 	}
// // 	console.log(x); // 'x'
// 	//console.log(y); // ReferenceError: y is not defined
// }
// // var landscape = function() {
// //     var result = "";
// //
// //     var flat = function(size) {
// //         for (var count = 0; count < size; count++)
// //             result += " _ ";
// //     };
// //
// //     var mountain = function(size) {
// //         result += "/";
// //         for (var count = 0; count < size; count++)
// //             result += " '";
// //         result += "\\";
// //     };
// //
// //     flat(3);
// //     mountain(4);
// //     flat(6);
// //     mountain(1);
// //     flat(1);
// //     return result;
// // };
// //
// // // console.log(landscape());
//
// //Scope, closure, and hoisting, oh my!
//
// function createFunction() {
// 	var a = "Hans Zimmer Rules!";
// 	var inception = function() {
// 		console.log(a);
// 	}
// }
//
// //var inception; need not to var here if its global inside funciton scope as ' inception - without var, if var inceptiion is inside function then here reference error will come inception is not defined'
// createFunction();
// inception(); // "Hans Zimmer Rules!"


/// Inside Function, this keyword refers to the object  (executor of the function) that is executing the function.
var teacher = {
	name: 'Assaf',
	sayName: function() {
		console.log(this.name);
	}
}
teacher.sayName();// here teacher is the object that is and is exevutin the function sayName aso this.nname is teacher.name

// different objects can execute same function n produce diffeerent result as this is differenct for diff objects
