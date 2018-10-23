

function outer(){
  var a = "sam";
  var b = {
    name: "kim"
    }
  console.log(a);
  console.log(b);
  console.log("outer");
  function inner(a,b){
    console.log(a);
    console.log(b);
    console.log("inner");
     a = "changed a";
     b = {
      name: "changed object b"
          }
    console.log(a);
    console.log(b);
    console.log("after changed inner function");
    b.name = " updating a property of the b object ";
    console.log(b);
  }
  //console.log("outer");
  inner(a,b);
  console.log(a);
  console.log(b);
  console.log("after execution of inner(a,b)");
}
outer();
