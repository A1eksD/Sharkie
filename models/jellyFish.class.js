class JellyFish extends MovableObject{
    width = 100;
    height = 100;
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
        this.speed = 1 + Math.random() * 0.5;
        this.animate();
    }

    animate(){
        this.moveLeft();
        setInterval( () => {
            // let i = 0 % 6; -> 0, Rest 0 / wenn 5 % 6 -> 0, Rest 5 / wenn 6 % 6 -> 1, Rest 0 / wenn 7 % 6 -> 1, Rest 1
            let i = this.currentImage % this.IMAGES_WALIKNG.length; 
            //let i = 0, 1, 2, 3, 4, 5, 6, 0
            let path = this.IMAGES_WALIKNG[i];
            this.img = this.imageChache[path];
            this.currentImage++;
        }, 180 );
    }
}