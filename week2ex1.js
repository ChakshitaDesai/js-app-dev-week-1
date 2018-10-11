
var billAmount = 100;
//var n = billAmount.toFixed(2);

function gratuity(amount1){
  return amount1 * 0.2;
  }
function totalWithGrat(amount2){
  var gratuityAmount = gratuity(amount2) + amount2;
  return gratuityAmount;
    }
totalWithGrat(billAmount);
console.log(" your total including gratuity is: " + totalWithGrat(billAmount).toFixed(2));

/*
const cars = {
  careOne: "s",
  careTwo: "v",
  carThree: "b",
};
const cars = ['s','v','b'];
function isArray(value){
  return !!(typeof value === 'object' && value.length);
}

console.log(cars);
console.log(typeof cars);
console.log(Object.keys(cars));

console.log(carsArr);
console.log(isArray(carsArr));
console.log(carsArr.entries()); */
//var add = function (a,b) { return a + b};
greet('kevin');

function greet(name){
  console.log("hello" + name);
  }

  // this is just assigned function
  let add = function(a,b){
    return a+b;
  }
  console.log(add(3,4));
  add = function(a, b, c){
    return a+b+c;
  }
console.log(add(4,5,19));

add = function(){
  let sum = 0;
  for(let i =0; arguments.length > i; i++){
    sum += arguments[i];
  }
  return sum;
}
console.log(add(3,6,19,89239,3,303));
