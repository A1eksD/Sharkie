class TrowableObjct extends MovableObject {
    IMAGES_BOTTLES = [
        'img/4.Marcadores/Posión/Light-Left.png',
        'img/4.Marcadores/Posión/Light-Right.png'
    ];
    x = 800;
    y = 10;
    speedY = 5;
    speedX = 20;

    constructor(){
        super().loadImage(this.IMAGES_BOTTLES[0]);
        // this.loadImages(this.IMAGES_BOTTLES);
        this.x = 800;
        // this.x = 350 + Math.random() * 0;
        this.y = 100;
        // this.fillImageCache();
        // this.animate();
        this.trow();
    }


    // fillImageCache(){
    //     this.img = this.IMAGES_BOTTLES;
    // }


    // animate(){
    //     setInterval( () => { //  alle 0.1s img ändern werdend
    //         this.playAnimation(this.IMAGES_BOTTLES);
    //     }, 180 );
    // }


    trow(){
        
    }
}