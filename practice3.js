// // // var filters = [12,5,8,130,44];
// // //
// // // var filtered = filters.filter(function isBigEnough(value){
// // //   return value>=10;
// // // });
// // //console.log(filtered);
// //
// // // // or
// // //  function isBigEnough(value){
// // //    return value>=10;
// // //  }
// // //  var filtered = [12,5,8,130,44].filter(isBigEnough);
// // // //console.log(filtered);
// // //
// // // function toUpperArray(items) {
// // //       if (!items.length) return []             // end condition
// // //       var head = items[0]                      // item to operate on
// // //       head = head.toUpperCase()                // perform action
// // //       var tail = items.slice(1)                // next
// // //       return [head].concat(toUpperArray(tail)) // recursive step
// // //    }
// // //
// // //    toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']
// // //
// // // const superHeroes = [["Batman", "Bruce Wayne"], ["Spiderman", "Peter Parker"], ["The Flash", "Barry Allen"]];
// // // var secretIdentity = superHeroes.map(function(revealArray){
// // // //   return revealArray[0]+ ' is ' + revealArray[1];// return revealArray.join(" is ");
// // // // });
// // // console.log(secretIdentity.join('\n'));
// //
// // var players = [
// // 	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
// // 	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
// // 	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
// // 	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
// // 	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
// // 	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
// // 	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
// // ];
// //
// // const a = players.find(function(player){
// //   return player.firstName === 'Mike';
// // })
// // console.log(a);// output { firstName: 'Mike',
// //   // lastName: 'Tolbert',
// //   // // position: 'RB',
// //   // touchdowns: 8 }
// // const b = players.filter(function(pos){
// //   return pos.position === 'RB';
// // })
// // console.log(b);
// // // // out put object
// // // [ { firstName: 'Jonathan',
// // //     lastName: 'Stewart',
// // //     position: 'RB',
// // //     touchdowns: 12 },
// // //   { firstName: 'Mike',
// // //     lastName: 'Tolbert',
// // //     position: 'RB',
// // //     touchdowns: 8 },
// // //   { firstName: 'Fozzy',
// // //     lastName: 'Whittaker',
// // //     position: 'RB',
// // //     touchdowns: 3 } ]
// //
// //
// // const c = players.map(function(ln){
// //   return ln.lastName;
// // })
// // console.log(c);
// // //output
// // // [ 'Newton',
// // //   'Anderson',
// // //   'Stewart',
// // //   'Tolbert',
// // //   'Whittaker',
// // //   'Ginn',
// // //   'Funchess' ]
// // const d = b.filter(function(td){
// //   if( td.touchdowns > 5){
// //     return td.firstName + " " + td.lastName};
// //
// // });
// //
// // console.log(d);
// // // //output
// // // [ { firstName: 'Jonathan',
// // //     lastName: 'Stewart',
// // //     position: 'RB',
// // //     touchdowns: 12 },
// // //   { firstName: 'Mike',
// // //     lastName: 'Tolbert',
// // //     position: 'RB',
// // //     // touchdowns: 8 } ]
// // const e = b.reduce(function (count,current) {
// //   return count + current.touchdowns;
// // }, 0);
// // console.log(e);//23
//
// //
// // setTimeout(function(){
// // 	console.log('later')
// // },2000);
// //
// // console.log('now');
// // button.addEventListener('click', function(){
// // 	alert('click');
// // // })
// // getData('/my-api/data', function(data) {
// // 	console.log('got data', data)
// // });
// // var teacher = {
// // 	name: 'Shane',
// // 	speak: function() {
// //
// // 		//Maybe you're fetching data from an API, or getting user input
// // 		setTimeout(function(){
// // 			console.log('later my name is ' + this.name);
// // 		},1000)
// //
// // 		//Runs immediately
// // 		console.log('Now my name is ' + this.name);
// // 	}
// // }
// // Now my name is Shane
// // // later my name is undefined
// //
// // teacher.speak();
// //
// // var teacher = {
// // 	name: 'Shane',
// // 	speak: function() {
// //
// // 		//Save this to a variable
// // 		var self = this;
// //
// // 		//self is visible inside function because of closure
// // 		setTimeout(function(){
// // // 			console.log('later my name is ' + self.name);
// // // 		},1000);
// // // 	}
// // // // }
// // // // teacher.speak();
// // // later my name is Shane
// // var teacher = {
// // 	name: 'Shane',
// // 	speak: function() {
// //
// // 		//Bind a function to a specific context
// // 		var boundFunction = function(){
// // 			console.log('later my name is ' + this.name);
// // // 		}.bind(this);
// // //
// // // 		//boundFunction will always run in bound context
// // // 		setTimeout(boundFunction,1000);
// // // 	}
// // // }
// // // teacher.speak();// prints after a second
// // var teacher = {name: 'Shane'};
// //
// // var speak = function(item1, item2){
// // 	console.log(this.name, item1, item2);
// // }
// //
// // speak.call(teacher, 'coffee', 'ramen'); //'Shane', 'coffee', 'ramen' takes one by one argumentts
// // speak.apply(teacher, ['coffee', 'ramen']); //'Shane', 'coffee', 'ramen' takes array of arguments
//
//
// var slideshow = {
//     photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],
//
//     currentPhotoIndex: 0,
//
//     nextPhoto: function() {
//         if(this.currentPhotoIndex < this.photoList.length - 1) {
//             this.currentPhotoIndex++;
//             console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
//         } else {
//             console.log('End of Slideshow');
//               this.pause();
//         }
//     },
//
//     prevPhoto: function() {
//         if(this.currentPhotoIndex > 0) {
//             this.currentPhotoIndex--;
//             console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
//         } else {
//             console.log('Start of Slideshow');
//
//         }
//     },
//
//     getCurrentPhoto: function() {
//         return this.photoList[this.currentPhotoIndex];
//     },
//
//     playInterval: null,
//
//     play: function() {
//         var self = this;
//         this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
//     },
//
//     pause: function() {
//         clearInterval(this.playInterval);
//     }
//
// }
// //console.log(slideshow.getCurrentPhoto());
//
// console.log(slideshow.play());
// // console.log(slideshow.nextPhoto());
// // console.log(slideshow.nextPhoto());


