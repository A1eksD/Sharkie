class JellyFish extends MovableObject{
    width = 80;
    height = 80;
    currentImage = 0;
    IMAGES_WALIKNG = [
        '../img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        '../img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        '../img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        '../img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];


    constructor(){
        super().loadImage('../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.IMAGES_WALIKNG);
        this.x = 350 + Math.random() * 500;
        this.speed = 0.5 + Math.random() * 0.5;
        this.animate();
    }

    animate(){
        this.moveLeft();
        setInterval( () => {
            this.playAnimation(this.IMAGES_WALIKNG);
        }, 180 );
    }
}