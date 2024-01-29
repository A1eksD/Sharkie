class BottlesAtBottom extends MovableObject{

    height = 80;
    width = 60;


    constructor(){
        super();
        // this.allImgs;
        this.loadImage(allImgs.IMAGES_BOTTLES_BOOTOM[0]);
        this.loadImages(allImgs.IMAGES_BOTTLES_BOOTOM);
        this.x = (Math.random() * 2000) * 3;
        this.y = 360;
        this.animate();
    }


    animate(){
        saveRunningInterval( () => { //  alle 0.1s img ändern werdend
            this.playAnimation(allImgs.IMAGES_BOTTLES_BOOTOM);
        }, 350 );
    }
}