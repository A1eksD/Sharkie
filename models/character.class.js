class Character extends MovableObject{
    height = 180;
    width = 180;
    y = 50;
    speed = 7;
    IMAGES_WALIKNG = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png' 
    ];
    // IMAGES_JUMP = [ // spter entfernen
    //     'img/1.Sharkie/5.Hurt/2.Electric_shock/1.png',
    //     'img/1.Sharkie/5.Hurt/2.Electric_shock/2.png',
    //     'img/1.Sharkie/5.Hurt/2.Electric_shock/3.png'
    // ];
    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];
    IMAGES_INSTAND_DEAD = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];
    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];
    IMAGES_SHOOT = [
        'img/1.Sharkie/4.Attack/Bubble_trap/For_Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble_trap/For_Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble_trap/For_Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble_trap/For_Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble_trap/For_Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble_trap/For_Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble_trap/For_Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble_trap/For_Whale/8.png'

    ];
    IMAGES_SLAP = [
        'img/1.Sharkie/4.Attack/Fin_slap/1.png',
        'img/1.Sharkie/4.Attack/Fin_slap/2.png',
        'img/1.Sharkie/4.Attack/Fin_slap/3.png',
        'img/1.Sharkie/4.Attack/Fin_slap/4.png',
        'img/1.Sharkie/4.Attack/Fin_slap/5.png',
        'img/1.Sharkie/4.Attack/Fin_slap/6.png',
        'img/1.Sharkie/4.Attack/Fin_slap/7.png',
        'img/1.Sharkie/4.Attack/Fin_slap/8.png'
    ];
    IMAGES_STAY = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];
    IMAGES_SLEEP = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];
    world;
    swimmingCharacter = new Audio('audio/creek-swimming.mp3');
    shootCharacter = new Audio('audio/shootingBubble2.mp3');
    characterGetHit = new Audio('audio/classic_hurt.mp3');
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
    setTimeout4Sleep = false;
    isInstandDead = true;
    electricDead = true;
    counter = 0;




    constructor(){
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_WALIKNG);
        // this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SHOOT);
        this.loadImages(this.IMAGES_STAY);
        this.loadImages(this.IMAGES_SLEEP);
        // this.applyGravity();
        this.animate();
    }


    animate(){
        setInterval(() => {
            this.swimmingCharacter.pause();
            this.swimmingCharacter.volume = 0.1;

            if (!this.charcterIsDead && this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.moveRight();
                this.otherDirection = false;
                this.swimmingCharacter.play();
            }
            if (!this.charcterIsDead && this.world.keyboard.LEFT && this.x > -25 ) { // this.x > 0 steht für- bis der character pixel 0 vom ersten bild erreicht hat
                this.moveLeft();
                this.otherDirection = true;
                this.swimmingCharacter.play();
            }
            if (!this.charcterIsDead && this.world.keyboard.UP ) {
                this.y -= this.speed;
                this.swimmingCharacter.play();
            }
            if (!this.charcterIsDead && this.world.keyboard.DOWN ) {
                this.y += this.speed;
                this.swimmingCharacter.play();
            }
            if (!this.charcterIsDead && this.world.keyboard.SHOOT ) {
                this.setTimeout4Sleep = false;
                //hier nicht mehr schießen künnen -- nachtragen
            }
            if (!this.charcterIsDead && this.world.keyboard.HIT ) {

                //hier nicht mehr schlagen künnen -- nachtragen
            }
            // für jump - später löschen
            // if (this.world.keyboard.JUMP && !this.isAboveGround()) { // wenn x = klick und keine fall-function ausgeführt wird, dann jump
            //     this.jump();
            // }
            // if (this.world.keyboard.SHOOT) { // wenn x = klick und keine fall-function ausgeführt wird, dann jump
            //     this.trow();
            // }
            this.world.camera_x = -this.x + 200; //camera bewegt sich mit dem character zusammen in der x-Achse/ +200, damit der charcter weiter rechts angezeigt wird
        }, 1000 / 60);

        setInterval(() => {
            if (this.characterHaveLowHP) { // ------------ died
                // this.resetPositionCheck();
                this.standingValue = false;
                this.characterHaveLowHP = this.playAnimationFirstToLast(this.IMAGES_DEAD);

            } else

            if (this.isHurt()) { // ------------ get dmg
                // this.resetPositionCheck();
                this.playAnimation(this.IMAGES_HURT);
                this.characterGetHit.loop = false;
                this.characterGetHit.play();
                this.characterGetHit.volume = 0.05;
                this.resetSleepTimeout();
            } else

            if (this.isInstandDead() && this.standingValue &&  this.electricDead) { // ------------ instand died
                this.standingValue = false;
                this.electricDead = this.playAnimationFirstToLast(this.IMAGES_SHOOT);
            } else 

            if (this.shootAnimation) { // ------------ shoot
                // this.resetPositionCheck();
                this.shootAnimation = this.playAnimationFirstToLast(this.IMAGES_SHOOT);
                this.resetSleepTimeout();
            } else 

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) { // ------------ move
                if (!this.charcterIsDead) {
                    this.setTimeout4Sleep = false;
                    this.playAnimation(this.IMAGES_WALIKNG);
                    this.resetSleepTimeout();
                }
            } else

            if (this.characterIsStamding() <= this.isStandingValue && !this.shootAnimation && !this.characterHaveLowHP && this.standingValue){ // -- stay
                this.playAnimation(this.IMAGES_STAY);
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
            this.playAnimation(this.IMAGES_SLEEP);

        } 
    }
      
    

    resetSleepTimeout() {
        clearTimeout(this.sleepTimeoutCharacter);
        this.setTimeout4Sleep = false; 
        this.counter = 0;
    }
}