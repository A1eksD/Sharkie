
class Fish extends MovableObject {
    width = 80;
    height = 80;
    offset = {
        top: 5, 
        left: 5, 
        right: 10,
        bottom: 15
    };


    /**
     * Constructor for the Fish class.
     * @param {number} y - The initial y-coordinate of the fish.
     */
    constructor(y){
        super().loadImage(allImgs.FISH_IMAGES_WALIKNG[0]);
        this.loadImages(allImgs.FISH_IMAGES_WALIKNG);
        this.loadImages(allImgs.FISH_IMAGES_DEAD);
        this.x = 1000 + (Math.random() * 2000);
        this.speed = 0.5 + Math.random() * 1;
        this.y = y;
        this.animate();
    }


    /**
     * Method to animate the fish's movement and animations.
     */
    animate(){
        saveRunningInterval(() => this.moveLeft(), 1000 / 60);
        
        saveRunningInterval(() => {
            if (!this.changeAnimation) {
                this.playAnimation(allImgs.FISH_IMAGES_WALIKNG);   
            }
        }, 180 );

        saveRunningInterval(() => {
            this.enemyGetSlap();
            this.loadDeadAnimation();
        },  1000 / 60);
    }


    /**
     * Method to load the dead animation if the fish has been hit by the enemy.
     */
    loadDeadAnimation(){
        if (this.enemyGetHit) {
            this.playAnimation(allImgs.FISH_IMAGES_DEAD);
        }
    }
}
