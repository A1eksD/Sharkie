class Coin extends MovableObject{
       
    height = 30;
    width = 30;

    constructor(x, y){
        super();
        this.allImgs = new allImages();
        this.loadImage(this.allImgs.IMAGES_COIN[0]);
        this.loadImages(this.allImgs.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate(){
        setInterval( () => { //  alle 0.1s img ändern werdend
            this.playAnimation(this.allImgs.IMAGES_COIN);
        }, 150 );
    }
}