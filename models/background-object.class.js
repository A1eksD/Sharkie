class BackgroundObjext extends MovableObject{
    width = 720;
    height = 480;
    start_x = 0;
    start_y = 0;

    constructor(imagePath,  x, y, parallaxFactor){
        super().loadImage(imagePath);
        this.start_x = x;
        this.start_y = y;
        this.x = x;
        this.y = y;
        this.parallaxFactor = parallaxFactor;
    }

}