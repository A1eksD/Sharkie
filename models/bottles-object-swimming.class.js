class BottlesIsSwimming extends MovableObject {
    height = 60;
    width = 50;


    /**
     * Constructor for BottlesIsSwimming class.
     * @param {number} x - Initial x-coordinate of the swimming bottles.
     * @param {number} y - Initial y-coordinate of the swimming bottles.
     * Initializes the properties and starts the animation.
     */
    constructor(x, y) {
        super().loadImage(allImgs.IMAGES_BOTTLES_SWIMMING[0]);
        this.loadImages(allImgs.IMAGES_BOTTLES_SWIMMING);
        this.x = x;
        this.y = y;
        this.animate();
    }

    
    /**
     * Method to animate the swimming bottles by playing a sequence of images.
     */
    animate() {
        saveRunningInterval(() => this.playAnimation(allImgs.IMAGES_BOTTLES_SWIMMING), 140);
    }
}
