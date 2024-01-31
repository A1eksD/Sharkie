class TrowableObjct extends MovableObject {

    height = 50;
    width = 50;
    theBubbleFloats = false;


    constructor(x, y, valueBubble){ 
        super();
        this.loadImage(allImgs.IMAGES_BUBBLE[0]);
        this.loadImages(allImgs.IMAGES_BUBBLE);
        this.x = x;
        this.y = y;
        this.acceleration = 2;
        this.trow(x, y, valueBubble); 
    }


    trow(x, y, valueBubble){
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        if (!valueBubble) {
            saveRunningInterval(() => this.x += 5, 1000 / 60);
        } else {
            saveRunningInterval(() => this.x -= 5, 1000 / 60);
        }
    }
    
}