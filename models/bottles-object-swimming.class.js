class BottlesIsSwimming extends MovableObject {
    
    height = 60;
    width = 50;


    constructor(x, y){
        super();
        this.allImgs = new allImages();
        this.loadImage(this.allImgs.IMAGES_BOTTLES_SWIMMING[0]);
        this.loadImages(this.allImgs.IMAGES_BOTTLES_SWIMMING);
        // this.x = 200;
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate(){
        setInterval( () => {
            this.playAnimation(this.allImgs.IMAGES_BOTTLES_SWIMMING);
        }, 140 );
    }
}