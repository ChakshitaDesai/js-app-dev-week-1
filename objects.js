/*var course = {
name: 'JavaScript Applications',
awesome: true,
teachers: ['Assaf', 'Shane'],
students: [{name: 'Steve',computer: {OS: 'Linux',type: 'laptop'}}, 'none']
};
console.log(course.students[0].computer.OS);
console.log(course.name = " js is awesome");
course.fun = true;
delete course.awesome;
console.log(course.teachers[1]);
console.log(course.awesome);
console.log(course.students[1]);
*/

var course = {
name: 'JavaScript Applications',
awesome: true,
teachers: ['Assaf', 'Shane'],
students: [
{
name: 'Steve',
computer: {
OS: 'Linux',
type: 'laptop'
}
},
{
name: 'Katy',
computer: {
OS: 'OSX',
type: 'macbook'
}
},
{
name: 'Chuck',
computer: {
OS: 'OSX'
}
}
]
};
console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log(course.students[1].computer.type);
