class Character extends MovableObject{
    height = 180;
    width = 180;
    y = 50;
    speed = 7;
    world;
    offset = {
            top: 35, 
            left: 85, 
            right: 35,
            bottom: 45
        }
    shootAnimation = false;
    characterIsDying = false;
    isDeadProcessed = false;
    charcterIsDead = false;
    charcterDied = true;
    isSleepingValue = 0; 
    isStandingValue = 0;
    standingValue = true;
    isInstandDead = false;
    electricDeath = true;
    normalDeath = false;
    otherDeath = false;
    counter = 0;
    characterStrikes = false;
    characterStrikesValue = false;
    electricShock = false;
    istHitting = false;
    isStriking = false;
    characterCanSlap = true;





    constructor(){
        super();
        this.gameOver = false;
        this.loadImage(allImgs.CHARACTER_IMAGES_WALIKNG[0]);
        this.loadImages(allImgs.CHARACTER_IMAGES_WALIKNG);
        this.loadImages(allImgs.CHARACTER_IMAGES_DEAD);
        this.loadImages(allImgs.CHARACTER_IMAGES_HURT);
        this.loadImages(allImgs.CHARACTER_IMAGES_SHOOT);
        this.loadImages(allImgs.CHARACTER_IMAGES_STAY);
        this.loadImages(allImgs.CHARACTER_IMAGES_SLEEP);
        this.loadImages(allImgs.CHARACTER_IMAGES_FIN_STRIKE);
        this.loadImages(allImgs.CHARACTER_IMAGES_INSTAND_DEAD);
        this.animate();
    }


    animate(){
        saveRunningInterval(() => {
            audio.swimmingCharacterAudio.pause();
            this.changePosition();
            this.world.camera_x = -this.x + 250;
        }, 1000 / 60);

        saveRunningInterval(() => this.checkAllCharAnimations(), 140);

        saveRunningInterval(() => this.playEndScrean(), 2000);
    }

    checkAllCharAnimations(){
        if (this.doesCharCanPlayDeadAnimation()) {
            this.loadCharDeadAnimation();
        } else if (this.doesCharCanPlayInstandDeadAnimation()) {
            this.loadCharInstandDeadAnimation();
        } else if (this.doesCharCanBeHurt()) {
            this.loadCharHurtAnimation();
        } else if (this.doesCharCanShoot()) {
            this.loadCharShootAnimation();
        } else if (this.doesCharCanSlap()) {
            this.loadCharFinSlapAnimation();
        } else if (this.doesCharCanWalk()) {
            this.loadCharWalkingAnimation();
        } else if (this.doesCharStay()){
            this.loadCharStayAnimation();
        }
    }


    changePosition(){
        if (this.checkMoveRight()) {
            this.moveRight();
        }
        if (this.checkMoveLeft()) { 
            this.moveLeft();
        }
        if (this.checkMoveUp()) {
            this.moveUp();
        }
        if (this.checkMoveDown()) {
            this.moveDown();
        }
        if (this.checkShoot()) {
            this.world.bossCollistionWithCharacter = false;
        }
        if (this.checkSlap()) {
            this.world.bossCollistionWithCharacter = false;
        }
    }

    checkMoveRight(){
        return !this.charcterIsDead && this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX;
    }


    moveRight(){
        super.moveRight();
        this.otherDirection = false;
        audio.swimmingCharacterAudio.play();
    }


    checkMoveLeft(){
        return !this.charcterIsDead && this.world.keyboard.LEFT && this.x > (-720*3)-30;
    }


    moveLeft(){
        super.moveLeft();
        this.otherDirection = true;
        audio.swimmingCharacterAudio.play();
    }


    checkMoveUp(){
        return !this.charcterIsDead && this.world.keyboard.UP  && this.y > -60;
    }


    moveUp(){
        super.moveUp();
        audio.swimmingCharacterAudio.play();
    }


