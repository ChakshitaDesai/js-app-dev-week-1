// // // higher order functions
// // function calTip(amount){
// //   return amount * 0.2;
// // }
// // function calTotal(calcFunction, amount){
// //   //return calTip(calcFunction, amount); for cleaner code and reusability
// //   return calcFunction(amount)+amount;
// // }
// // const partyOneTotal = calTip(100)+100;
// // console.log(partyOneTotal);
// //
// // const partyTwoTotal = calTotal(calTip, 35);
// // console.log(partyTwoTotal);
// //
// // // earlier pusp pop is doing with primitive type like strings calling primitive value but here taking callback function as paramerter
// //
// // const animals = [
// //   {
// //     name: 'monkey',
// //     habitat: 'jungle'
// //   },
// //   {
// //     name: 'racoon',
// //     habitat: 'forrest'
// //   },
// //   {
// //     name: 'tiger',
// //     habitat: 'jungle'
// //   },
// //   {
// //     name: 'pelican',
// //   habitat: 'ocean'
// //   }
// // ];
// //
// // const jungleAnimals = [];
// //
// // for(let i = 0; i < animals.length; i++){
// //  if(animals[i].habitat === 'jungle'){
// //    jungleAnimals.push(animals[i]);
// //  }
// //  }
// //  //console.log(jungleAnimals);// construct new data instead of mutating what we have
// //
// // const filteredJungleAnimals = animals.filter(function(animal){
// // // console.log(animal);
// // //   return animal.name;
// // return animal !== null;
// // // return animal.habitat === 'jungle';//
// // });
// // console.log(filteredJungleAnimals);
// //
// // for(let i = 0; i < animals.length; i++){
// //  if(animals[i].habitat !== 'jungle'){
// //    delete animals[i];
// //  }
// //  }
// //  console.log(animals);
// //
// //  // find stop once it hits the first example
// //  // map iterate over an array and produce another array very useful
// //
// //
// //  const family = [
// //    {
// //      name: 'mom',
// //      age: 45,
// //    },
// //    {
// //      name: 'dad',
// //      age: 39,
// //    },
// //    {
// //      name: 'brandon',
// //      age: 6
// //    },
// //    {
// //      name: 'chelsea',
// //      age: 2,
// //    },
// //  ];
// //  const familyInTwelveYears = [];
// //
// //  for(let i = 0; i < family.length; i++)
// //  {
// //    familyInTwelveYears.push({
// //      name: family[i].name,
// //      age: family[i].age + 12,
// //    });// returning whole family object
// //  }
// //  console.log(familyInTwelveYears);
// //
// //  //if using map
// //  const familyInFiveYears = family.map(function(member){
// //    return {
// //      name: member.name,
// //      age: member.age + 12,
// //    };
// //  });
// //  console.log(familyInFiveYears);
// //
// //  // reduce
// //  // taking students array objects refer MDN article for
//
//  const family = [
//    {
//      name: 'mom',
//      age: 45,
//    },
//    {
//      name: 'dad',
//      age: 39,
//    },
//    {
//      name: 'brandon',
//      age: 6
//    },
//    {
//      name: 'chelsea',
//      age: 2,
//    },
//  ];
//
//  // lets say we want a list as string of all family memberrs names
//
//  let familyNames = '';
//  for (let i = 0; i < family.length; i++){
//    if (i === family.length - 1 ){
//     familyNames += family[i].name;
//   } else if (i === family.length - 2){
//     familyNames += family[i].name + ', & ';
//   }else {
//     familyNames += family[i].name + ', ';
//   }
//    //familyNames += ',' + family[i].name;// familyNames + family[i].name;
//  }
//  console.log(familyNames);
//
//  const familyNamesWithAge = family.reduce(function(familyNames, member,
//  currentIndex, familyArray){
//    if (currentIndex === familyArray.length -1){
//      return familyNames + member.name + ' is ' + member.age;
//    }else if ( currentIndex === fmailyArray.length - 2){
//      return familyNames + member.name + ' is '
//    }
//    return familyNames + member.name + ' is ' + member.age + ',';
//  },'');
//  console.log(familyNamesWithAge);


// Asynchronous Programming
//avoid program to deadlock


// function.bind behaves as objects
// invoke andnot declare we use.call(), .apply() pass as array

// functionContext

const teacher = {
  name: 'kevin',
  age: 26,
  greet: function() {
    setTimeout(function(){
      console.log('oh, hello. I didn\'t see you ther, my name is ' +
    this.name);
//  }, 2000);//oh, hello. I didn't see you ther, my name is undefined
}.bind(this),2000);//oh, hello. I didn't see you ther, my name is kevin
  }
}
//teacher.greet();


//teacher.greet.call(teacher);

const dog = {
  name: 'Rover',
  age: 7,
  sayAge: function() {
    console.log("I am "+ this.age+ " years old");
  }
}
teacher.greet(); // is better than using below 2 lines
// teacher.greet.call(dog);
// dog.sayAge.apply(teacher);


const utils = {
  ageInTenYears: function(){
    console.log("I will be "+ (this.age + 10) + " in ten years.");
  }
};
utils.ageInTenYears.call(teacher);//teacher context
// I will be 36 in ten years.
//not this  oh, hello. I didn't see you ther, my name is kevin


//setinterval set time out difference

setTimeout(function(){
  console.log(('I ran afer 1 sec');
}, 1000);

// setInterval(function() {
//   console.log('I run every 2 seconds');
// }, 2000);

let counter = 0;
const twoSecondLog = setInterval(function() {
  console.log('I run every 2 seconds');
  counter++;
}, 2000);

fucntion stopCounter() {
  if (counter>3){
    clearInterval(twoSecondLog);
  }//,2000)// 4 times
}
// if (counter>3){
//   clearInterval(twoSecondLog);
// }// 2 7 times
