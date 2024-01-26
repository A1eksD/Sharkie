class Endboss extends MovableObject {
    currentImage = 0;
    height = 300;
    width = 300;
    y = 0;
    offset = {
        left: 145, 
        top: 25, 
        right: 25,
        bottom: 60
    }
    world;
    hurtWithBubble = false;
    introduceToCharacter = false;
    shootBubbleOnEndboss = false;
    enbossGetSlep = false;
    enbossGetSlepValue = false;
    i = 0;
    resetCurrenImg = false;
    showHPfromBoss = false;
    enbossDeadAnimation = true;
    deadAnimation = false;
    // collistionWithCharacter = true;



    constructor() {
        super();
        // this.allImgs;
        // this.audio;
        this.loadImage(allImgs.BOSS_IMAGES_WALIKNG[0]);
        this.loadImages(allImgs.BOSS_IMAGES_WALIKNG);
        this.loadImages(allImgs.BOSS_IMAGES_INTRODUCE);
        this.loadImages(allImgs.BOSS_IMAGES_ATTACK);
        this.loadImages(allImgs.BOSS_IMAGES_HURT);
        this.loadImages(allImgs.BOSS_IMAGES_HURT_BUBBLE);
        this.loadImages(allImgs.BOSS_IMAGES_DEAD);
        this.percentace;
        this.x = 720*5;
        this.animate();
    }

    animate(){
        setInterval( () => {
            this.loadIntroduceAnimation();
        }, 140);

        setInterval(() => {
            this.test();
        }, 100);

        setInterval(() => {
            let distanceToBoss = this.x - this.world.character.x;
            this.i++;

            if (this.hurtWithBubble && this.hurtWithBubbleValue && !this.deadAnimation) {
                console.log(this.hurtWithBubbleValue)
                this.hurtWithBubbleValue = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_HURT_BUBBLE);
            } else if (this.enbossGetSlep && this.enbossGetSlepValue && !this.deadAnimation) {
                this.enbossGetSlepValue = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_HURT);
            } else if (distanceToBoss < 180 && !this.deadAnimation) {
                this.playAnimation(allImgs.BOSS_IMAGES_ATTACK);
            } else if (this.i < 10) {
                this.playAnimation(allImgs.BOSS_IMAGES_INTRODUCE);
            } else if (!this.deadAnimation) {
                this.playAnimation(allImgs.BOSS_IMAGES_WALIKNG);
            }
        }, 140);
        setInterval(() => {
            if (this.percentace == 0 && this.enbossDeadAnimation && this.deadAnimation){
                this.enbossDeadAnimation = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_DEAD);
                this.offset = {
                    left: 170, 
                    top: 120, 
                    right: 120,
                    bottom: 120
                }
            } 
        }, 190);
    }


    loadIntroduceAnimation() {
        if (this.world.character.x >= (720*4) && !this.introduceToCharacter) {
            this.introduceToCharacter = true;
            this.i = 0;
            this.showHPfromBoss = true;
            this.world.statusBarBoss.updateHealthBarBoss();
            setTimeout(() => {
                this.followCharacter();
            }, 1000);
        }
    }


    test(){
        if (this.percentace <= 0) {
            this.deadAnimation = true;
        }
    }


    followCharacter() {
        setInterval(() => {
            if (!this.world.collistionWithCharacter && !this.deadAnimation) {
                if (this.x >= this.world.character.x - 100) {
                    if (this.x - this.world.character.x > this.world.character.offset.right) {
                        this.moveLeft();
                        this.otherDirection = false;
                    }
                } else if (this.x <= this.world.character.x - 50) {
                    if (this.x - this.world.character.x < this.world.character.offset.right) {
                        this.moveRight();
                        this.otherDirection = true;
                    }
                }
    
                if (this.y >= this.world.character.y - 100) {
                    if (this.y - this.world.character.y > this.world.character.offset.bottom - 80) {
                        this.moveUp();
                    }
                } else if (this.y <= this.world.character.y - 50) {
                    if (this.y - this.world.character.y < this.world.character.offset.bottom - 50) {
                        this.moveDown();
                    }
                }
            }
        }, 1000 / 60);
    }
    
}