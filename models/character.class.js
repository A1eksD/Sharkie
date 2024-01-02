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
    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];
    IMAGES_SHOOT = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];
    world;
    swimmingCharacter = new Audio('audio/creek-swimming.mp3');
    offset = {
            x: 30, 
            y: 85, 
            frameWidth: 115,
            frameHeight: 50
        }

    constructor(){
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_WALIKNG);
        // this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        // this.applyGravity();
        this.animate();

    }


    animate(){
        setInterval(() => {
            this.swimmingCharacter.pause();
            this.swimmingCharacter.volume = 0.1;
            // console.log(this.world.level.levelEndX);
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.moveRight();
                this.otherDirection = false;
                this.swimmingCharacter.play();
            }
            // console.log(this.x );
            if (this.world.keyboard.LEFT && this.x > 0 ) { // this.x > 0 steht für- bis der character pixel 0 vom ersten bild erreicht hat
                this.moveLeft();
                this.otherDirection = true;
                this.swimmingCharacter.play();
            }
            if (this.world.keyboard.UP ) {
                this.y -= this.speed;
                this.swimmingCharacter.play();
            }
            if (this.world.keyboard.DOWN ) {
                this.y += this.speed;
                this.swimmingCharacter.play();
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

        setInterval( () => {
            if(this.isDead()){
                this.playAnimation(this.IMAGES_DEAD);
            }else if (this.isHurt()) { // siehe movObj-class
                this.playAnimation(this.IMAGES_HURT);
                // this.showHP();
            }else{
            //  if (this.isAboveGround()) { //der erste if Pasrt ist für jump - später entvernen
            //     this.playAnimation(this.IMAGES_JUMP);
            // }else if (this.trow()) {
            //     this.playAnimation(this.IMAGES_SHOOT);
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN ) {
                    this.moveCharacter();
                }
            }
        }, 120);
    }


    moveCharacter(){
        this.playAnimation(this.IMAGES_WALIKNG);
    }


}