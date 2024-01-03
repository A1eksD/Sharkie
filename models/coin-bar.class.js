class CoinBar extends drawebleObject {
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
        super().loadImage(this.IMAGES_COINS[0]);
        this.x = 10;
        this.y = 40;
        
    }
}