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
    enbossGetSlap = false;
    enbossGetSlapValue = false;
    i = 0;
    resetCurrenImg = false;
    showHPfromBoss = false;
    enbossDeadAnimation = true;
    deadAnimation = false;
    introduceDone = false;
    



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
        this.x = (720*5)+200;
        this.animate();
    }


    animate(){
        saveRunningInterval( () => {
            this.loadIntroduceAnimation();
            this.checkPercentaceForHP();
        }, 100);

        saveRunningInterval(() => {
            let distanceToBoss = this.x - this.world.character.x;
            this.i++;
            this.checkAnimationsFromBoss(this.i, distanceToBoss);
        }, 140);

        saveRunningInterval(() => {
            if (this.isEnbodDead()){
                this.loadEndbossDeadAnimation();
            } 
        }, 190);

        saveRunningInterval(() => this.checkIfBossIsDead(), 2000);
    }


    isEnbodDead(){
        return this.percentace == 0 && this.enbossDeadAnimation && this.deadAnimation;
    }


    loadEndbossDeadAnimation(){
        this.enbossDeadAnimation = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_DEAD);
        this.offset = {
            left: 170, 
            top: 120, 
            right: 120,
            bottom: 120
        }
    }


    checkPercentaceForHP(){
        if (this.percentace <= 0) {
            this.deadAnimation = true;
        }
    }


    checkAnimationsFromBoss(i, distanceToBoss){
        if (this.doesEndbossGetHutBubble()) {
            this.loadEndbossGetHutBubbleAnimation();
        } else if (this.doesEndbossGetHutNormal()) {
            this.loadEndbossGetHutNormalAnimation();
        } else if (this.doesEndbossAttack(distanceToBoss)) {
            this.loadEndbossAttackAnimation();
        } else if (this.doesEndbossIntroduce(i)) {
            this.loadEndbossIntroduceAnimation();
        } else if (this.doesEndbossWalk()) {
            this.loadEndbossWalkAnimation();
        }
    }


    doesEndbossGetHutBubble(){
        return this.hurtWithBubble && this.hurtWithBubbleValue && !this.deadAnimation;
    }


    loadEndbossGetHutBubbleAnimation(){
        audio.bossGetDmgBubble.play();
        this.hurtWithBubbleValue = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_HURT_BUBBLE);
    }


    doesEndbossGetHutNormal(){
        return this.enbossGetSlap && this.enbossGetSlapValue && !this.deadAnimation;
    }


    loadEndbossGetHutNormalAnimation(){
        audio.bossGetHit.play();
        this.enbossGetSlapValue = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_HURT);
    }


    doesEndbossAttack(distanceToBoss){
        return distanceToBoss < 180 && !this.deadAnimation;
    }


    loadEndbossAttackAnimation(){
        this.playAnimation(allImgs.BOSS_IMAGES_ATTACK);
    }


    doesEndbossIntroduce(i){
        return i < 10;
    }


    loadEndbossIntroduceAnimation(){
        this.playAnimation(allImgs.BOSS_IMAGES_INTRODUCE);
        setTimeout(() => {
            this.introduceDone = true;
        }, 1400);
    }


    doesEndbossWalk(){
        return !this.deadAnimation;
    }

    
    loadEndbossWalkAnimation(){
        this.playAnimation(allImgs.BOSS_IMAGES_WALIKNG);
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
            this.followCharacter();
        }
    }


    followCharacter() {
        saveRunningInterval(() => {
            if (this.doesBossHavePositionOfChar()) {
                if (this.x >= this.world.character.x - 100) {
                    this.checkMoveLeft();
                } else if (this.x <= this.world.character.x - 50) {
                    this.checkMoveRight();
                }
    
                if (this.y >= this.world.character.y - 100) {
                    this.checkMoveUp();
                } else if (this.y <= this.world.character.y - 50) {
                    this.checkMoveDown();
                }
            }
        }, 1000 / 60);
    }


    doesBossHavePositionOfChar(){
        return !this.world.bossCollistionWithCharacter && !this.deadAnimation && this.introduceDone;
    }
    

    checkMoveLeft(){
        if (this.x - this.world.character.x > this.world.character.offset.right) {
            this.moveLeft();
            this.otherDirection = false;
        }
    }


    checkMoveRight(){
        if (this.x - this.world.character.x < this.world.character.offset.right) {
            this.moveRight();
            this.otherDirection = true;
        }
    }


    checkMoveUp(){
        if (this.y - this.world.character.y > this.world.character.offset.bottom - 80) {
            this.moveUp();
        }
    }


    checkMoveDown(){
        if (this.y - this.world.character.y < this.world.character.offset.bottom - 50) {
            this.moveDown();
        }
    }


    checkIfBossIsDead(){
        if (this.percentace === 0 && !this.gameOver) {
            this.gameOver = true;
            audio.introduceBoss.pause();
            audio.winAudio.play();
            this.checkIfBossIsDeadClasses();
            this.stopGame();
        }
    }


    checkIfBossIsDeadClasses(){
        document.getElementById('endScrean').classList.remove('d-none');
        document.getElementById('youWin').classList.remove('d-none');
        document.getElementById('tryAgainImg').classList.remove('d-none');
        document.getElementById('gameOver').classList.add('d-none');
        document.getElementById('endScreanBtn').classList.add('endScreanWinBtn');
        document.getElementById('tryAgainImg').classList.add('tryAgainImg');
    }

}