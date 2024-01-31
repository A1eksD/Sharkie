class drawableObject{

    allImg = [];
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
        this.img = new Image();
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
}