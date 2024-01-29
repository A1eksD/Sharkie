class Coin extends MovableObject{
       
    height = 30;
    width = 30;

    constructor(x, y){
        super();
        // this.allImgs;
        this.loadImage(allImgs.IMAGES_COIN[0]);
        this.loadImages(allImgs.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate(){
        saveRunningInterval( () => { //  alle 0.1s img ändern werdend
            this.playAnimation(allImgs.IMAGES_COIN);
        }, 150 );
    }
}