//OO


// function Teacher(name) {
// 	this.name = name;
// 	this.teach = function() {
// 		console.log(this.name + " says constructors are cool");
// 	}
// }
//
// var teacher1 = new Teacher('Shane');
// var teacher2 = new Teacher('Assaf');
//
// teacher1.teach();
// teacher2.teach();

/*
Constructor Exercise
Write a `Particle` constructor function

- The constructor takes `startX` and `startY` parameters

- Particle will have a property of `x` that defaults to the value of the argument `startX`

- Particle will have a property of `y`that defaults to the value of the argument `startY`

- Particle will have a property of `velocity` that defaults to {x: 0, y: 0}

- Create an empty array named `particles`

- Write loop to create 100 particles

    - x values will be assigned from 0-99

    - y will be random from 0 to 500 (`Math.random()*500`)
*/
// function Particle(startX, startY){
//   this.x = startX;
//   this.y = startY;
//   this.velocity = {x: 0, y: 0};
//
// }
// var particles = [];
// for(var i = 0; i<100; i++){
//   particles.push(new Particle(i, Math.random()*500));
//
// }
// console.log(particles);
// function Teacher(name) {
// 	this.name = name;
// }
//
// Teacher.prototype = {
// 	teach: function(){
// 		console.log('Prototypes are important, says ' + this.name);
// 	}
// }
//
// var shane = new Teacher('shane');
// shane.teach();
// var name2 = new Teacher('chen');
// name2.teach();
// //create constructor
// function Teacher(name) {
//   this.name = name;
//   }
//   Teacher.prototype = {
//     teach: function(){
//       console.log('Prototypes are not important, says '+this.name);
//     }
//   }
//   var name2 = new Teacher('chen');
//   name2.teach();
// function Teacher() {}
//
// Teacher.prototype = {
// 	disposition: 'evil'
// }
//
// var shane = new Teacher();
// var assaf = new Teacher();
// console.log(shane.disposition, assaf.disposition) //evil, evil
//
// Teacher.prototype.disposition = 'happy';
// console.log(shane.disposition, assaf.disposition) //happy, happy

// function Teacher(name){
//   this.name = name;
//   // this.teach = function (){
//   //   console.log(this.name + "says");
//   // }
// }
// // Teacher.prototype = {
// //  teach: fucntion(){
// //     console.log(this.name + "says");
// //   },
// // }
// Teacher.prototype = {
//     teach: function(){
//       //console.log('Prototypes are not important, says '+this.name);
//       console.log(this.name + " says");
//     }
//   }
//
// var teacher1 = new Teacher('shane');
// var teacher2 = new Teacher('assaf');
// teacher1.teach();
// teacher2.teach();
// //console.log(teacher1, teacher2.teach());
//
// Teacher.prototype.teach = 'change';
// //console.log(teacher1.teach, teacher2.teach);
// console.log(teacher1.teach);
// console.log(teacher2.teach);
///http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/
// function Tree(typeOfTree){// this.typeOfTree = typeOfTree;
//    console.log("type of tree is "+typeOfTree);}// this is a constructor of tree
// // invoke tree constructor function.
// // var banyanTree = new Tree("Banyan Tree");
// // banyanTree.Tree;
//function Employee () {}
//
// Employee.prototype.firstName = "Abhijit";
// Employee.prototype.lastName = "Patel";
// Employee.prototype.startDate = new Date();
// Employee.prototype.signedNDA = true;
// Employee.prototype.fullName = function () {
// console.log(this.firstName + " " + this.lastName);
// };
//
// var abhijit = new Employee () //
// abhijit.fullName(); // Abhijit Patel
// console.log(abhijit.signedNDA); // true
// prototype pattern and now below is constructor pattern

// function Employee (name, profession){
//   this.name = name;
//   this.profession = profession;
// // }
//
//function Employee () {}

// Employee.prototype = {
//   name: ' deep'
// }
// // var me = new Employee ("chax","developer")
// // console.log(me.name, me.profession);
// // // me is the new object created fromt the Employee() constructor boundFunction
// var me = new Employee();
// var she = new Employee();
// var him = new Employee();
// she.name = 'chaku';
//
// console.log(she.name,);
// console.log(me.name, she.name, him.name);
// // out put
//  chaku
// //  deep chaku  deep
//
// //----------prototype change-------------
// function Person(){
// 	this.brain = true;
// };
// function Student(){
// 	this.computer = true;
// };
// function Graduate(){
// 	this.skillz = 'Mad'
// };
//
// var p = new Person();
// Student.prototype = p;
//
// var s = new Student();
// Graduate.prototype = s;
//
// var g = new Graduate();//A property name is resolved by looking at the instance first. If the instance doesn't have a property with that name, then JS looks at the instance's prototype.
// // say g.computer computer as property name looks at instance g i.e graduate property first it does not have computer property so it goes tto look at the instance' i.e graduate prototype that is here assinged  s - student property i.e computer - true
// console.log(g.skillz, g.computer, g.brain);//Mad true true
// console.log(g.hasOwnProperty('skillz'), g.hasOwnProperty('computer'), g.hasOwnProperty('brain'));
//true fals false
