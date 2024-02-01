class JellyFish extends MovableObject {
    width = 80;
    height = 80;
    y = 200;
    offset = {
        top: 15, 
        left: 15, 
        right: 15,
        bottom: 10
    };
    changeAnimationJellyFish = false;


    /**
     * Constructor for the JellyFish class.
     */
    constructor(){
        super().loadImage(allImgs.JELLYFISH_IMAGES_WALIKNG[0]);
        this.loadImages(allImgs.JELLYFISH_IMAGES_WALIKNG);
        this.loadImages(allImgs.JELLYFISH_IMAGES_WALIKNG_DANGEROUS);
        this.loadImages(allImgs.JELLYFISH_IMAGES_DIED);
        this.x = 800 + (Math.random() * 2000);
        this.speed = 0.5 + Math.random() * 1;
        this.y = 20 + Math.random() * 380;
        this.direction = Math.random() < 0.5 ? 1 : -1;
        this.randomNumber = Math.round(Math.random());
        this.animate();
    }


    /**
     * Method to animate the jellyfish's movement and animations.
     */
    animate(){
       saveRunningInterval(() => {
            this.loadFlowAnimation();
            this.moveUpandDown();
        },  1000 / 60);

        saveRunningInterval(() => this.checkCollisionWithBubble(), 80);

        saveRunningInterval(() => this.walkingAnimation(), 180);

        saveRunningInterval(() => this.getRandomNumber(), 2000);
    }


    /**
     * Method to get a random number (0 or 1) for animation variation.
     * @returns {number} - Random number (0 or 1).
     */
    getRandomNumber(){
        this.randomNumber = Math.round(Math.random());
        return this.randomNumber;
    }


    /**
     * Method to play walking or dangerous animation based on the random number.
     */
    walkingAnimation(){
        if (!this.changeAnimationJellyFish) {
            if (this.randomNumber === 0) {
                this.playAnimation(allImgs.JELLYFISH_IMAGES_WALIKNG);
            } else {
                this.playAnimation(allImgs.JELLYFISH_IMAGES_WALIKNG_DANGEROUS);
            }   
        }
    }


    /**
     * Method to load flow animation when the jellyfish gets hit.
     */
    loadFlowAnimation(){
        if (this.randomNumber === 0 && this.enemyGetHit) {
            this.enemyGetSlap();
        } else {
            this.enemyGetHit = false;
        }
    }

    
    /**
     * Method to check collision with bubble and load dead animation accordingly.
     */
    checkCollisionWithBubble(){
        if (this.changeAnimationJellyFish) {
            this.playAnimation(allImgs.JELLYFISH_IMAGES_DIED);
            this.y -= 15;
            this.offset = {
                top: 35, 
                left: 35, 
                right: 35,
                bottom: 35
            };
        }
    }

    /**
     * Method to move the jellyfish up and down.
     */
    moveUpandDown(){
        if (this.y < 20 || this.y > 400) {
            this.direction *= -1;
        }
        this.y += this.direction;
    }
}
