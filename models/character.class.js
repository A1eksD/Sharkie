class Character extends MovableObject{
    height = 180;
    width = 180;
    y = 180;
    speed = 7;
    IMAGES_WALIKNG = [
        '../img/1.Sharkie/3.Swim/1.png',
        '../img/1.Sharkie/3.Swim/2.png',
        '../img/1.Sharkie/3.Swim/3.png',
        '../img/1.Sharkie/3.Swim/4.png',
        '../img/1.Sharkie/3.Swim/5.png',
        '../img/1.Sharkie/3.Swim/6.png'
    ];
    currentImage = 0;
    world;

    constructor(){
        super().loadImage('../img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_WALIKNG);
        this.animate();
    }

    animate(){

        setInterval(() => {
            // console.log(this.world.level.levelEndX);
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            // console.log(this.x );
            if (this.world.keyboard.LEFT && this.x > 0 ) { // this.x > 0 steht für- bis der character pixel 0 vom ersten bild erreicht hat
                this.x -= this.speed;
                this.otherDirection = true;
            }
            if (this.world.keyboard.UP ) {
                this.y -= this.speed;
            }
            if (this.world.keyboard.DOWN ) {
                this.y += this.speed;
            }
            this.world.camera_x = -this.x + 120; //camera bewegt sich mit dem character zusammen in der x-Achse/ +120, damit der charcter weiter rechts angezeigt wird
        }, 1000 / 60);

        setInterval( () => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN ) {
                this.moveCharacter();
            }
        }, 120);
    }


    moveCharacter(){
        // let i = 0 % 6; -> 0, Rest 0 / wenn 5 % 6 -> 0, Rest 5 / wenn 6 % 6 -> 1, Rest 0 / wenn 7 % 6 -> 1, Rest 1
        let i = this.currentImage % this.IMAGES_WALIKNG.length; 
        //let i = 0, 1, 2, 3, 4, 5, 6, 0
        let path = this.IMAGES_WALIKNG[i];
        this.img = this.imageChache[path];
        this.currentImage++;
    }

}