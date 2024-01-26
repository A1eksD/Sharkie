class toxicBottlesBar extends MovableObject {
 
    height = 40;
    width = 150;
    


    constructor(){
        super();
        // this.allImgs;
        this.loadImages(allImgs.IMAGES_TOXIC_BOTTLES_BAR);
        this.x = 10;
        this.y = 70;
        this.getValueToxicBar(this.bottleValue);
    }


    getValueToxicBar(bottleValue){
        this.bottleValue = bottleValue;
        let imagePath = allImgs.IMAGES_TOXIC_BOTTLES_BAR[this.loadValue()];
        this.img = this.imageCache[imagePath];
    }


    loadValue(){
        if (this.bottleValue >= 5) {
            return 5;
        }else if (this.bottleValue === 4) {
            return 4;
        }else if (this.bottleValue === 3) {
            return 3;
        }else if (this.bottleValue === 2) {
            return 2;
        }else if (this.bottleValue === 1) {
            return 1;
        }else{
            return 0;
        }
    }
}
