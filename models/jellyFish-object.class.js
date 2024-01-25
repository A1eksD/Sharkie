class JellyFish extends MovableObject {
    
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
        super();
        this.allImgs = new allImages();
        this.audio = new Audios();
        this.loadImage(this.allImgs.JELLYFISH_IMAGES_WALIKNG[0]);
        this.loadImages(this.allImgs.JELLYFISH_IMAGES_WALIKNG);
        this.loadImages(this.allImgs.JELLYFISH_IMAGES_WALIKNG_DANGEROUS);
        this.loadImages(this.allImgs.JELLYFISH_IMAGES_DIED);
        this.x = 800 + (Math.random() * 2000);
        this.speed = 0.5 + Math.random() * 1;
        this.y = 20 + Math.random() * 380;
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
                this.playAnimation(this.allImgs.JELLYFISH_IMAGES_WALIKNG);
            } else {
                this.playAnimation(this.allImgs.JELLYFISH_IMAGES_WALIKNG_DANGEROUS);
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
            this.playAnimation(this.allImgs.JELLYFISH_IMAGES_DIED);
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

}