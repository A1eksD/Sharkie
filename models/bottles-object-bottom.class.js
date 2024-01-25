class BottlesAtBottom extends MovableObject{

    height = 80;
    width = 60;


    constructor(){
        super();
        this.allImgs = new allImages();
        this.loadImage(this.allImgs.IMAGES_BOTTLES_BOOTOM[0]);
        this.loadImages(this.allImgs.IMAGES_BOTTLES_BOOTOM);
        this.x = (Math.random() * 2000) * 3;
        this.y = 360;
        this.animate();
    }


    animate(){
        setInterval( () => { //  alle 0.1s img ändern werdend
            this.playAnimation(this.allImgs.IMAGES_BOTTLES_BOOTOM);
        }, 350 );
    }
}