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
    



    constructor() {
        super();
        this.gameOver = false;
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
        saveRunningInterval( () => {
            this.loadIntroduceAnimation();
        }, 140);

        saveRunningInterval(() => {
            this.test();
        }, 100);

        saveRunningInterval(() => {
            let distanceToBoss = this.x - this.world.character.x;
            this.i++;

            if (this.hurtWithBubble && this.hurtWithBubbleValue && !this.deadAnimation) {
                audio.bossGetDmgBubble.play();
                this.hurtWithBubbleValue = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_HURT_BUBBLE);
            } else if (this.enbossGetSlep && this.enbossGetSlepValue && !this.deadAnimation) {
                audio.bossGetHit.play();
                this.enbossGetSlepValue = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_HURT);
            } else if (distanceToBoss < 180 && !this.deadAnimation) {
                this.playAnimation(allImgs.BOSS_IMAGES_ATTACK);
            } else if (this.i < 10) {
                this.playAnimation(allImgs.BOSS_IMAGES_INTRODUCE);
            } else if (!this.deadAnimation) {
                this.playAnimation(allImgs.BOSS_IMAGES_WALIKNG);
            }
        }, 140);

        saveRunningInterval(() => {
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


        saveRunningInterval(() => {
            this.checkIfBossIsDead();
        }, 2000);
    }


    loadIntroduceAnimation() {
        if (this.world.character.x >= (720*5)-450 && !this.introduceToCharacter) {
            audio.backgroundAudio.pause();
            audio.introduceBoss.play();
            audio.introduceBoss.loop = true;
            this.introduceToCharacter = true;
            this.i = 0;
            this.showHPfromBoss = true;
            this.world.statusBarBoss.updateHealthBarBoss();
            saveRunningInterval(() => {
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
        saveRunningInterval(() => {
            if (!this.world.collistionWithCharacter && !this.deadAnimation) {
                if (this.x >= this.world.character.x - 100) {
                    if (this.x - this.world.character.x > this.world.character.offset.right) {
                        this.moveLeft();
                        this.otherDirection = false;
                        console.log('--------------')
                    }
                } else if (this.x <= this.world.character.x - 50) {
                    if (this.x - this.world.character.x < this.world.character.offset.right) {
                        this.moveRight();
                        this.otherDirection = true;
                        console.log('+++++++++++++')
                    }
                }
    
                if (this.y >= this.world.character.y - 100) {
                    if (this.y - this.world.character.y > this.world.character.offset.bottom - 80) {
                        this.moveUp();
                        console.log('<<<<<<<<<<<<<<<<')
                    }
                } else if (this.y <= this.world.character.y - 50) {
                    if (this.y - this.world.character.y < this.world.character.offset.bottom - 50) {
                        this.moveDown();
                        console.log('>>>>>>>>>>>>>>>>>>>>>>>')
                    }
                }
            }
        }, 1000 / 60);
    }
    


    checkIfBossIsDead(){
        if (this.percentace == 0 && !this.gameOver) {
            this.gameOver = true;
            audio.introduceBoss.pause();
            audio.winAudio.play();
            console.log('endboss is tot', this.gameOver)
            document.getElementById('endScrean').classList.remove('d-none');
            document.getElementById('youWin').classList.remove('d-none');
            document.getElementById('tryAgainImg').classList.remove('d-none');
            document.getElementById('endScreanBtn').classList.add('endScreanWinBtn');
            document.getElementById('tryAgainImg').classList.add('tryAgainImg');
            this.stopGame();
        }
    }

}