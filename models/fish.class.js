class Fish extends MovableObject {
    width = 80;
    height = 80;
    currentImage = 0;
    offset = {
        top: 5, 
        left: 5, 
        right: 10,
        bottom: 15
    }

    

    constructor(y){
        super();
        this.loadImage(allImgs.FISH_IMAGES_WALIKNG[0]);
        this.loadImages(allImgs.FISH_IMAGES_WALIKNG);
        this.loadImages(allImgs.FISH_IMAGES_DEAD);
        this.x = 1000 + (Math.random() * 2000);
        this.speed = 0.5 + Math.random() * 1;
        this.y = y;
        this.animate();
    }


    animate(){
        saveRunningInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

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


    loadDeadAnimation(){
        if (this.enemyGetHit) {
            this.playAnimation(allImgs.FISH_IMAGES_DEAD);
        }
    }
    
}