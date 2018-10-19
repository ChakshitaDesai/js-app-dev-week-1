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
   },

   playInterval: null,
   play: function (){
     setInterval(function() {
       this.nextPhoto();
     }, 2000);
   },

   pause: function (){
     clearInterval(function(){
       console.log(this.playInterval);
     }, this.playList.length);
   }
}
// call apply

// console.log(slideshow.currentPhotoIndex);
// console.log(slideshow.getCurrentPhoto());
// console.log(slideshow.currentPhotoIndex);
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.prevPhoto();
// console.log(slideshow.getCurrentPhoto());
// console.log(slideshow.currentPhotoIndex);
// slideshow.nextPhoto();
// slideshow.prevPhoto();
// console.log(slideshow.getCurrentPhoto());
// console.log(slideshow.currentPhotoIndex);
// slideshow.nextPhoto();

slideshow.play();
