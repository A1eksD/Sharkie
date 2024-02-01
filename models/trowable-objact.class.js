class ThrowableObject extends MovableObject {
    height = 50;
    width = 50;
    theBubbleFloats = false;


    /**
     * Constructor for the ThrowableObject class.
     * @param {number} x - The initial x-coordinate of the throwable object.
     * @param {number} y - The initial y-coordinate of the throwable object.
     * @param {boolean} valueBubble - Boolean indicating the direction of the bubble.
     */
    constructor(x, y, valueBubble){ 
        super().loadImage(allImgs.IMAGES_BUBBLE[0]);
        this.loadImages(allImgs.IMAGES_BUBBLE);
        this.x = x;
        this.y = y;
        this.acceleration = 2;
        this.throw(x, y, valueBubble); 
    }

    
    /**
     * Throws the throwable object with specified direction.
     * @param {number} x - The x-coordinate to throw the object towards.
     * @param {number} y - The y-coordinate to throw the object towards.
     * @param {boolean} valueBubble - Boolean indicating the direction of the bubble.
     */
    throw(x, y, valueBubble){
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
