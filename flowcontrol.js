let x = false;
if (x) {
  console.log('the condition is true');
} else if (x==false) {
  console.log('the condition is not true')
}else {
  console.log('this won\'t run');
}
//comparison operators
const comparisoneOne = 10 > 9;
const comparisonTwo = 10 >= 10;
console.log(comparisoneOne);
console.log(comparisonTwo);

//loss comparison operators types are equal but not

const isEqual = 10 =='10';
console.log(isEqual);
// strict comparison ooperators
const isStrictEqual = 10 === '10';
console.log(isStrictEqual);
const isNotEqual = 10 != '11';
console.log(isNotEqual);
const isNotStrictEqual = 10 !== '11';
console.log(isNotStrictEqual);
const isTruthy = "string";
console.log(!!isTruthy);//data has value but not true or myBoolFalse
