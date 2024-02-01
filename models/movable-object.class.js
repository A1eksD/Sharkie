class MovableObject extends DrawableObject {
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


    // Method to move the object to the right
    moveRight() {
        this.x += this.speed;
    }

    
    // Method to move the object to the left
    moveLeft() {
        this.x -= this.speed;
    }


    // Method to move the object upwards
    moveUp() {
        this.y -= this.speed;
    }


    // Method to move the object downwards
    moveDown() {
        this.y += this.speed;
    }

    
    // Method to play an animation from a given array of images
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    // Method to play an animation from first to last image and return a boolean
    playAnimationFirstToLastImg(images) {
        this.playAnimation(images);

        if (this.currentImage >= images.length) {
            return false;
        } else {
            return true;
        }
    }


    // Method to apply gravity to the object
    applyGravity() {
        setInterval(() => {
            if (this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY = this.acceleration;
            }
        }, 1000 / 25);
    }


    // Method to check if the object is colliding with another movable object
    isColliding(movObj) {
        return this.x + this.width - this.offset.right > movObj.x + movObj.offset.top &&
            this.y + this.height - this.offset.bottom > movObj.y + movObj.offset.left &&
            this.x + this.offset.top < movObj.x + movObj.width - movObj.offset.right &&
            this.y + this.offset.left < movObj.y + movObj.height - movObj.offset.bottom;
    }


    // Method to decrease energy when the object is hit
    hit() {
        this.energy -= 5;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    // Method to check if the object is hurt within a certain time window
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }


    // Method to check if the object is dead
    isDead() {
        return this.energy == 0;
    }


    // Method to set the energy to 0, indicating death by jellyfish
    isDeadByJellyFish() {
        this.energy = 0;
    }


    // Method to check if the character is standing based on keyboard input
    characterIsStanding() {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
            return this.standingCharacter = 1;
        } else {
            return this.standingCharacter = 0;
        }
    }


    // Method to handle the slap animation when the object is hit
    enemyGetSlap() {
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


    // Method to stop the game by clearing all movable intervals after a delay
    stopGame() {
        setTimeout(() => allMovableIntervals.forEach(clearInterval), 1000);
    }
}
