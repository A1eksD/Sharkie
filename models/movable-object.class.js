class MovableObject extends drawebleObject{
    speed = 3;
    otherDirection = false;
    speedY = 0; //für springen
    acceleration = 2; //für springen
    energy = 100;
    lastHit = 0;
    offset = {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    };


    moveRight() {
        this.x += this.speed;
    }


    moveLeft(){
        this.x -= this.speed;
    }


    playAnimation(imges){
        // let i = 0 % 6; -> 0, Rest 0 / wenn 5 % 6 -> 0, Rest 5 / wenn 6 % 6 -> 1, Rest 0 / wenn 7 % 6 -> 1, Rest 1
        let i = this.currentImage % imges.length; 
        //let i = 0, 1, 2, 3, 4, 5, 6, 0
        let path = imges[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    applyGravity(){ //für springen -- fall zu boden
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                // bei jedem durchlauf wird immer +(-2px) dazuaddiert/die summe addiert sich, bis y-Wert(von MovableObject in isAboveGround) erreicht ist
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround(){ //für springen
        if (this instanceof TrowableObjct) { // TrowableObjct sollte immer fallen
            return true;
        } else {
            return this.y < 280;   
        }
    }


    jump(){//für springen
        this.speedY = 20; //verändere den wert um höher zu springen
    }


    /**
     * Die Funktion `isColliding` überprüft, ob das aktuelle `MovableObject` 
     * mit einem anderen beweglichen Objekt (`movObj`) kollidiert, indem sie die Positionen und Abmessungen beider Objekte vergleicht.
     */
    isColliding(movObj) {
        return  this.x + this.width - this.offset.right > movObj.x + movObj.offset.left && 
                this.y + this.height - this.offset.bottom > movObj.y + movObj.offset.top &&
                this.x + this.offset.left < movObj.x + movObj.width - movObj.offset.right &&
                this.y + this.offset.top < movObj.y + movObj.height - movObj.offset.bottom;
    }
    // isColliding (movObj) {
    //     return  (this.X + this.width) >= movObj.X && this.X <= (movObj.X + movObj.width) && 
    //             (this.Y + this.offsetY + this.height) >= movObj.Y &&
    //             (this.Y + this.offsetY) <= (movObj.Y + movObj.height) && 
    //             movObj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    // }


    hit(){
        this.energy -= 5; // wenn collision = true=> -5 vom aktuellem Energiewert
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit; //differenz in ms
        timePassed = timePassed / 1000; // differenz in s
        // console.log(timePassed);
        return timePassed < 1; // gebe den value true aus, wenn der Wert 1s überschreitet. ansonsten false
    }

    // trow(){
    //     this.speedTrowY = 10;
    //     this.speedTrowX = 10;
    //     this.showTrowAimation();
    // }
    

    // showTrowAimation(){
    //     setInterval(() => {
    //         if (this.speedTrowY > 0) {
    //             // bei jedem durchlauf wird immer +(-2px) dazuaddiert/die summe addiert sich, bis y-Wert(von MovableObject in isAboveGround) erreicht ist
    //             this.speedTrowY -= this.acceleration;
    //             this.speedTrowX += this.acceleration;
    //         }
    //     }, 1000 / 25);
    // }


    isDead(){
        return this.energy == 0;
    }
}