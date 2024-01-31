class MovableObject extends drawableObject{

    speed = 2;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    bottleValue = 0;
    oneCoin = 0;
    standingCharacter = 0;
    standing3Sek = 3;
    randomNumber = 0;
    enemyGetHit = false;
    changeDirectionHittedEnemy = true;
    changeAnimation = false;
    percentace = 5;
    gameOver = false;


    moveRight() {
        this.x += this.speed;
    }


    moveLeft(){
        this.x -= this.speed;
    }


    moveUp() {
        this.y -= this.speed;
    }


    moveDown() {
        this.y += this.speed;
    }


    playAnimation(imges){
        let i = this.currentImage % imges.length; 
        let path = imges[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }



    playAnimationFirstToLastImg(imges){
        this.playAnimation(imges);
  
        if (this.currentImage >= imges.length) {
            return false;
        } else {
            return true;
        }
    }


    applyGravity(){
        setInterval(() => {
            if ( this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY = this.acceleration;
            }
        }, 1000 / 25);
    }


    isColliding(movObj) {
        return  this.x + this.width - this.offset.right > movObj.x + movObj.offset.top && 
                this.y + this.height - this.offset.bottom > movObj.y + movObj.offset.left &&
                this.x + this.offset.top < movObj.x + movObj.width - movObj.offset.right &&
                this.y + this.offset.left < movObj.y + movObj.height - movObj.offset.bottom;
    }


    hit(){
        this.energy -= 5;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }


    isDead(){
        return this.energy == 0;
    }


    isDeadByJellyFish(){
        this.energy = 0;
    }
    
    
    characterIsStamding(){
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
            return this.standingCharacter = 1;
        } else {
            return this.standingCharacter = 0;
        }
    }


    enemyGetSlap(){
        if (this.enemyGetHit) {
            this.changeAnimation = true;
            this.y -= 3;
            if (!this.changeDirectionHittedEnemy) {
                this.x += 4;
            } else if (this.changeDirectionHittedEnemy) {
                this.x -= 4;
            }
        }
    }


    stopGame(){
        setTimeout(() => {
            allMovableIntervals.forEach(clearInterval);
        }, 1000);
    }
}