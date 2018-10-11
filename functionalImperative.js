//add one to everymem in array
const arrayOne = [2, 6, 9, 18];

for(let i = 0; i < arrayOne.length; i++){
  arrayOne[i] += 1;
}
console.log(arrayOne);
// here i have a value i wanna take that value and change original value using for looop

const arrayTwo = [ 4, 77, 9, 3];

console.log(arrayTwo);

const arrayPlusFive= arrayTwo.map(function(x) {
  //function calling the function parameter of function is a fucntion ; x is our paramerter
  return x + 5;
})
console.log(arrayTwo);
console.log(arrayPlusFive);
