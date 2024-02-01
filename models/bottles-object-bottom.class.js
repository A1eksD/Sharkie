class BottlesAtBottom extends MovableObject {
    height = 80;
    width = 60;

    
    /**
     * Constructor for BottlesAtBottom class.
     * Initializes the properties and starts the animation.
     */
    constructor() {
        super().loadImage(allImgs.IMAGES_BOTTLES_BOOTOM[0]);
        this.loadImages(allImgs.IMAGES_BOTTLES_BOOTOM);
        this.x = (Math.random() * 2000) * 3;
        this.y = 360;
        this.animate();
    }


    /**
     * Method to animate the bottles at the bottom by playing a sequence of images.
     */
    animate() {
        saveRunningInterval(() => this.playAnimation(allImgs.IMAGES_BOTTLES_BOOTOM), 350);
    }
}
