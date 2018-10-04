// create variable temperature and set 80
//


const temperature = 90;
const precipitation = 'raining';//=false
const indoors = true;

   console.log('Temperature is ' + temperature + ' degrees');
// precipitation === false
if (temperature > 80 && !precipitation) {
   console.log("time to swim outdoors");
}
else if (indoors) {
  console.log("time to swim indoors");
}
