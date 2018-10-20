// (session 2 exercise 2)
var slideshow = {

  photoList: ["photoA","photoB","photoC","photoD"],
  currentPhotoIndex: 0,
  nextPhoto: function (){
    if (this.currentPhotoIndex < this.photoList.length){
      //console.log(photoList[currentPhotoIndex]);
      this.currentPhotoIndex ++;
        console.log(this.photoList[this.currentPhotoIndex]);
    }else{
      console.log("End of slideshow");
    }
  },
    prevPhoto: function (){
      if (this.currentPhotoIndex !== 0){
        //console.log(photoList[currentPhotoIndex]);
        this.currentPhotoIndex --;
          console.log(this.photoList[this.currentPhotoIndex]);
      }else{
        console.log("End of slideshow");
      }
    },
   getCurrentPhoto: function (){
     return this.photoList[this.currentPhotoIndex];
        }
}

console.log(slideshow.currentPhotoIndex);
console.log(slideshow.getCurrentPhoto());
console.log(slideshow.currentPhotoIndex);
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
console.log(slideshow.getCurrentPhoto());
console.log(slideshow.currentPhotoIndex);
slideshow.nextPhoto();
slideshow.prevPhoto();
console.log(slideshow.getCurrentPhoto());
console.log(slideshow.currentPhotoIndex);
slideshow.nextPhoto();
slideshow.prevPhoto();
console.log(slideshow.getCurrentPhoto());

//
// var slideshow = {
//  photoList: ['Aa','Bb','Cc'],
//  currentPhotoIndex: 0,
//  nextPhoto: function(){
//    if ( this.currentPhotoIndex < this.photoList.length){
//      this.currentPhotoIndex++;
//      console.log(" next photo index is : " + this.currentPhotoIndex+ " and photo name is : "
//       +this.photoList[this.currentPhotoIndex]);
//    }else {
//      console.log("end.");
//    }
//  },
//  prevPhoto: function(){
//     if (this.currentPhotoIndex < this.photoList.length){
//      this.currentPhotoIndex--;
//      console.log("  previous Photo index is: "+this.currentPhotoIndex+ " and prevPhoto name is "
//      +this.photoList[this.currentPhotoIndex]);
//    }
//  },
//  getCurrentPhoto: function(){
//    //return photoList[currentPhotoIndex];
//    console.log("current photo is : " +this.photoList[this.currentPhotoIndex]);
//  }
// }
// slideshow.getCurrentPhoto();
// slideshow.nextPhoto();
// slideshow.prevPhoto();
// slideshow.getCurrentPhoto();
// slideshow.prevPhoto();
// slideshow.getCurrentPhoto();
// slideshow.prevPhoto();
// slideshow.getCurrentPhoto();
// slideshow.nextPhoto();
// slideshow.prevPhoto();
// slideshow.getCurrentPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.prevPhoto();
// slideshow.getCurrentPhoto();
