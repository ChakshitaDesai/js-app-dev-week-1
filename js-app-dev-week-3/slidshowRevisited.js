// (session 1 exercise 3)

var slideshow = {
    photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],

    currentPhotoIndex: 0,

    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of Slideshow');
              this.pause();
        }
    },

    prevPhoto: function() {
        if(this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Start of Slideshow');

        }
    },

    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    },

    playInterval: null,

    play: function() {
        var self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
    },

    pause: function() {
        clearInterval(this.playInterval);
    }

}
console.log(slideshow.getCurrentPhoto());

console.log(slideshow.play());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
