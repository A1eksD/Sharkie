class TrowableObjct extends MovableObject {

    height = 50;
    width = 50;
    theBubbleFloats = false;


    constructor(x, y, valueBubble){ 
        super();
        // this.allImgs;
        this.loadImage(allImgs.IMAGES_BUBBLE[0]);
        this.loadImages(allImgs.IMAGES_BUBBLE);
        this.x = x; // parameter übergeben
        this.y = y; // parameter übergeben
        this.acceleration = 2;
        // this.otherDirection;
        // weil die parameter im constructor übergeben werden, muss man sie hie rnicht nochmal extra auflisten
        this.trow(x, y, valueBubble); 
    }


    trow(x, y, valueBubble){ //übergabe parameter im constructor 
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        if (!valueBubble) {
            setInterval(() => {
                this.x += 5;
            }, 1000 / 60);
        } else {
            setInterval(() => {
                this.x -= 5;
            }, 1000 / 60);
        }
    }
    
}