
//session 1 exercise 2)

var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

const a = players.find(function(player){
  return player.firstName === 'Mike';
})
console.log(a);// output { firstName: 'Mike',
  // lastName: 'Tolbert',
  // // position: 'RB',
  // touchdowns: 8 }
const b = players.filter(function(pos){
  return pos.position === 'RB';
})
console.log(b);
// // out put object
// [ { firstName: 'Jonathan',
//     lastName: 'Stewart',
//     position: 'RB',
//     touchdowns: 12 },
//   { firstName: 'Mike',
//     lastName: 'Tolbert',
//     position: 'RB',
//     touchdowns: 8 },
//   { firstName: 'Fozzy',
//     lastName: 'Whittaker',
//     position: 'RB',
//     touchdowns: 3 } ]


const c = players.map(function(ln){
  return ln.lastName;
})
console.log(c);
//output
// [ 'Newton',
//   'Anderson',
//   'Stewart',
//   'Tolbert',
//   'Whittaker',
//   'Ginn',
//   'Funchess' ]
const d = b.filter(function(td){
  if( td.touchdowns > 5){
    return td.firstName + " " + td.lastName};

});

console.log(d);
// //output
// [ { firstName: 'Jonathan',
//     lastName: 'Stewart',
//     position: 'RB',
//     touchdowns: 12 },
//   { firstName: 'Mike',
//     lastName: 'Tolbert',
//     position: 'RB',
//     // touchdowns: 8 } ]
const e = b.reduce(function (count,current) {
  return count + current.touchdowns;
}, 0);
console.log(e);//23
