class TrowableObjct extends MovableObject {

    IMAGES_BUBBLE = ['img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'];   
    height = 50;
    width = 50;
    // speedY = 0;
    // speedX = 0;

    //in checkShootBubble(world) wierden die parameter festgesetzt und übergeben
    constructor(x, y){ 
        super().loadImage(this.IMAGES_BUBBLE);
        this.loadImages(this.IMAGES_BUBBLE);
        this.x = x; // parameter übergeben
        this.y = y; // parameter übergeben
        this.acceleration = 2;
        // weil die parameter im constructor übergeben werden, muss man sie hie rnicht nochmal extra auflisten
        this.trow(x, y); 
    }


    trow(x, y){ //übergabe parameter im constructor 
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}