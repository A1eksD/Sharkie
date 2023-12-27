class drawebleObject{
    img;
    imageChache = {};
    x = 200;
    y = 350;
    currentImage = 0;


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
        })
    }

    
    
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){
        //zeichne nur den ramen, wenn man die instanz von character oder fish ist
        if (this instanceof Character || this instanceof Fish) {
            ctx.beginPath(); 
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();   
        }
    }
}