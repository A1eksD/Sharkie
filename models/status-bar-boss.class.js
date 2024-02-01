
class StatusBarBoss extends MovableObject {
    height = 40;
    width = 150;


    constructor(){
        super();
        this.loadImages(allImgs.BOSS_IMAGES_LIFE);
        this.x = 560;
        this.y = -100;
        this.percentace;
        this.setPercentage();
    }


    /**
     * Updates the health bar of the boss, animating it to the specified position.
     */
    updateHealthBarBoss(){
        saveRunningInterval(() => {
            let endY = 40;
            let currentY = this.y;
            let speed = 20;

            if (currentY < endY) {
                this.y = Math.min(currentY + speed, endY);
            }
        }, 110);
    }


    /**
     * Sets the percentage value of the health bar and updates the corresponding image.
     */
    setPercentage(){
        let imagePath = allImgs.BOSS_IMAGES_LIFE[this.resolveImagesIndex()];
        this.img = this.imageCache[imagePath];
    }
    

    /**
     * Resolves the index of the image based on the percentage value.
     * @returns {number} - Index of the image.
     */
    resolveImagesIndex(){
        if (this.percentace === 5) {
            return 5;
        } else if (this.percentace === 4) {
            return 4;
        } else if (this.percentace === 3) {
            return 3;
        } else if (this.percentace === 2) {
            return 2;
        } else if (this.percentace === 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
