class BottlesIsSwimming extends MovableObject {
    
    height = 60;
    width = 50;


    constructor(x, y){
        super();
        this.loadImage(allImgs.IMAGES_BOTTLES_SWIMMING[0]);
        this.loadImages(allImgs.IMAGES_BOTTLES_SWIMMING);
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate(){
        saveRunningInterval( () => {
            this.playAnimation(allImgs.IMAGES_BOTTLES_SWIMMING);
        }, 140 );
    }
}