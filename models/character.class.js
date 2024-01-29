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
    characterHaveLowHP = false;
    isDeadProcessed = false;
    charcterIsDead = false;
    charcterDied = true;
    isSleepingValue = 0; 
    isStandingValue = 0;
    standingValue = true;
    isInstandDead = false;
    electricDeath = true;
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
        this.loadImage(allImgs.CHARACTER_IMAGES_WALIKNG[0]);
        this.loadImages(allImgs.CHARACTER_IMAGES_WALIKNG);
        // this.loadImages(this.IMAGES_JUMP);
        this.loadImages(allImgs.CHARACTER_IMAGES_DEAD);
        this.loadImages(allImgs.CHARACTER_IMAGES_HURT);
        this.loadImages(allImgs.CHARACTER_IMAGES_SHOOT);
        this.loadImages(allImgs.CHARACTER_IMAGES_STAY);
        this.loadImages(allImgs.CHARACTER_IMAGES_SLEEP);
        this.loadImages(allImgs.CHARACTER_IMAGES_FIN_STRIKE);
        this.loadImages(allImgs.CHARACTER_IMAGES_INSTAND_DEAD);
        // this.applyGravity();
        this.animate();
    }


    animate(){
        setInterval(() => {
            audio.swimmingCharacterAudio.pause();
            // audio.swimmingCharacterAudio.volume = 0.1;

            if (!this.charcterIsDead && this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.moveRight();
                this.otherDirection = false;
                audio.swimmingCharacterAudio.play();
                
            }
            if (!this.charcterIsDead && this.world.keyboard.LEFT && this.x > (-720*3)-30) { // this.x > 0 steht für- bis der character pixel 0 vom ersten bild erreicht hat
                this.moveLeft();
                this.otherDirection = true;
                audio.swimmingCharacterAudio.play();
            }
            if (!this.charcterIsDead && this.world.keyboard.UP  && this.y > -60) {
                this.y -= this.speed;
                audio.swimmingCharacterAudio.play();
            }
            if (!this.charcterIsDead && this.world.keyboard.DOWN && this.y < 310) {
                this.y += this.speed;
                audio.swimmingCharacterAudio.play();
            }
            if (!this.charcterIsDead && this.world.keyboard.SHOOT ) {
            //     //hier nicht mehr schießen können -- nachtragen
            }
            if (!this.charcterIsDead && this.world.keyboard.HIT) {

            }

            // für jump - später löschen
            // if (this.world.keyboard.JUMP && !this.isAboveGround()) { // wenn x = klick und keine fall-function ausgeführt wird, dann jump
            //     this.jump();
            // }
            // if (this.world.keyboard.SHOOT) { // wenn x = klick und keine fall-function ausgeführt wird, dann jump
            //     this.trow();
            // }
            this.world.camera_x = -this.x + 250; //camera bewegt sich mit dem character zusammen in der x-Achse/ +200, damit der charcter weiter rechts angezeigt wird
        }, 1000 / 60);

        setInterval(() => {
            if (this.characterHaveLowHP && !this.otherDeath && !this.isInstandDead) { // ------------ died
                this.standingValue = false;
                this.characterCanSlap = false;
                this.characterHaveLowHP = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_DEAD);

            } else 
            
            if (this.isInstandDead  &&  this.electricDeath && this.otherDeath) { // ------------ instand died
                this.electricShock = true;
                this.standingValue = false;
                this.characterCanSlap = false;
                // audio.characterGetElectricShockAudio.volume = 0.5;
                audio.characterGetElectricShockAudio.play();
                this.electricDeath = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_INSTAND_DEAD);
            } else 

            if (this.isHurt() && !this.isInstandDead && !this.istHitting) { // ------------ get dmg
                this.playAnimation(allImgs.CHARACTER_IMAGES_HURT);
                // this.characterGetHitAudio.loop = false;
                // this.characterGetHitAudio.play();
                //    this.characterGetHitAudio.volume = 0.1;
                this.resetSleepTimeout();
            } else

            if (this.shootAnimation && !this.characterHaveLowHP && this.electricDeath) { // ------------ shoot
                this.shootAnimation = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_SHOOT);
                this.resetSleepTimeout();
            } else 

            if (this.characterStrikes && this.characterStrikesValue && this.istHitting && this.characterCanSlap) { // ------------ strike
                // this.offset.right = 5;
                // this.offset.top = 5;
                // audio.characterSlapAudio.volume = 0.2;
                audio.characterSlapAudio.play();
                this.characterStrikesValue = this.playAnimationFirstToLastImg(allImgs.CHARACTER_IMAGES_FIN_STRIKE);
                this.isStriking = true;
                this.offset.right = 5;
                this.offset.top = 5;
                // this.enemyGetHit = true;
                this.resetSleepTimeout();
                this.world.characterIsSlepping();
                setTimeout(() =>{
                    this.offset.right = 35;
                    this.offset.top = 35;
                    this.characterStrikes = false;
                    this.enemyGetHit = false;
                    this.istHitting = false;
                }, 1120); // 1120
            } else

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) { // ------------ move
                if (!this.charcterIsDead) {
                    this.playAnimation(allImgs.CHARACTER_IMAGES_WALIKNG);
                    this.resetSleepTimeout();
                    this.world.collistionWithCharacter = false;
                }
            }  else 
            
            if (this.standingValue){
                this.playAnimation(allImgs.CHARACTER_IMAGES_STAY);
                this.counter ++;
                this.changeValueToTrue();// ------------ sleep 
            }
        }, 140);
        // --------- für jump ----------
        //  if (this.isAboveGround()) { //der erste if Pasrt ist für jump - später entvernen
        //     this.playAnimation(this.IMAGES_JUMP);
        // } else if (this.trow()) {
        //     this.playAnimation(this.IMAGES_SHOOT);
        
    }


    changeValueToTrue() {
        if (this.counter >= 40 && this.standingValue) {
            this.playAnimation(allImgs.CHARACTER_IMAGES_SLEEP);
        } 
    }
      
    
    resetSleepTimeout() {
        this.counter = 0;
    }

}