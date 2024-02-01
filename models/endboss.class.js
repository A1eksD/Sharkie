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


    /**
     * Constructor for Endboss class.
     * Initializes properties and sets the initial position and animations.
     */
    constructor() {
        super().loadImage(allImgs.BOSS_IMAGES_WALIKNG[0]);
        this.loadImages(allImgs.BOSS_IMAGES_WALIKNG);
        this.loadImages(allImgs.BOSS_IMAGES_INTRODUCE);
        this.loadImages(allImgs.BOSS_IMAGES_ATTACK);
        this.loadImages(allImgs.BOSS_IMAGES_HURT);
        this.loadImages(allImgs.BOSS_IMAGES_HURT_BUBBLE);
        this.loadImages(allImgs.BOSS_IMAGES_DEAD);
        this.gameOver = false;
        this.percentace;
        this.x = (720 * 5) + 200;
        this.animate();
    }


    /**
     * Method to handle various animations and actions of the Endboss.
     */
    animate() {
        saveRunningInterval(() => {
            this.loadIntroduceAnimation();
            this.checkPercentaceForHP();
        }, 100);

        saveRunningInterval(() => {  
            let distanceToBoss = this.x - this.world.character.x;
            this.i++;
            this.checkAnimationsFromBoss(this.i, distanceToBoss);
        }, 140);

        saveRunningInterval(() => {
            if (this.isEnbossDead()){
                this.loadEndbossDeadAnimation();
            } 
        }, 190);

        saveRunningInterval(() => this.checkIfBossIsDead(), 2000);
    }


    /**
     * Method to check if the Endboss is dead based on health percentage.
     * @returns {boolean} - True if the Endboss is dead, false otherwise.
     */
    isEnbossDead(){
        return this.percentace == 0 && this.enbossDeadAnimation && this.deadAnimation;
    }


    /**
     * Method to load the Endboss dead animation.
     */
    loadEndbossDeadAnimation(){
        this.enbossDeadAnimation = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_DEAD);
        this.offset = {
            left: 170, 
            top: 120, 
            right: 120,
            bottom: 120
        }
    }


    /**
     * Method to check health percentage for specific actions.
     */
    checkPercentaceForHP(){
        if (this.percentace <= 0) {
            this.deadAnimation = true;
        }
    }


    /**
     * Method to check and perform various animations based on conditions.
     * @param {number} i - Counter variable for introducing animation.
     * @param {number} distanceToBoss - Distance between character and Endboss.
     */
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


    /**
     * Method to check if the Endboss got hurt by bubble.
     * @returns {boolean} - True if the Endboss got hurt by bubble, false otherwise.
     */
    doesEndbossGetHutBubble(){
        return this.hurtWithBubble && this.hurtWithBubbleValue && !this.deadAnimation;
    }


    /**
     * Method to load the Endboss hurt by bubble animation.
     */
    loadEndbossGetHutBubbleAnimation(){
        audio.bossGetDmgBubble.play();
        this.hurtWithBubbleValue = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_HURT_BUBBLE);
    }


    /**
     * Method to check if the Endboss got hurt normally.
     * @returns {boolean} - True if the Endboss got hurt normally, false otherwise.
     */
    doesEndbossGetHutNormal(){
        return this.enbossGetSlap && this.enbossGetSlapValue && !this.deadAnimation;
    }


    /**
     * Method to load the Endboss hurt normally animation.
     */
    loadEndbossGetHutNormalAnimation(){
        audio.bossGetHit.play();
        this.enbossGetSlapValue = this.playAnimationFirstToLastImg(allImgs.BOSS_IMAGES_HURT);
    }


    /**
     * Method to check if the Endboss is attacking.
     * @param {number} distanceToBoss - Distance between character and Endboss.
     * @returns {boolean} - True if the Endboss is attacking, false otherwise.
     */
    doesEndbossAttack(distanceToBoss){
        return distanceToBoss < 180 && !this.deadAnimation;
    }


    /**
     * Method to load the Endboss attack animation.
     */
    loadEndbossAttackAnimation(){
        this.playAnimation(allImgs.BOSS_IMAGES_ATTACK);
    }


    /**
     * Method to check if the Endboss is introducing itself.
     * @param {number} i - Counter variable for introducing animation.
     * @returns {boolean} - True if the Endboss is introducing, false otherwise.
     */
    doesEndbossIntroduce(i){
        return i < 10;
    }


    /**
     * Method to load the Endboss introduction animation.
     */
    loadEndbossIntroduceAnimation(){
        this.playAnimation(allImgs.BOSS_IMAGES_INTRODUCE);
        // Set a timeout to mark the end of the introduction animation
        setTimeout(() => this.introduceDone = true, 1400);
    }


    /**
     * Method to check if the Endboss is walking.
     * @returns {boolean} - True if the Endboss is walking, false otherwise.
     */
    doesEndbossWalk(){
        return !this.deadAnimation;
    }


    /**
     * Method to load the Endboss walking animation.
     */
    loadEndbossWalkAnimation(){
        this.playAnimation(allImgs.BOSS_IMAGES_WALIKNG);
    }


    /**
     * Method to initiate the introduction animation of the Endboss.
     */
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


    /**
     * Method to make the Endboss follow the character's position.
     */
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


    /**
     * Method to check if the Boss has the position of the character.
     * @returns {boolean} - True if the Boss has the position of the character, false otherwise.
     */
    doesBossHavePositionOfChar(){
        return !this.world.bossCollistionWithCharacter && !this.deadAnimation && this.introduceDone;
    }


    /**
     * Method to check if the Boss should move left.
     */
    checkMoveLeft(){
        if (this.x - this.world.character.x > this.world.character.offset.right) {
            this.moveLeft();
            this.otherDirection = false;
        }
    }


    /**
     * Method to check if the Boss should move right.
     */
    checkMoveRight(){
        if (this.x - this.world.character.x < this.world.character.offset.right) {
            this.moveRight();
            this.otherDirection = true;
        }
    }


    /**
     * Method to check if the Boss should move up.
     */
    checkMoveUp(){
        if (this.y - this.world.character.y > this.world.character.offset.bottom - 80) {
            this.moveUp();
        }
    }


    /**
     * Method to check if the Boss should move down.
     */
    checkMoveDown(){
        if (this.y - this.world.character.y < this.world.character.offset.bottom - 50) {
            this.moveDown();
        }
    }


    /**
     * Method to check if the Boss is dead and trigger the game-over state.
     */
    checkIfBossIsDead(){
        if (this.percentace === 0 && !this.gameOver) {
            this.gameOver = true;
            audio.introduceBoss.pause();
            audio.winAudio.play();
            this.checkIfBossIsDeadClasses();
            this.stopGame();
        }
    }

    
    /**
     * Method to display game-over UI elements for the Boss's death.
     */
    checkIfBossIsDeadClasses(){
        document.getElementById('endScrean').classList.remove('d-none');
        document.getElementById('youWin').classList.remove('d-none');
        document.getElementById('tryAgainImg').classList.remove('d-none');
        document.getElementById('gameOver').classList.add('d-none');
        document.getElementById('endScreanBtn').classList.add('endScreanWinBtn');
        document.getElementById('tryAgainImg').classList.add('tryAgainImg');
    }
}