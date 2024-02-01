class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;
    start_x = 0;
    start_y = 0;

    /**
     * Constructor for BackgroundObject class.
     * @param {string} imagePath - Path to the image for the background object.
     * @param {number} x - Initial x-coordinate of the background object.
     * @param {number} y - Initial y-coordinate of the background object.
     * @param {number} parallaxFactor - Factor determining the parallax effect.
     */
    constructor(imagePath, x, y, parallaxFactor) {
        super().loadImage(imagePath);
        this.start_x = x;
        this.start_y = y;
        this.x = x;
        this.y = y;
        this.parallaxFactor = parallaxFactor;
    }
}
