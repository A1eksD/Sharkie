class drawebleObject{
    img;
    imageCache = {};
    x = 200;
    y = 350;
    currentImage = 0;
    offset = {
        x: 0,
        y: 0,
        frameHeight: 0,
        frameWidth: 0
    };

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
            this.imageCache[path] = img;
        })
    }

    
    draw(ctx){
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.log('This Img couldnt be load', this.img);
        }
    }


    drawFrame(ctx){
        //zeichne nur den ramen, wenn man die instanz von character oder fish ist
        if (this.getInstanceForDrawFrame()) {
            ctx.beginPath(); 
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();   
        }
    }


    getInstanceForDrawFrame(){
        return this instanceof Character || this instanceof Fish ||
        this instanceof TrowableObjct || this instanceof Endboss || this instanceof Bottles
    }


    drawFrameRedFrame(ctx){
        if (this.getInstanceForDrawFrame()) {
            ctx.beginPath(); 
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            // console.log((this.x - this.offset.x), (this.y - this.offset.y), (this.x + this.width - this.offset.frameWidth) - (this.x - this.offset.x), (this.y + this.height - this.offset.frameHeight) - (this.y + this.offset.frameHeight));
            ctx.rect(this.x + this.offset.x, this.y + this.offset.y, (this.x + this.width - this.offset.frameHeight) - (this.x + this.offset.x), (this.y + this.height - this.offset.frameWidth) - (this.y + this.offset.y));
            ctx.stroke();   
        }
    }
}