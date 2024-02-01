class ToxicBottlesBar extends MovableObject {
    height = 40;
    width = 150;

    
    /**
     * Creates an instance of ToxicBottlesBar.
     * @constructor
     */
    constructor() {
        super();
        this.loadImages(allImgs.IMAGES_TOXIC_BOTTLES_BAR);
        this.x = 10;
        this.y = 70;
        this.getValueToxicBar(this.bottleValue);
    }

    /**
     * Set the value of the toxic bottles bar and update the corresponding image.
     * @param {number} bottleValue - The current value of the toxic bottles bar.
     */
    getValueToxicBar(bottleValue) {
        this.bottleValue = bottleValue;
        let imagePath = allImgs.IMAGES_TOXIC_BOTTLES_BAR[this.loadValue()];
        this.img = this.imageCache[imagePath];
    }

    /**
     * Load the appropriate image index based on the bottle value.
     * @returns {number} - The image index to be loaded.
     */
    loadValue() {
        if (this.bottleValue >= 5) {
            return 5;
        } else if (this.bottleValue === 4) {
            return 4;
        } else if (this.bottleValue === 3) {
            return 3;
        } else if (this.bottleValue === 2) {
            return 2;
        } else if (this.bottleValue === 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
