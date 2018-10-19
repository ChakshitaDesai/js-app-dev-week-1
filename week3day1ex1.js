
const superHeroes = [ [ 'Batman', ' Bruce Wayne'], ["Spiderman", "Peter Parker"], ["The Flash", "Barry Allen"]];
//const secretIdentity = [];
const secretIdentity = superHeroes.map(function(revealArray){
  return revealArray[0] + " is " + revealArray[1];
  // return revealArray.join(" is ");
});
console.log(secretIdentity.join("\n"));
