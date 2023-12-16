class MovableObject{
    x = 120;
    y = 250;
    img;
    imageChache = {};
    speed = 3;
    otherDirection = false;

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
        console.log('Moving right');
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}