    checkMoveDown(){
        return !this.charcterIsDead && this.world.keyboard.DOWN && this.y < 310;
    }


    moveDown(){
        super.moveDown();
        audio.swimmingCharacterAudio.play();
    }


    checkShoot(){
        return !this.charcterIsDead && this.world.keyboard.SHOOT;
    }


    checkSlap(){
        return !this.charcterIsDead && this.world.keyboard.HIT;
    }


    doesCharCanPlayDeadAnimation(){
        return this.characterIsDying && !this.otherDeath && !this.isInstandDead;
    }


    loadCharDeadAnimation(){
        this.standingValue = false;
        this.characterCanSlap = false;
        this.characterIsDying = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_DEAD);
    }


    doesCharCanPlayInstandDeadAnimation(){
        return this.isInstandDead  &&  this.electricDeath && this.otherDeath;
    }


    loadCharInstandDeadAnimation(){
        this.electricShock = true;
        this.standingValue = false;
        this.characterCanSlap = false;
        audio.characterGetElectricShockAudio.play();
        this.electricDeath = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_INSTAND_DEAD);
    }


    doesCharCanBeHurt(){
        return this.isHurt() && !this.isInstandDead && !this.istHitting;
    }


    loadCharHurtAnimation(){
        audio.characterGetHitAudio.play();
        this.playAnimation(allImgs.CHARACTER_IMAGES_HURT);
        this.resetSleepTimeout();
    }


    doesCharCanShoot(){
        return this.shootAnimation && !this.characterIsDying && this.electricDeath;
    }


    loadCharShootAnimation(){
        this.shootAnimation = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_SHOOT);
        this.resetSleepTimeout();
    }


    doesCharCanSlap(){
        return this.characterStrikes && this.characterStrikesValue && this.istHitting && this.characterCanSlap;
    }


    loadCharFinSlapAnimation(){
        audio.characterSlapAudio.play();
        this.characterStrikesValue = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_FIN_STRIKE);
        this.isStriking = true;
        if (!this.otherDirection) {
            this.offset.right = 5;
        } else {
            this.offset.top = 5;
        }
        this.resetSleepTimeout();
        this.world.characterIsSlapping();
        this.loadTimeout();
    }


    loadTimeout(){
        setTimeout(() =>{
            this.offset.right = 35;
            this.offset.top = 35;
            this.characterStrikes = false;
            this.enemyGetHit = false;
            this.istHitting = false;
        }, 1120);
    }


    doesCharCanWalk(){
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN;
    }


    loadCharWalkingAnimation(){
        if (!this.charcterIsDead) {
            this.playAnimation(allImgs.CHARACTER_IMAGES_WALIKNG);
            this.resetSleepTimeout();
            this.world.bossCollistionWithCharacter = false;
        }
    }


    doesCharStay(){
        return this.standingValue;
    }


    loadCharStayAnimation(){
        this.playAnimation(allImgs.CHARACTER_IMAGES_STAY);
        this.counter ++;
        this.changeValueToTrue();
    }



    changeValueToTrue() {
        if (this.counter >= 40 && this.standingValue) {
            this.playAnimation(allImgs.CHARACTER_IMAGES_SLEEP);
        } 
    }
      
    
    resetSleepTimeout() {
        this.counter = 0;
    }


    playEndScrean(){
        if (this.energy === 0 && !this.gameOver) {
            this.gameOver = true;
            audio.introduceBoss.pause();
            audio.backgroundAudio.pause();
            audio.loseAudio.play();
            audio.loseAudio.loop = false;
            this.playEndScreanClasses();
            this.stopGame();
        }
    }
    

    playEndScreanClasses(){
        document.getElementById('endScrean').classList.remove('d-none');
        document.getElementById('gameOver').classList.remove('d-none');
        document.getElementById('youWin').classList.add('d-none');
        document.getElementById('tryAgainImg').classList.remove('d-none');
        document.getElementById('tryAgainImg').classList.add('tryAgainImg');
    }
}