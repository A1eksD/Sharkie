class JellyFish extends MovableObject{
    constructor(){
        super().loadImage('../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');

        this.x = 350 + Math.random() * 500;
    }
}