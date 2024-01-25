class CoinBar extends MovableObject {
    IMAGES_COINS = [
        'img/4.Marcadores/green/Coin/0_copia4.png',
        'img/4.Marcadores/green/Coin/20_copia2.png',
        'img/4.Marcadores/green/Coin/40_copia4.png',
        'img/4.Marcadores/green/Coin/60_copia4.png',
        'img/4.Marcadores/green/Coin/80_copia4.png',
        'img/4.Marcadores/green/Coin/100_copia4.png'
    ];   
    height = 40;
    width = 150;
    

    constructor(){
        super();
        this.loadImages(this.IMAGES_COINS);
        this.x = 10;
        this.y = 40;
        this.getValueCoinBar(this.oneCoin);
    }


    getValueCoinBar(oneCoin){
        let imagePath = this.IMAGES_COINS[this.loadValue(oneCoin)];
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