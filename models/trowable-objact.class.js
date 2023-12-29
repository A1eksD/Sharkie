class TrowableObjct extends MovableObject {
    IMAGES_BOTTLES = [
        'img/4.Marcadores/Posión/Dark-Left.png',
        'img/4.Marcadores/Posión/Dark-Right.png'
    ];   
    height = 80;
    width = 60;
    speedY = 5;
    speedX = 20;

    constructor(){
        super().loadImage(this.IMAGES_BOTTLES[0]);
        this.loadImages(this.IMAGES_BOTTLES);
        this.x = (200 + Math.random() * 500) * 2;
        this.y = 360;
        this.animate();
        this.trow();
    }


    animate(){
        setInterval( () => { //  alle 0.1s img ändern werdend
            this.playAnimation(this.IMAGES_BOTTLES);
        }, 350 );
    }


    trow(){
        
    }
}