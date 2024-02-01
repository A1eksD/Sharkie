class Character extends MovableObject {
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
    };
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

    /**
     * Constructor for Character class.
     * Initializes properties and starts the animation.
     */
    constructor() {
        super().loadImage(allImgs.CHARACTER_IMAGES_WALIKNG[0]);
        this.loadImages(allImgs.CHARACTER_IMAGES_WALIKNG);
        this.loadImages(allImgs.CHARACTER_IMAGES_DEAD);
        this.loadImages(allImgs.CHARACTER_IMAGES_HURT);
        this.loadImages(allImgs.CHARACTER_IMAGES_SHOOT);
        this.loadImages(allImgs.CHARACTER_IMAGES_STAY);
        this.loadImages(allImgs.CHARACTER_IMAGES_SLEEP);
        this.loadImages(allImgs.CHARACTER_IMAGES_FIN_STRIKE);
        this.loadImages(allImgs.CHARACTER_IMAGES_INSTAND_DEAD);
        this.gameOver = false;
        this.animate();
    }


    /**
     * Method to set up intervals for continuous character actions.
     */
    animate() {
        saveRunningInterval(() => {
            audio.swimmingCharacterAudio.pause();
            this.changePosition();
            this.world.camera_x = -this.x + 250;
        }, 1000 / 60);

        saveRunningInterval(() => this.checkAllCharAnimations(), 140);
        saveRunningInterval(() => this.playEndScrean(), 2000);
    }


    /**
     * Method to check and play different character animations based on conditions.
     */
    checkAllCharAnimations() {
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
        } else if (this.doesCharStay()) {
            this.loadCharStayAnimation();
        }
    }


    /**
     * Method to handle character movement based on keyboard input.
     */
    changePosition() {
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


    /**
     * Method to check if the character should move right.
     */
    checkMoveRight() {
        return !this.charcterIsDead && this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX;
    }


    /**
     * Method to move the character to the right.
     */
    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        audio.swimmingCharacterAudio.play();
    }


    /**
     * Method to check if the character should move left.
     */
    checkMoveLeft() {
        return !this.charcterIsDead && this.world.keyboard.LEFT && this.x > (-720 * 3) - 30;
    }


    /**
     * Method to move the character to the left.
     */
    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        audio.swimmingCharacterAudio.play();
    }


    /**
     * Method to check if the character should move up.
     */
    checkMoveUp() {
        return !this.charcterIsDead && this.world.keyboard.UP && this.y > -60;
    }


    /**
     * Method to move the character up.
     */
    moveUp() {
        super.moveUp();
        audio.swimmingCharacterAudio.play();
    }


    /**
     * Method to check if the character should move down.
     */
    checkMoveDown() {
        return !this.charcterIsDead && this.world.keyboard.DOWN && this.y < 310;
    }


    /**
     * Method to move the character down.
     */
    moveDown() {
        super.moveDown();
        audio.swimmingCharacterAudio.play();
    }


    /**
     * Method to check if the character should shoot.
     */
    checkShoot() {
        return !this.charcterIsDead && this.world.keyboard.SHOOT;
    }


    /**
     * Method to check if the character should slap.
     */
    checkSlap() {
        return !this.charcterIsDead && this.world.keyboard.HIT;
    }


    /**
     * Method to check if the character can play the dead animation.
     */
    doesCharCanPlayDeadAnimation() {
        return this.characterIsDying && !this.otherDeath && !this.isInstandDead;
    }


    /**
     * Method to play the dead animation.
     */
    loadCharDeadAnimation() {
        this.standingValue = false;
        this.characterCanSlap = false;
        this.characterIsDying = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_DEAD);
    }


    /**
     * Method to check if the character can play the instant dead animation.
     */
    doesCharCanPlayInstandDeadAnimation() {
        return this.isInstandDead && this.electricDeath && this.otherDeath;
    }


    /**
     * Method to play the instant dead animation.
     */
    loadCharInstandDeadAnimation() {
        this.electricShock = true;
        this.standingValue = false;
        this.characterCanSlap = false;
        audio.characterGetElectricShockAudio.play();
        this.electricDeath = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_INSTAND_DEAD);
    }


    /**
     * Method to check if the character can be hurt.
     */
    doesCharCanBeHurt() {
        return this.isHurt() && !this.isInstandDead && !this.istHitting;
    }


    /**
     * Method to play the hurt animation and reset sleep timeout.
     */
    loadCharHurtAnimation() {
        audio.characterGetHitAudio.play();
        this.playAnimation(allImgs.CHARACTER_IMAGES_HURT);
        this.resetSleepTimeout();
    }


    /**
     * Method to check if the character can shoot.
     */
    doesCharCanShoot() {
        return this.shootAnimation && !this.characterIsDying && this.electricDeath;
    }


    /**
     * Method to play the shoot animation and reset sleep timeout.
     */
    loadCharShootAnimation() {
        this.shootAnimation = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_SHOOT);
        this.resetSleepTimeout();
    }


    /**
     * Method to check if the character can slap.
     */
    doesCharCanSlap() {
        return this.characterStrikes && this.characterStrikesValue && this.istHitting && this.characterCanSlap;
    }


    /**
     * Method to play the final slap animation and reset sleep timeout.
     */
    loadCharFinSlapAnimation() {
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


    /**
     * Method to reset the offset and flags after a timeout.
     */
    loadTimeout() {
        setTimeout(() => {
            this.offset.right = 35;
            this.offset.top = 35;
            this.characterStrikes = false;
            this.enemyGetHit = false;
            this.istHitting = false;
        }, 1120);
    }


    /**
     * Method to check if the character can walk.
     */
    doesCharCanWalk() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN;
    }


    /**
     * Method to play the walking animation and reset sleep timeout.
     */
    loadCharWalkingAnimation() {
        if (!this.charcterIsDead) {
            this.playAnimation(allImgs.CHARACTER_IMAGES_WALIKNG);
            this.resetSleepTimeout();
            this.world.bossCollistionWithCharacter = false;
        }
    }


    /**
     * Method to check if the character should stay.
     */
    doesCharStay() {
        return this.standingValue;
    }


    /**
     * Method to play the staying or sleeping animation based on conditions.
     */
    loadCharStayAnimation() {
        this.playAnimation(allImgs.CHARACTER_IMAGES_STAY);
        this.counter++;
        this.changeValueToTrue();
    }


    /**
     * Method to change the standing value after a certain counter threshold.
     */
    changeValueToTrue() {
        if (this.counter >= 40 && this.standingValue) {
            this.playAnimation(allImgs.CHARACTER_IMAGES_SLEEP);
        }
    }


    /**
     * Method to reset the sleep timeout counter.
     */
    resetSleepTimeout() {
        this.counter = 0;
    }


    /**
     * Method to play the end screen when the character is dead.
     */
    playEndScrean() {
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


    /**
     * Method to display end screen classes on character's death.
     */
    playEndScreanClasses() {
        document.getElementById('endScrean').classList.remove('d-none');
        document.getElementById('gameOver').classList.remove('d-none');
        document.getElementById('youWin').classList.add('d-none');
        setTimeout(() => {
            document.getElementById('tryAgainImg').classList.remove('d-none');
            document.getElementById('tryAgainImg').classList.add('tryAgainImg');
        }, 3000);
    }
}
