function sayName(){
  console.log(this.name);
}
var t1 = {
  name: "a",
  speak: sayName

}
