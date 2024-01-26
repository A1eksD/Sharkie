class StatusBarBoss extends MovableObject {
    
    height = 40;
    width = 150;


    constructor(){
        super();
        // this.allImgs;
        this.loadImages(allImgs.BOSS_IMAGES_LIFE);
        this.x = 560;
        this.y = -100;
        this.percentace;
        this.setPercenetage();
    }

    updateHealthBarBoss(){
        setInterval(() => {
            let endY = 10; // Die endgültige position der bar 
            let currentY = this.y; // Die aktuelle position der bar 
            let speed = 20; // wie schnell der das anpasst

            if (currentY < endY) {
                //  y aktualisieren bis
                this.y = Math.min(currentY + speed, endY);
            }
        }, 110);
    }


    setPercenetage(){

        let imagePath = allImgs.BOSS_IMAGES_LIFE[this.resolveImagesIndex()];
        this.img = this.imageCache[imagePath];
    }


    resolveImagesIndex(){
        if (this.percentace === 5) {
            return 5;
        }else if (this.percentace === 4) {
            return 4;
        }else if (this.percentace === 3) {
            return 3;
        }else if (this.percentace === 2) {
            return 2;
        }else if (this.percentace === 1) {
            return 1;
        }else{
            return 0;
        }
    }
}