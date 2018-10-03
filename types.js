let myVar = 'I am a string';
console.log(typeof myVar);
myVar = 2;
console.log(typeof myVar);
//type coersion from one datatype to another implicit
// grab a text input from web say change
const myAge = '26';
//how old in 5 yrs
const newAge = myAge + 5;
//will give 265
console.log(newAge);
console.log(typeof newAge);

//explicit coercion

let amountRaisedSoFar = 1000;
const newDonation = '50';
amountRaisedSoFar = Number(newDonation)+amountRaisedSoFar;
const strAmount = String(amountRaisedSoFar);
console.log(typeof strAmount);
console.log('we now have '+ strAmount + '!');


let nothing;
console.log(nothing);
nothing ='null';
console.log(nothing);
