class Coin extends MovableObject {
    height = 30;
    width = 30;


    /**
     * Constructor for Coin class.
     * Initializes properties and sets the initial position.
     * @param {number} x - The x-coordinate for the initial position.
     * @param {number} y - The y-coordinate for the initial position.
     */
    constructor(x, y) {
        super().loadImage(allImgs.IMAGES_COIN[0]);
        this.loadImages(allImgs.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.animate();
    }


    /**
     * Method to animate the coin by playing the coin image animation.
     */
    animate() {
        saveRunningInterval(() => this.playAnimation(allImgs.IMAGES_COIN), 150);
    }
}
