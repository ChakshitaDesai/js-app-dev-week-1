const myHobbies = ['coding','painting','swimming', 'talking', 'sleeping'];
console.log(myHobbies[4]);
console.log(myHobbies[0]);
console.log(myHobbies[(5-1)/2]);
console.log(myHobbies.length);

myHobbies.push('hiking');
console.log(myHobbies);

const lastHobby = myHobbies.pop();
console.log(lastHobby);
console.log(myHobbies);

console.log(myHobbies.shift());
const firstHobby = myHobbies.unshift('new hobby');
console.log(firstHobby);
console.log(myHobbies);
console.log(myHobbies.shift());
console.log(myHobbies);


const myArr = ['cat','dog','mouse'];
//myArr[10] = 'bird'; //[ 'cat', 'dog', 'mouse', <7 empty items>, 'bird' ]
myArr.push('bird');
console.log(myArr);

// slice and splice

const numArr = [1,2,3,4,5];
const slicedArr = numArr.slice(0,3);// slice(index, length)start from 0 position till 3rd element = 4th position
console.log(slicedArr);

numArr.splice(0,2,'a','b','c');// splice(index, index)
console.log(numArr);

// iterative over array

const animalArr = ['dogs','cats','mice','mouse'];
// use coeircion

animalArr.forEach(function(item,index){
  console.log(item + 'is index' + index);
});

console.log(animalArr);
console.log((animalArr.toString());
console.log(animalArr.join('&'));
console.log(animalArr.sort());
console.log({[99,3,45,72,8].sort()});
