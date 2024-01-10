class TrowableObjct extends MovableObject {

    IMAGES_BUBBLE = ['img/1.Sharkie/4.Attack/Bubble_trap/Poisoned_Bubble.png'];   
    height = 50;
    width = 50;


    constructor(x, y, valueBubble){ 
        super().loadImage(this.IMAGES_BUBBLE);
        this.loadImages(this.IMAGES_BUBBLE);
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