//Truthhy/Falsey Values
//NaN not a number num / infinity to tes isNAN()
// combining conitionall && and ||
// challenge 2

// while loop

let y = 100;
while ( y > 0){
  console.log(y);
  y -= 1;
  //console.log(x);
}
//run for ever
for ( i = 0; i !== 'foo'; i++) {
  console.log(i);
}


// switch (expression) {
let x = 'Manager';
switch (x) {
  case 'CEO':
      console.log('CEO');
      break;
  case 'VP':
    console.log('VP');
    break;
  case 'Manager':
    console.log('Manager');
    break;
  default:
    console.log('Associate');

}

// Break vs Continue
for(let i = 1 ; i <=60; i++){
  if (i % 3 === 0) {
  console.log(i + " is divisible by 3")
}else {
  console.log(i);
}
  if (i % 3 !== 0){
  continue;
  }

}

// 1000 div by 27 break outdoors
let j = 1000;

while ( j >= 0){

     console.log(j);

     if(j % 27 === 0){
       break;
     }
     j--;
}
