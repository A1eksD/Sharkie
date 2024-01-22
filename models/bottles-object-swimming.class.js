class BottlesIsSwimming extends drawableObject {


    constructor(){
        // super().loadImage(this.IMAGES_BOTTLES[0]);
        // this.loadImages(this.IMAGES_BOTTLES);
        this.x = (200 + Math.random() * 500) * 2;
        this.y = 100;
        this.animate();
    }
}