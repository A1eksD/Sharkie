class Character extends MovableObject{
    height = 180;
    width = 180;
    y = 10;
    speed = 7;
    IMAGES_WALIKNG = [
        '../img/1.Sharkie/3.Swim/1.png',
        '../img/1.Sharkie/3.Swim/2.png',
        '../img/1.Sharkie/3.Swim/3.png',
        '../img/1.Sharkie/3.Swim/4.png',
        '../img/1.Sharkie/3.Swim/5.png',
        '../img/1.Sharkie/3.Swim/6.png' 
    ];
    IMAGES_JUMP = [ // spter entfernen
        '../img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        '../img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        '../img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];
    currentImage = 0;
    world;
    swimmingCharacter = new Audio('../audio/creek-swimming.mp3');
    

    constructor(){
        super().loadImage('../img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_WALIKNG);
        this.loadImages(this.IMAGES_JUMP);
        this.applyGravity();
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
            if (this.world.keyboard.JUMP && !this.isAboveGround()) { // wenn x = klick und keine fall-function ausgeführt wird, dann jump
                this.jump();
            }
            this.world.camera_x = -this.x + 200; //camera bewegt sich mit dem character zusammen in der x-Achse/ +200, damit der charcter weiter rechts angezeigt wird
        }, 1000 / 60);


        setInterval( () => {
            if (this.isAboveGround()) { //der erste if Pasrt ist für jump - später entvernen
                this.playAnimation(this.IMAGES_JUMP);
            }else{
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