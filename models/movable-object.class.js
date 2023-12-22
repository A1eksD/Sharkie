class MovableObject{
    x = 200;
    y = 350;
    img;
    imageChache = {};
    speed = 3;
    otherDirection = false;
    speedY = 0; //für springen
    acceleration = 2; //für springen


    loadImage(path){
        this.img = new Image(); //this.img = document.getElementById('image') --- <img id="image" src>
        this.img.src = path;
    }


    /**
     * @param {Array} arrey -[img1.png, img2.png .....]
     */
    loadImages(arrey){
        arrey.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });
    }

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
        this.img = this.imageChache[path];
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
        return this.y < 280;
    }

    jump(){//für springen
        this.speedY = 20; //verändere den wert um höher zu springen
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){
        ctx.beginPath(); 
        ctx.lineWidth = '2';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
}