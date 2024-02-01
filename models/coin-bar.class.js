class CoinBar extends MovableObject {
    height = 40;
    width = 150;


    /**
     * Constructor for CoinBar class.
     * Initializes properties and sets the initial position and value.
     */
    constructor() {
        super();
        this.loadImages(allImgs.IMAGES_COIN_BAR);
        this.x = 10;
        this.y = 40;
        this.getValueCoinBar(this.oneCoin);
    }


    /**
     * Method to set the value of the coin bar and update the image accordingly.
     * @param {number} oneCoin - The value to set for the coin bar.
     */
    getValueCoinBar(oneCoin) {
        let imagePath = allImgs.IMAGES_COIN_BAR[this.loadValue(oneCoin)];
        this.img = this.imageCache[imagePath];
    }

    
    /**
     * Method to resolve the appropriate image index based on the coin value.
     * @param {number} oneCoin - The coin value to resolve the index for.
     * @returns {number} - The resolved image index.
     */
    loadValue(oneCoin) {
        if (oneCoin >= 21) {
            return 5;
        } else if (oneCoin >= 17) {
            return 4;
        } else if (oneCoin >= 12) {
            return 3;
        } else if (oneCoin >= 8) {
            return 2;
        } else if (oneCoin >= 4) {
            return 1;
        } else {
            return 0;
        }
    }
}
