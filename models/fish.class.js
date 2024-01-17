class Fish extends MovableObject {
    width = 80;
    height = 80;
    currentImage = 0;
    IMAGES_WALIKNG = [
        'img/2.Enemy/1.Puffer_fish/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer_fish/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer_fish/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer_fish/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer_fish/1.Swim/2.swim5.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer_fish/4.DIE/2.3.png'
    ];
    bubbleBurstAudio = new Audio('audio/bubble_bursts.mp3');
    offset = {
        top: 5, 
        left: 5, 
        right: 10,
        bottom: 15
    }
    // changeAnimation = false;
    // enemyGetHit = false;

    constructor(){
        super().loadImage(this.IMAGES_WALIKNG[0]);
        this.loadImages(this.IMAGES_WALIKNG);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 550 + Math.random() * 1000;
        this.speed = 0.5 + Math.random() * 1;
        this.animate();
    }

    animate(){
        // setInterval(() => { //gegener soll sich nach links bewegen mit 60fps
        //     this.moveLeft();
        // }, 1000 / 60);

        setInterval( () => { // gegener soll alle 0.1s seim img ändern
            if (!this.changeAnimation) {
                this.playAnimation(this.IMAGES_WALIKNG);   
            }
        }, 180 );

        setInterval(() => {
            this.enemyGetSlap();
            this.loadDeadAnimation();
        },  1000 / 60);
    }


    loadDeadAnimation(){
        if (this.enemyGetHit) {
            this.playAnimation(this.IMAGES_DEAD);
        }
    }
    
}