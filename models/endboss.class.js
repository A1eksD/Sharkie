class Endboss extends MovableObject {
    currentImage = 0;
    height = 300;
    width = 300;
    y = 0;
    IMAGES_INTRODUCE = [
        'img/2.Enemy/3_Final_Enemy/1.Introduce/1.png',
        'img/2.Enemy/3_Final_Enemy/1.Introduce/2.png',
        'img/2.Enemy/3_Final_Enemy/1.Introduce/3.png',
        'img/2.Enemy/3_Final_Enemy/1.Introduce/4.png',
        'img/2.Enemy/3_Final_Enemy/1.Introduce/5.png',
        'img/2.Enemy/3_Final_Enemy/1.Introduce/6.png',
        'img/2.Enemy/3_Final_Enemy/1.Introduce/7.png',
        'img/2.Enemy/3_Final_Enemy/1.Introduce/8.png',
        'img/2.Enemy/3_Final_Enemy/1.Introduce/9.png',
        'img/2.Enemy/3_Final_Enemy/1.Introduce/10.png'
    ];
    IMAGES_WALIKNG = [
        'img/2.Enemy/3_Final_Enemy/2.floating/1.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/2.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/3.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/4.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/5.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/6.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/7.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/8.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/9.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/10.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/11.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/12.png',
        'img/2.Enemy/3_Final_Enemy/2.floating/13.png'
    ];
    IMAGES_ATTACK = [
        'img/2.Enemy/3_Final_Enemy/Attack/1.png',
        'img/2.Enemy/3_Final_Enemy/Attack/2.png',
        'img/2.Enemy/3_Final_Enemy/Attack/3.png',
        'img/2.Enemy/3_Final_Enemy/Attack/4.png',
        'img/2.Enemy/3_Final_Enemy/Attack/5.png',
        'img/2.Enemy/3_Final_Enemy/Attack/6.png'
    ];
    IMAGES_HURT = [
        'img/2.Enemy/3_Final_Enemy/Hurt/1.png',
        'img/2.Enemy/3_Final_Enemy/Hurt/1.png',
        'img/2.Enemy/3_Final_Enemy/Hurt/1.png',
        'img/2.Enemy/3_Final_Enemy/Hurt/1.png',
        'img/2.Enemy/3_Final_Enemy/Hurt/1.png'
    ];
    IMAGES_HURT_BUBBLE = [
        'img/2.Enemy/3_Final_Enemy/Hurt/1.png',
        'img/2.Enemy/3_Final_Enemy/Hurt/2.png',
        'img/2.Enemy/3_Final_Enemy/Hurt/3.png',
        'img/2.Enemy/3_Final_Enemy/Hurt/4.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/3_Final_Enemy/Dead/Mesa_de_trabajo_2.png',
        'img/2.Enemy/3_Final_Enemy/Dead/Mesa_de_trabajo_2_copia_6.png',
        'img/2.Enemy/3_Final_Enemy/Dead/Mesa_de_trabajo_2_copia_7.png',
        'img/2.Enemy/3_Final_Enemy/Dead/Mesa_de_trabajo_2_copia_8.png',
        'img/2.Enemy/3_Final_Enemy/Dead/Mesa_de_trabajo_2_copia_9.png',
        'img/2.Enemy/3_Final_Enemy/Dead/Mesa_de_trabajo_2_copia_10.png'
    ];
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
        super().loadImage(this.IMAGES_WALIKNG[0]);
        this.loadImages(this.IMAGES_WALIKNG);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_HURT_BUBBLE);
        this.loadImages(this.IMAGES_DEAD);
        this.percentace;
        this.x = 900;
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
                this.hurtWithBubbleValue = this.playAnimationFirstToLastImg(this.IMAGES_HURT_BUBBLE);
            } else if (this.enbossGetSlep && this.enbossGetSlepValue && !this.deadAnimation) {
                this.enbossGetSlepValue = this.playAnimationFirstToLastImg(this.IMAGES_HURT);
            } else if (distanceToBoss < 180 && !this.deadAnimation) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.i < 10) {
                this.playAnimation(this.IMAGES_INTRODUCE);
            } else if (!this.deadAnimation) {
                this.playAnimation(this.IMAGES_WALIKNG);
            }
        }, 140);
        setInterval(() => {
            if (this.percentace == 0 && this.enbossDeadAnimation && this.deadAnimation){
                this.enbossDeadAnimation = this.playAnimationFirstToLastImg(this.IMAGES_DEAD);
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
        if (this.world.character.x >= 500 && !this.introduceToCharacter) {
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