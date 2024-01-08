class drawableObject{
    img;
    imageCache = {};
    x = 200;
    y = 350;
    currentImage = 0;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
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
        return this instanceof Character || this instanceof Fish || this instanceof Coin || 
        this instanceof TrowableObjct || this instanceof Endboss || this instanceof Bottles 
    }


    drawFrameRedFrame(ctx){
        if (this.getInstanceForDrawFrame()) {
            ctx.beginPath(); 
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.top, this.y + this.offset.left, (this.x + this.width - this.offset.right) - (this.x + this.offset.top), (this.y + this.height - this.offset.bottom) - (this.y + this.offset.left));
            ctx.stroke();   
        }
    }
}