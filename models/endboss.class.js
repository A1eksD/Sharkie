class Endboss extends MovableObject {
    currentImage = 0;
    height = 300;
    width = 300;
    y = 0;
    IMAGES_WALIKNG = [
        'img/2.Enemy/3_Final_Enemy/2.floating/1.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/2.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/3.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/4.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/5.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/6.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/7.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/8.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/9.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/10.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/11.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/12.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/13.png'
    ];
    offset = {
        x: 25, 
        y: 145, 
        frameHeight: 25,
        frameWidth: 60
    }


    constructor() {
        super().loadImage(this.IMAGES_WALIKNG[0]);
        this.loadImages(this.IMAGES_WALIKNG);
        this.x = 400;
        // this.playAnimation(this.IMAGES_WALIKNG);
        this.animate();
    }

    animate(){
        setInterval( () => {
            this.playAnimation(this.IMAGES_WALIKNG);
        }, 120);
    }
}