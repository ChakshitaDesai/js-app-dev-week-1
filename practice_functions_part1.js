// // function multiply(num1, num2){
// //   return num1*num2;
// // }
// // var product = multiply(4,5);
// // console.log(product);
// // // functin name -argument list- body/ code block
// // // takes any num of arguments regardless of their declaired signaute
// // //also arguments are optional for functions
// // // in ES6 function arguments can be pre-defined
// // console.log(multiply(1));//NaN
// // // console.log(multiply(5,6,10));
// // // function multiply(num1=9, num2=10){
// // //   return num1*num2;
// // // }
// // // console.log(multiply());
// // function add() {
// //   var sum = 0;
// //   for ( var i = 0; i < arguments.length; i++){
// //     sum += arguments[i];
// //   //  console.log(sum);
// //   }
// //   return sum;
// //
// // }
// // console.log(add(1,2,3,4,5,6,7,8));
//
// //
// // var billAmount = 100.776;
// //  function gratuity(){
// //   var amt = billAmount*0.2;
// //   return amt;
// // }console.log(gratuity());
// // function totalWithGrat(){
// //   var totalgratuity = gratuity()+billAmount;
// //   return totalgratuity;
// // }console.log("your total including gratuity is : " + totalWithGrat().toFixed(2));
// //
// // // Functions as Objects can be instantiated, assigned , reassigned and passed around like variable
// // // Functions as Variables
// // var add = function(a,b){return a+b;}// Function Assignment without function name
// // // Function Declaration is function add(){} syntax
// // console.log(add);
// // console.log(add());
// // //[Function: add]
// // //NaN
//
// hoisted();// function Declaration
// function hoisted(){
//   console.log("foo");
// }
// notHoisted();
// var notHoisted = function(){
//   console.log("foo");
// };//TypeError: notHoisted is not a function

//
// var calculator = {
//   add: function(a,b){
//     return a+b;
//   }
// }
// console.log(calculator.add(4,5));// like with arrays and objects
//
// var arrayOfMystery = [
//   ['apple','orange'],
//   { name: 'fruits'},
//   function(){return arrayOfMystery[1].name}
// ];
// console.log(arrayOfMystery[2]());
// console.log(arrayOfMystery[0]);
// console.log(arrayOfMystery[0][1]);

// exercise 2 revisit rock p s

// var hands = ['rock','paper','scissors'];
// var round = 1;
// function getHand(){
//   var getHand = hands[parseInt((Math.random()*10)%3)]
//   return getHand;
// }
// // var players = {
// //   name: [{player1: "kim"}, {player2: "tim"}],
// //   player_hands:[ function(){return getHand(player1)}, function(){return getHand(player2)}]
// // }
//
// var player1 = {
//   name: 'kim',
//   getHand: getHand()
// }
// var player2 = {
//   name: 'tim',
//   getHand: getHand()
// }
// //while ( round !== 5){
// //console.log(player1.getHand);
// console.log("player1 gets hand " + round + "= " + player1.getHand);
// //console.log(player2.getHand);
// console.log("player2 gets hand " + round + "= " + player2.getHand);
//  function playRound(p1, p2){
//  //var p1 = player1.getHand();
//   if ( player1.getHand === player2.getHand){
//        console.log("Its a tie! ");
//   } else if (
//     player1.getHand === 'rock' && player2.getHand === 'scissors'
//     ||
//     player1.getHand === 'scissors' && player2.getHand === 'paper'
//     ||
//     player1.getHand === 'paper' && player2.getHand === 'rock'
//     ){
//      // console.log(" hand played by player1 is "+player1());
//      // console.log(" hand played by player2 is "+player2());
//     return console.log(" Winner is Player1 : " + player1.name);
//     }else {
//      return console.log(" Winner is Player2 : " + player2.name);
//    }
//
//  }round +=1;
//  //}
// console.log(playRound());

function greeting(name){
  var greetings = 'hi ';
  return greetings + name;
}
console.log(greeting('kim'));
//console.log(greetings);//ReferenceError: greetings is not defined
