class CoinBar extends MovableObject {
      
    height = 40;
    width = 150;
    

    constructor(){
        super();
        this.allImgs = new allImages();
        this.loadImages(this.allImgs.IMAGES_COIN_BAR);
        this.x = 10;
        this.y = 40;
        this.getValueCoinBar(this.oneCoin);
    }


    getValueCoinBar(oneCoin){
        let imagePath = this.allImgs.IMAGES_COIN_BAR[this.loadValue(oneCoin)];
        this.img = this.imageCache[imagePath];
    }


    loadValue(oneCoin){
        if (oneCoin >= 21) {
            return 5;
        }else if (oneCoin >= 17) {
            return 4;
        }else if (oneCoin >= 12) {
            return 3;
        }else if (oneCoin >= 8) {
            return 2;
        }else if (oneCoin >= 4) {
            return 1;
        }else{
            return 0;
        }
    }
}