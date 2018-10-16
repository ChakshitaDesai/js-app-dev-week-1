// // var teachers = ["shane","zack"];
// // console.log(teachers[1]);
// // console.log(teachers.length);
// // teachers.push("tane","cane");
// // //console.log(teachers);
// // //var teachers1 = teachers.pop();
// // //console.log(teachers1);
// // //console.log(teachers);
// // var teachers2 = teachers.unshift("kim","pin");
// // //console.log(teachers2);
// // //console.log(teachers1);
// // console.log(teachers);
// // //var teacher3 = teachers.shift();
// // //console.log(teachers);
// // //teachers[3] = "Tim";
// // //console.log(teachers);
// // //find a item
// // //console.log(teachers.indexOf("pin"));
// // //console.log(teachers.slice(2,4));
// // console.log(teachers.splice(2,3,'5','bye',5));
// // console.log(teachers);
// // for (var i = 0; i<teachers.length;i++)
// // {
// //   console.log(teachers[i]);
// // }
// // //teachers.forEach(function(item,index){
// // //  console.log(item,index);
// // //});
// // console.log(teachers.toString());
// // console.log(teachers.join(' '));
// // //console.log(teachers.sort());
// // console.log(teachers.reverse());
// //objects
// // var course = {
// //   name: 'JavaScript',
// //   awesome: true,
// //   students: ['me','u'],
// //   instructor: {
// //     name:'sim',
// //     favLanguage: 'JavaScript'
// //   },
// //   teachers: [
// //     {
// //       name:'steve',
// //       computer: {
// //         OS: 'Linus',
// //         type: 'laptop'
// //       }
// //     }
// //   ]
// //
// // }
// // console.log(course.teachers[0].computer.OS);
// //
//
// // Addressing Objects Exercise
//
// var course = {
// 	name: 'JavaScript Applications',
// 	awesome: true,
// 	teachers: ['Assaf', 'Shane'],
// 	students: [
// 		{
// 			name: 'Steve',
// 			computer: {
// 				OS: 'Linux',
// 				type: 'laptop'
// 			}
// 		},
// 		{
// 			name: 'Katy',
// 			computer: {
// 				OS: 'OSX',
// 				type: 'macbook'
// 			}
// 		},
// 		{
// 			name: 'Chuck',
// 			computer: {
// 				OS: 'OSX',
// 				type: 'macbook'
// 			}
// 		}
//
// 	],
// 	preReqs : {
// 		skills : ['html', 'css', 'git'],
// 		equipment: {
// 			laptop: true,
// 			OSOptions: ['linux', 'osx']
// 		}
// 	}
// };
// console.log(course.name);
// console.log(course.teachers[1]);
// console.log(course.students[0].name);
// console.log(course.students[1].computer.type);
// console.log(course.preReqs.equipment.OSOptions[0]);
// console.log(course.preReqs.equipment);
// console.log(course.preReqs.equipment.OSOptions[1]);
// console.log(course.preReqs.equipment.OSOptions.toString());
// //var string = course.preReqs.equipment.OSOptions.toString();
// console.log(course.preReqs.equipment.OSOptions.join(' or '));
// console.log(course.preReqs.equipment.OSOptions.join(' or ').toString());
// console.log(course.students.length);
// for (var i = 0; i < course.students.length; i++){
//   if (course.students[i].computer.OS === 'OSX'){
// console.log(course.students[i].name)
//   }
// }




// value vs reference type
// var x = 1;
// var y = 1;
//  console.log(x === y); // true
//  // reassigning a value type actually changes its value
//
// var y = x;
// console.log(x===y);// x--1; y == 1 true
// x = 2;
// console.log(x===y);//false


// refference type


// // Objects and arrays are assigned by reference unlike primary types int and string are assigned by value as above reassigning changes value whereas here it points to diff object in mem
// var x = {name: 'Evan'}
// var y = {name: 'Evan'}
// console.log(x===y);//false becoz reassigning to reeference type makes it point to a different object in memory
// var y= x; //x and y be it name1, name2 be it evan1 evan 2 it is still false and this makes actually x value equals assigned to y so when compare they are equals true
// console.log(x===y);//true
// // now if x changes y will give the same value
// x.name = 'Noah';
// console.log(y.name);



// for array reference types

var matt = { name: 'matt'};// object
var julian = {name: 'julian1'};// object but this var is the the value of an array
var students = [matt, julian];// array

console.log(students.indexOf(julian));//1
console.log(students[1]);
console.log(students.indexOf({name: 'julian1'}));// nothing was found so -1
