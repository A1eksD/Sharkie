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

    // enemySpaledAway = false;
    changeAnimationJellyFish = false;
    // getCurrentImg = false;


    constructor(){
        super().loadImage(this.IMAGES_WALIKNG[0]);
        this.loadImages(this.IMAGES_WALIKNG);
        this.loadImages(this.IMAGES_WALIKNG_DANGEROUS);
        this.loadImages(this.IMAGES_DIED);
        this.x = 800 + (Math.random() * 2000);
        // this.x = 550 + Math.random() * 1000;
        this.speed = 0.5 + Math.random() * 1;
        // this.y = 200 + Math.random() * 300;
        this.y = 20 + Math.random() * 380; // Zufällige Position zwischen 20 und 400
        this.direction = Math.random() < 0.5 ? 1 : -1; // Zufällige Richtung (hoch oder runter)
        this.currentImage;
        this.changeAnimationJellyFish;
        this.animate();
    }


    animate(){
        // setInterval(() => { //gegener soll sich nach links bewegen mit 60fps
        //     // this.moveLeft();
        //     this.moveUpandDown();
        // }, 1000 / 60);

        setInterval(() => {
            this.loadFlowAnimation();
        },  1000 / 60);

        setInterval( () => {
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




    moveUpandDown(){
        if (this.y < 20 || this.y > 400) {
            this.direction *= -1;
        }

        this.y += this.direction;

    }
    
    // moveUpandDown() {
    //     const randomDirection = Math.round(Math.random()) === 0 ? -1 : 1; // zufällige Richtung (-1 oder 1)
    //     const speed = 1; // Geschwindigkeit der Bewegung
    
    //     this.y += randomDirection * speed;
    
    //     // Begrenze die Y-Position auf den Bereich 20 bis 400
    //     if (this.y < 20) {
    //         this.y = 20;
    //     } else if (this.y > 400) {
    //         this.y = 400;
    //     }
    // }
    
    // moveUpandDown(){
    //     if (this.y < 20){
    //         this.y += 1;
    //     } else if (this.y > 400){
    //         this.y -= 1;
    //     }
    // }
}