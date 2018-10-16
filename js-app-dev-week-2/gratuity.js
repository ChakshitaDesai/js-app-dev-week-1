// (session 1 exercise 1)
var billAmount = 100.776;
 function gratuity(){
  var amt = billAmount*0.2;
  return amt;
}
console.log(gratuity());
function totalWithGrat(){
  var totalgratuity = gratuity()+billAmount;
  return totalgratuity;
}console.log("your total including gratuity is : " + totalWithGrat().toFixed(2));
