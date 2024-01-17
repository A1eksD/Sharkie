class JellyFish extends MovableObject {
    // world;
    IMAGES_WALIKNG = [
        'img/2.Enemy/2_Jelly_fish/Regular_damage/Lila1.png',
        'img/2.Enemy/2_Jelly_fish/Regular_damage/Lila2.png',
        'img/2.Enemy/2_Jelly_fish/Regular_damage/Lila3.png',
        'img/2.Enemy/2_Jelly_fish/Regular_damage/Lila4.png'
    ];
    IMAGES_WALIKNG_DANGEROUS = [
        'img/2.Enemy/2_Jelly_fish/Súper_dangerous/Pink1.png',
        'img/2.Enemy/2_Jelly_fish/Súper_dangerous/Pink2.png',
        'img/2.Enemy/2_Jelly_fish/Súper_dangerous/Pink3.png',
        'img/2.Enemy/2_Jelly_fish/Súper_dangerous/Pink4.png'
    ];
    IMAGES_DIED = [
        'img/2.Enemy/2_Jelly_fish/Dead/Lila/L1.png',
        'img/2.Enemy/2_Jelly_fish/Dead/Lila/L2.png',
        'img/2.Enemy/2_Jelly_fish/Dead/Lila/L3.png',
        'img/2.Enemy/2_Jelly_fish/Dead/Lila/L4.png'
    ];
    width = 80;
    height = 80;
    y = 200;
    offset = {
        top: 15, 
        left: 15, 
        right: 15,
        bottom: 10
    }
    bubbleCatchJellyFishAudio = new Audio('audio/catch_with_bubble.mp3');
    // enemySpaledAway = false;
    changeAnimationJellyFish = false;
    // getCurrentImg = false;


    constructor(){
        super().loadImage(this.IMAGES_WALIKNG[0]);
        this.loadImages(this.IMAGES_WALIKNG);
        this.loadImages(this.IMAGES_WALIKNG_DANGEROUS);
        this.loadImages(this.IMAGES_DIED);
        this.x = 55 + Math.random() * 500;
        // this.x = 550 + Math.random() * 1000;
        this.speed = 0.5 + Math.random() * 1;
        this.currentImage;
        this.changeAnimationJellyFish;
        this.animate();
    }


    animate(){
        // setInterval(() => { //gegener soll sich nach links bewegen mit 60fps
        //     this.moveLeft();
        // }, 1000 / 60);

        setInterval(() => {
            this.loadFlowAnimation();
        },  1000 / 60);

        setInterval( () => { // gegener soll alle 0.1s seim img ändern
            this.walkingAnimation();
        }, 180 );

        setInterval(() => {
            this.checkCollisionWithBubble();
        }, 80);

        setInterval( () => {
            this.getRandomNumber();
        }, 2000 );
    }


    getRandomNumber(){
        this.randomNumber = Math.round(Math.random());

        if (this.randomNumber === 0) {
            return 0;
        } else {
            return 1;
        }
    }

    walkingAnimation(){
        if (!this.changeAnimationJellyFish) {
            if (this.randomNumber === 0) {
                this.playAnimation(this.IMAGES_WALIKNG);
            } else {
                this.playAnimation(this.IMAGES_WALIKNG_DANGEROUS);
            }   
        }
    }


    loadFlowAnimation(){
        if (this.randomNumber === 0 && this.enemyGetHit) {
            // this.enemySpaledAway = true;
            this.enemyGetSlap();
        } else {
            this.enemyGetHit = false;
        }
    }


    checkCollisionWithBubble(){
        if (this.changeAnimationJellyFish) {
            // this.bubbleCatchJellyFishAudio.play();
            this.playAnimation(this.IMAGES_DIED);
            this.y -= 15;
            this.offset = {
                top: 35, 
                left: 35, 
                right: 35,
                bottom: 35
            }
        }
    }
}