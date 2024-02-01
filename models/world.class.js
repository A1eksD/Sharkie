class World {
    character = new Character();
    level = loadLevel;
    canvas;
    ctx;
    keyboard;
    camera_x = 10;
    statusBar = new StatusBar();
    statusBarBoss = new StatusBarBoss();
    coinBar = new CoinBar();
    toxicBottlesBar = new ToxicBottlesBar();
    bubble = [new ThrowableObject()];
    endboss = new Endboss();
    changeCurrentImgTo0 = false;
    bossCollisionWithCharacter = false;
    shootOnce = true;
    characterSlapAgain = true;


    /**
     * Constructor for the World class
     * @param {HTMLCanvasElement} canvas - The canvas element
     * @param {Keyboard} keyboard - The keyboard object
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.bottleValue;
        this.draw();
        this.setWorld();
        this.run();
        this.functionsWithSlowerInterval();
        this.functionsWithHigherInterval();
    }

    /**
     * Set the world for the character and endboss
     */
    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    /**
     * Draw the game world
     */
    draw() {
        this.loadStaticObjects();
        this.loadEnemyObjects();
        this.loadFixedObjects();
        this.loadCharObject();

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * Load static objects in the game world
     */
    loadStaticObjects() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.updateParallaxEffect();
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.bubble);
        this.addObjectsToMap(this.level.coins);
    }

    /**
     * Load enemy objects in the game world
     */
    loadEnemyObjects() {
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.endboss);
    }

    /**
     * Load fixed objects in the game world
     */
    loadFixedObjects() {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.toxicBottlesBar);
        if (this.endboss.showHPfromBoss) {
            this.addToMap(this.statusBarBoss);
        }
        this.ctx.translate(this.camera_x, 0);
    }

    /**
     * Load character object in the game world
     */
    loadCharObject() {
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
    }

    /**
     * Add an array of objects to the game world
     * @param {Array} objects - The array of objects to add
     */
    addObjectsToMap(objects) {
        objects.forEach(element => {
            this.addToMap(element);
        });
    }

    /**
     * Add a movable object to the game world
     * @param {MovableObject} movObj - The movable object to add
     */
    addToMap(movObj) {
        if (movObj.otherDirection) {
            this.flipImg(movObj);
        }

        movObj.draw(this.ctx);

        if (movObj.otherDirection) {
            this.flipImgBack(movObj);
        }
    }

    /**
     * Flip the image of a movable object
     * @param {MovableObject} movObj - The movable object to flip
     */
    flipImg(movObj) {
        this.ctx.save();
        this.ctx.translate(movObj.width, 0);
        this.ctx.scale(-1, 1);
        movObj.x = movObj.x * -1;
    }

    /**
     * Flip back the image of a movable object
     * @param {MovableObject} movObj - The movable object to flip back
     */
    flipImgBack(movObj) {
        this.ctx.restore();
        movObj.x = movObj.x * -1;
    }

    /**
     * Run the game loop
     */
    run() {
        saveRunningInterval(() => {
            this.checkCollisions();
            this.checkShootBubble();
            this.fillBottlesBar();
            this.fillCoinBar();
            this.checkIfIsDead();
            this.checkJellyFishCollisionWithCharacter();
            this.characterPlaySlapAnimation();
            this.checkEndbossCollisionWithCharacter();
        }, 200);
    }

    /**
     * Run functions with higher interval
     */
    functionsWithHigherInterval() {
        saveRunningInterval(() => this.checkEnemyCollisionWithBubble(), 25);
    }
    
    /**
     * Run functions with slower interval
     */
    functionsWithSlowerInterval() {
        saveRunningInterval(() => this.characterIsSlappingEndboss(), 1000);
    }

    /**
     * Update the parallax effect based on character movement
     */
    updateParallaxEffect() {
        if (this.character.x > (-720 * 3) - 30 || this.character.x > this.level.levelEndX) {
            this.level.backgroundObject.forEach((bgObject) => {
                if (bgObject.parallaxFactor !== 0) {
                    bgObject.x = bgObject.start_x + (this.character.x * bgObject.parallaxFactor * 0.1);
                    bgObject.y = bgObject.start_y + (this.character.y * bgObject.parallaxFactor * 0.01);
                }
            });
    }}

    /**
     * Check collisions in the game world
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.istHitting) {
                this.character.hit();
                this.statusBar.setPercenetage(this.character.energy);
            }
        });
        if (this.character.isColliding(this.endboss) && !this.character.istHitting) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
        }
    }

    /**
     * Check if the character can shoot a bubble
     */
    checkShootBubble() {
        if (this.checkIfCanShootBubble()) {
            this.checkShootBubbleValues();
            this.loadCheckShootBubbleTimeout();
            setTimeout(() => this.shootOnce = true, 1200);
        }
    }

    /**
     * Check if the character can shoot a bubble
     * @returns {boolean} - True if the character can shoot, false otherwise
     */
    checkIfCanShootBubble() {
        return this.keyboard.SHOOT && this.toxicBottlesBar.bottleValue > 0 && !this.character.characterIsDying && this.character.electricDeath && this.shootOnce;
    }

    /**
     * Set values when shooting a bubble
     */
    checkShootBubbleValues(){
        this.shootOnce = false;
        this.character.shootAnimation = true;
        this.character.currentImage = 0;
        this.toxicBottlesBar.bottleValue --;
        this.toxicBottlesBar.getValueToxicBar(this.toxicBottlesBar.bottleValue);
        audio.shootCharacterAudio.play();
    }

    /**
     * Load the timeout for shooting a bubble
     */
    loadCheckShootBubbleTimeout() {
        setTimeout(() => {
            if (!this.character.otherDirection) {
                let valueBubble = this.character.otherDirection;
                let bubble = new ThrowableObject(this.character.x + 140, this.character.y + 80, valueBubble);
                this.bubble.push(bubble);
            } else {
                let valueBubble = this.character.otherDirection;
                let bubble = new ThrowableObject(this.character.x, this.character.y + 80, valueBubble);
                this.bubble.push(bubble);
            }
        }, 1000);
    }

    /**
     * Fill the toxic bottles bar when colliding with bottles
     */
    fillBottlesBar() {
        this.level.bottles.forEach((currentBottle, i) => {
            if (this.character.isColliding(currentBottle)) {
                this.toxicBottlesBar.bottleValue++;
                this.toxicBottlesBar.getValueToxicBar(this.toxicBottlesBar.bottleValue);
                this.level.bottles.splice(i, 1);
                audio.getBottle.play();
            }
    });}

    /**
     * Fill the coin bar when colliding with coins
     */
    fillCoinBar() {
        this.level.coins.forEach((currentCoin, i) => {
            if (this.character.isColliding(currentCoin)) {
                this.coinBar.oneCoin++;
                this.coinBar.getValueCoinBar(this.coinBar.oneCoin);
                this.level.coins.splice(i, 1);
                audio.pickUpCoin.play();
            }
    });}

    /**
     * Check if the character is dead
     */
    checkIfIsDead() {
        if (this.character.isDead() && !this.character.isDeadProcessed) {
            this.character.currentImage = 0;
            this.character.characterIsDying = true;
            this.character.isDeadProcessed = true;
            this.character.charcterIsDead = true;
        }
    }

    /**
     * Check collision with jellyfish and character
     */
    checkJellyFishCollisionWithCharacter() {
        this.level.enemies.forEach((jellyfish) => {
            if (this.character.isColliding(jellyfish)) {
                if (jellyfish.randomNumber === 0) {
                    this.character.isHurt();
                } else {
                    this.character.isDeadByJellyFish();
                    this.statusBar.setPercentage(this.character.energy);
                    this.character.isInstantDead = true;
                    this.character.otherDeath = true;
                    if (!this.character.electricShock) {
                        this.character.currentImage = 0;
                    }
    }}});}

    /**
     * Play slap animation of the character
     */
    characterPlaySlapAnimation() {
        if (this.keyboard.HIT && this.characterSlapAgain) {
            this.characterSlapAgain = false;
            this.character.characterStrikes = true;
            this.character.characterStrikesValue = true;
            this.character.currentImage = 0;
            this.character.isHitting = true;
            setTimeout(() => this.characterSlapAgain = true, 3000);
        }
    }

    /**
     * Check if the character is slapping an enemy
     */
    characterIsSlapping() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isStriking && enemy) {
                    enemy.enemyGetHit = true;
                    enemy.changeDirectionHittedEnemy = this.character.otherDirection;
                }
    }});}

    /**
     * Check if the character is slapping the endboss
     */
    characterIsSlappingEndboss() {
        if (this.checkSlapValue()) {
            if (this.character.isStriking && this.endboss) {
                this.endboss.endbossGetSlap = true;
                this.endboss.changeDirectionHittedEnemy = this.character.otherDirection;
                this.endboss.currentImage = 0;
                this.endboss.endbossGetSlapValue = true;
                this.statusBarBoss.percentace--;
                this.statusBarBoss.setPercentage();
                this.endboss.percentace--;
            }
    }}

    /**
     * Check if the character is slapping the endboss
     * @returns {boolean} - True if the character is slapping, false otherwise
     */
    checkSlapValue() {
        return this.character.isColliding(this.endboss) && this.character.isHitting;
    }

    /**
     * Check collision of enemies with bubble
     */
    checkEnemyCollisionWithBubble() {
        this.level.enemies.forEach((enemy) => {
            this.bubble.forEach((bubble, i) => {
                if (bubble.isColliding(enemy) && enemy instanceof JellyFish) {
                    this.loadJellyFishValues(enemy, bubble);
                } else if (bubble.isColliding(enemy) && enemy instanceof Fish) {
                    this.loadFishValues(bubble);
                } else if (bubble.isColliding(this.endboss)) {
                    this.loadEndbossValues(i);
                }
    });});}

    /**
     * Load values when colliding with jellyfish and bubble
     * @param {JellyFish} enemy - The jellyfish enemy
     * @param {ThrowableObject} bubble - The bubble object
     */
    loadJellyFishValues(enemy, bubble) {
        enemy.changeAnimationJellyFish = true;
        enemy.currentImage = 0;
        audio.bubbleCatchJellyFishAudio.play();
        this.bubble.splice(bubble, 1);
    }

    /**
     * Load values when colliding with fish and bubble
     * @param {ThrowableObject} bubble - The bubble object
     */
    loadFishValues(bubble) {
        audio.bubbleBurstAudio.play();
        this.bubble.splice(bubble, 1);
    }

    /**
     * Load values when colliding with endboss and bubble
     * @param {number} i - The index of the bubble
     */
    loadEndbossValues(i) {
        this.endboss.hurtWithBubble = true;
        this.endboss.hurtWithBubbleValue = true;
        this.endboss.currentImage = 0;
        this.statusBarBoss.percentace--;
        this.statusBarBoss.setPercentage();
        this.endboss.percentace--;
        this.bubble.splice(i, 1);
    }

    /**
     * Check collision of endboss with character
     */
    checkEndbossCollisionWithCharacter() {
        if (this.endboss.isColliding(this.character)) {
            this.bossCollisionWithCharacter = true;
        }
    }
}