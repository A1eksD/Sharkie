class MovableObject{
    x = 200;
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
        // console.log('Moving right');
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    playAnimation(imges){
        // let i = 0 % 6; -> 0, Rest 0 / wenn 5 % 6 -> 0, Rest 5 / wenn 6 % 6 -> 1, Rest 0 / wenn 7 % 6 -> 1, Rest 1
        let i = this.currentImage % imges.length; 
        //let i = 0, 1, 2, 3, 4, 5, 6, 0
        let path = imges[i];
        this.img = this.imageChache[path];
        this.currentImage++;
    }
}