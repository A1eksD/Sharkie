class StatusBar extends drawableObject {
    
    height = 40;
    width = 150;
    percentace = 100;


    constructor(){
        super();
        // this.allImgs;
        this.loadImages(allImgs.IMAGES_LIFE);
        this.x = 10;
        this.y = 10;
        this.setPercenetage(100);
    }


    setPercenetage(percentace){
        this.percentace = percentace;
        let imagePath = allImgs.IMAGES_LIFE[this.resolveImagesIndex()];
        this.img = this.imageCache[imagePath];
    }


    resolveImagesIndex(){
        if (this.percentace === 100) {
            return 5;
        }else if (this.percentace > 80) {
            return 4;
        }else if (this.percentace > 60) {
            return 3;
        }else if (this.percentace > 40) {
            return 2;
        }else if (this.percentace > 20) {
            return 1;
        }else{
            return 0;
        }
    }
}