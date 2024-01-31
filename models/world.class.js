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
    toxicBottlesBar = new toxicBottlesBar();
    bubble = [new TrowableObjct()];
    endboss = new Endboss();
    changeCurrentImgTo0 = false;
    bossCollistionWithCharacter = false;
    shootOnce = true;
    characterSlapAgain = true;



    constructor(canvas, keyboard){
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


    setWorld(){
        this.character.world = this;
        this.endboss.world = this;
    }


    draw(){
        this.loadStaticObjects();
        this.loadEnemyObjects();
        this.loadFixedObjects();
        this.loadCharObject();

        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }


    loadStaticObjects(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); 
        this.updateParallaxEffect();
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.bottles); 
        this.addObjectsToMap(this.bubble); 
        this.addObjectsToMap(this.level.coins);
    }


    loadEnemyObjects(){
        this.addObjectsToMap(this.level.enemies); 
        this.addToMap(this.endboss);
    }


    loadFixedObjects(){
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar); 
        this.addToMap(this.coinBar); 
        this.addToMap(this.toxicBottlesBar);
        if (this.endboss.showHPfromBoss) {
            this.addToMap(this.statusBarBoss);
        }
        this.ctx.translate(this.camera_x, 0); 
    }


    loadCharObject(){
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0); 
    }


    addObjectsToMap(objects){
        objects.forEach(element => {
            this.addToMap(element);
        });
    }


    addToMap(movObj){
        if (movObj.otherDirection) {
            this.flipImg(movObj);
        }

        movObj.draw(this.ctx);
        
        if (movObj.otherDirection) {
            this.flipImgBack(movObj);
        }
    }


    flipImg(movObj){
        this.ctx.save();
        this.ctx.translate(movObj.width, 0);
        this.ctx.scale(-1, 1);
        movObj.x = movObj.x * -1;
    }


    flipImgBack(movObj){
        this.ctx.restore();
        movObj.x = movObj.x * -1;
    }


    run(){
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


    functionsWithHigherInterval(){
        saveRunningInterval(() => this.checkEnemyCollisionWithBubble(), 100);
    }


    functionsWithSlowerInterval(){
        saveRunningInterval(() => this.characterIsSlappingEndboss(), 1000);
    }

    
    updateParallaxEffect() {
        if (this.character.x > (-720*3)-30 || this.character.x > this.level.levelEndX) {
            this.level.backgroundObject.forEach((bgObject) => {
                if (bgObject.parallaxFactor !== 0) {
                    bgObject.x = bgObject.start_x + (this.character.x * bgObject.parallaxFactor * 0.1);
                    bgObject.y = bgObject.start_y + (this.character.y * bgObject.parallaxFactor * 0.01);
                }
    });}}


    checkCollisions(){
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.istHitting) {
                this.character.hit(); 
                this.statusBar.setPercenetage(this.character.energy); 
            }
        });
        if (this.character.isColliding(this.endboss) && !this.character.istHitting) {
            this.character.hit(); 
            this.statusBar.setPercenetage(this.character.energy); 
    }}
    

    checkShootBubble(){
        if (this.checkIfCanShootBubble()) {
            this.checkShootBubbleValues();
            this.loadCheckShootBubbleTimeout();
            setTimeout(() => this.shootOnce = true , 1200);
    }}


    checkIfCanShootBubble(){
        return this.keyboard.SHOOT && this.toxicBottlesBar.bottleValue > 0 && !this.character.characterIsDying &&  this.character.electricDeath && this.shootOnce;
    }

    checkShootBubbleValues(){
        this.shootOnce = false;
        this.character.shootAnimation = true;
        this.character.currentImage = 0;
        this.toxicBottlesBar.bottleValue --;
        this.toxicBottlesBar.getValueToxicBar(this.toxicBottlesBar.bottleValue);
        audio.shootCharacterAudio.play();
    }


    loadCheckShootBubbleTimeout(){
        setTimeout(() => {
            if (!this.character.otherDirection) {
                let valueBubble = this.character.otherDirection;
                let bubble = new TrowableObjct(this.character.x + 140, this.character.y + 80, valueBubble);
                this.bubble.push(bubble);
            } else {
                let valueBubble = this.character.otherDirection;
                let bubble = new TrowableObjct(this.character.x, this.character.y + 80, valueBubble);
                this.bubble.push(bubble);
            }
        }, 1000);
    }


    fillBottlesBar(){
        this.level.bottles.forEach((currentBottle) => {
            if (this.character.isColliding(currentBottle)) {
                this.toxicBottlesBar.bottleValue ++;
                this.toxicBottlesBar.getValueToxicBar(this.toxicBottlesBar.bottleValue);
                this.spliceBottleElemnt(currentBottle);
                audio.getBottle.play();
    }});}


    spliceBottleElemnt(currentBottle){
        for (let i = 0; i < this.level.bottles.length; i++) {
            const bottleValue = this.level.bottles[i].x;
            let vlaueX = currentBottle.x;
            if (bottleValue === vlaueX) {
                this.level.bottles.splice(i, 1);
    }}}


    fillCoinBar(){
        this.level.coins.forEach((currentCoir) => {
            if (this.character.isColliding(currentCoir)) {
                this.coinBar.oneCoin ++;
                this.coinBar.getValueCoinBar(this.coinBar.oneCoin);
                this.spliceCoinElemnt(currentCoir);
                audio.pickUpCoin.play();
    }});}


    spliceCoinElemnt(currentCoin){
        for (let i = 0; i < this.level.coins.length; i++) {
            const coinValue = this.level.coins[i].x;
            let vlaueX = currentCoin.x;
            if (coinValue === vlaueX) {
                this.level.coins.splice(i, 1);   
    }}}


    checkIfIsDead() {
        if (this.character.isDead() && !this.character.isDeadProcessed) {
            this.character.currentImage = 0;
            this.character.characterIsDying = true;
            this.character.isDeadProcessed = true;
            this.character.charcterIsDead = true;
    }}


    checkJellyFishCollisionWithCharacter(){
        this.level.enemies.forEach((JellFish) => {
            if (this.character.isColliding(JellFish)) {
                if (JellFish.randomNumber === 0 ) {
                    this.character.isHurt();
                } else {
                    this.character.isDeadByJellyFish();
                    this.statusBar.setPercenetage(this.character.energy);
                    this.character.isInstandDead = true;
                    this.character.otherDeath = true;
                    if (!this.character.electricShock) {
                        this.character.currentImage = 0;
    }}}});}
    

    characterPlaySlapAnimation(){
        if (this.keyboard.HIT && this.characterSlapAgain) {
            this.characterSlapAgain = false;
            this.character.characterStrikes = true;
            this.character.characterStrikesValue = true; 
            this.character.currentImage = 0;
            this.character.istHitting = true;
            setTimeout(() => this.characterSlapAgain = true , 3000);   
    }}


    characterIsSlapping(){
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isStriking && enemy) {
                    enemy.enemyGetHit = true;
                    enemy.changeDirectionHittedEnemy = this.character.otherDirection;
    }}});}


    characterIsSlappingEndboss(){
        if (this.checkSlapValue()) {
            if (this.character.isStriking && this.endboss) {
                this.endboss.enbossGetSlap = true;
                this.endboss.changeDirectionHittedEnemy = this.character.otherDirection;
                this.endboss.currentImage = 0;
                this.endboss.enbossGetSlapValue = true;
                this.statusBarBoss.percentace --;
                this.statusBarBoss.setPercenetage();
                this.endboss.percentace --;
    }}}


    checkSlapValue(){
        return this.character.isColliding(this.endboss) && this.character.istHitting;
    }
    

    checkEnemyCollisionWithBubble() {
        this.level.enemies.forEach((enemy) => {
            this.bubble.forEach((bubble, i) => {
                if (bubble.isColliding(enemy) && enemy instanceof JellyFish) {
                    this.loadJellyFishValues(enemy, bubble);
                } else if (bubble.isColliding(enemy) && enemy instanceof Fish) {
                    this.loadFishValues(enemy, bubble);
                } else if (bubble.isColliding(this.endboss)) {
                    this.loadEndbossValues(i);
    }});});}


    loadJellyFishValues(enemy, bubble){
        enemy.changeAnimationJellyFish = true;
        enemy.currentImage = 0;
        audio.bubbleCatchJellyFishAudio.play();
        this.bubble.splice(bubble, 1);
    }


    loadFishValues(bubble){
        audio.bubbleBurstAudio.play();
        this.bubble.splice(bubble, 1);
    }


    loadEndbossValues(i){
        this.endboss.hurtWithBubble = true;
        this.endboss.hurtWithBubbleValue = true;
        this.endboss.currentImage = 0;
        this.statusBarBoss.percentace--;
        this.statusBarBoss.setPercenetage();
        this.endboss.percentace--;
        this.bubble.splice(i, 1);
    }

    checkEndbossCollisionWithCharacter(){
        if (this.endboss.isColliding(this.character)) {
            this.bossCollistionWithCharacter = true;
    }}

}