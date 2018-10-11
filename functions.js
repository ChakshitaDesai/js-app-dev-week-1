/*function  somethhing (somethhing)
{
  console.log(somethhing);


function add(number1, number2){
   return number1 + number2;
}
var = function
*/
/*
function add(a=1, b=2){
  console.log(add);
}
add();

*/
function add(){
  var sum = 0;
  for (var i = 0; i<arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
const addTotal = add(1,2,3,4,5,6,7,8);
console.log('addTotal is ' + addTotal);
