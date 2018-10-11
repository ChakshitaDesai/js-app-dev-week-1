// create array shopping list  add fruit loops to the end, update coffe to fair trade coffee and replace chips  and salsa with rice and beans


const shoppingList = ['pop tarts','ramen noodles','chips','salsa','coffee'];
console.log(shoppingList + '\n');

shoppingList.push('fruit loops');
console.log(shoppingList);
console.log('\n');
//const coffeeIndex =
 //shoppingList.indexOf('coffee');
shoppingList[shoppingList.indexOf('coffee')] = 'fair trade coffee';
console.log(shoppingList);
console.log('\n');

shoppingList.splice(2,2, 'rice', 'beans');//splice(index, items to replace, what is replacing )
console.log(shoppingList);
console.log('\n');

const shoppingCart = [];
shoppingCart.push(shoppingList.pop());
console.log(shoppingCart);
console.log('\n');

shoppingCart.unshift(shoppingList.shift());
console.log(shoppingCart);
console.log('\n');

while (shoppingList.length > 0) {
  shoppingCart.push(shoppingList.shift());
}
  console.log(shoppingCart);
  console.log('\n');
// sort the items in alph backwards

shoppingCart.sort();
console.log(shoppingCart);

shoppingCart.reverse();
console.log(shoppingCart);

//console.log(shoppingCart.join(', '));//shoppingCart.toString()
console.log(shoppingCart.toString());
