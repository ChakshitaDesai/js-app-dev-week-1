// (session 2 exercise 2)


// Addressing Objects Exercise

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
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};
console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log(course.students[1].computer.type);
console.log(course.preReqs.equipment.OSOptions[0]);
console.log(course.preReqs.equipment);
console.log(course.preReqs.equipment.OSOptions[1]);
console.log(course.preReqs.equipment.OSOptions.toString());
//var string = course.preReqs.equipment.OSOptions.toString();
console.log(course.preReqs.equipment.OSOptions.join(' or '));
console.log(course.preReqs.equipment.OSOptions.join(' or ').toString());
console.log(course.students.length);
for (var i = 0; i < course.students.length; i++){
  if (course.students[i].computer.OS === 'OSX'){
console.log(course.students[i].name)
  }
}
