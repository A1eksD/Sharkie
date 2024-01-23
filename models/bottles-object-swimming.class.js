class BottlesIsSwimming extends MovableObject {
    
    IMAGES_BOTTLES = [
        'img/4.Marcadores/Posión/Animada/1.png',
        'img/4.Marcadores/Posión/Animada/2.png',
        'img/4.Marcadores/Posión/Animada/3.png',
        'img/4.Marcadores/Posión/Animada/4.png',
        'img/4.Marcadores/Posión/Animada/5.png',
        'img/4.Marcadores/Posión/Animada/6.png',
        'img/4.Marcadores/Posión/Animada/7.png',
        'img/4.Marcadores/Posión/Animada/8.png'
    ];
    height = 60;
    width = 50;


    constructor(x, y){
        super().loadImage(this.IMAGES_BOTTLES[0]);
        this.loadImages(this.IMAGES_BOTTLES);
        // this.x = 200;
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate(){
        setInterval( () => {
            this.playAnimation(this.IMAGES_BOTTLES);
        }, 140 );
    }
}