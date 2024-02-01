class StatusBar extends MovableObject {
    height = 40;
    width = 150;
    percentace = 100;


    /**
     * Constructor for StatusBar class.
     * Initializes properties and sets the initial percentage.
     */
    constructor() {
        super();
        this.loadImages(allImgs.IMAGES_LIFE);
        this.x = 10;
        this.y = 10;
        this.setPercentage(100);
    }


    /**
     * Method to set the percentage and update the image accordingly.
     * @param {number} percentace - The percentage value to set.
     */
    setPercentage(percentace) {
        this.percentace = percentace;
        let imagePath = allImgs.IMAGES_LIFE[this.resolveImagesIndex()];
        this.img = this.imageCache[imagePath];
    }

    
    /**
     * Method to resolve the appropriate image index based on the percentage.
     * @returns {number} - The resolved image index.
     */
    resolveImagesIndex() {
        if (this.percentace === 100) {
            return 5;
        } else if (this.percentace > 80) {
            return 4;
        } else if (this.percentace > 60) {
            return 3;
        } else if (this.percentace > 40) {
            return 2;
        } else if (this.percentace > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
