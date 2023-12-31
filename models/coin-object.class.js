class Coin extends MovableObject{
    IMAGES_COIN = [
        'img/4.Marcadores/1.Coins/1.png',
        'img/4.Marcadores/1.Coins/2.png',
        'img/4.Marcadores/1.Coins/3.png',
        'img/4.Marcadores/1.Coins/4.png'
    ];   
    height = 30;
    width = 30;

    constructor(){
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.x = 550 + Math.random() * 1000;
        this.y = 70;
        this.animate();
    }


    animate(){
        setInterval( () => { //  alle 0.1s img ändern werdend
            this.playAnimation(this.IMAGES_COIN);
        }, 150 );
    }
}