var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

// var findingFirstName = players.find(function(player){
//   return player.firstName === 'Mike';
// })
// console.log(findingFirstName);
//
// var findingRBposition = players.filter(function(player){
//   return player.position === 'RB';
// })
// console.log(findingRBposition);
//
// var lastNames = players.map(function(player){
//   return player.lastName;
// })
// console.log(lastNames);

// var findingFNRB5 = players.filter(function(player){
//    if (player.position === 'RB' && player.touchdowns > 5){
//     return true;
// or return player.touchdowns > 5 && player.postion == 'RB';
//   };
//
// })
// var fullNames = findingFNRB5.map(function(player){
//   return player.firstName + ' ' + player.lastName;
// })
// console.log(fullNames);

var findingRB = players.filter(function(player){
    return player.position === 'RB';
  })
var totalTouchdowns = findingRB.reduce(function(sum,current){
return sum + current.touchdowns;
 }, 0);
 console.log(totalTouchdowns);


//find stops with the first one it finds whereas filter , map and reduce runs through each value of the array
