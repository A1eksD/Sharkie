class StatusBar extends drawebleObject {
    
    height = 40;
    width = 150;
    IMAGES_LIFE = [
        'img/4.Marcadores/green/Life/0_copia3.png',
        'img/4.Marcadores/green/Life/20_copia4.png',
        'img/4.Marcadores/green/Life/40_copia3.png',
        'img/4.Marcadores/green/Life/60_copia3.png',
        'img/4.Marcadores/green/Life/80_copia3.png',
        'img/4.Marcadores/green/Life/100_copia2.png'
    ];
    percentace = 100;


    constructor(){
        super();
        this.loadImages(this.IMAGES_LIFE);
        this.x = 10;
        this.y = 10;
        this.setPercenetage(100);
    }


    setPercenetage(percentace){
        this.percentace = percentace;
        let imagePath = this.IMAGES_LIFE[this.resolveImagesIndex()];
        this.img = this.imageCache[imagePath];
    }


    resolveImagesIndex(){
        if (this.percentace === 100) {
            return 5;
        }else if (this.percentace > 80) {
            return 4;
        }else if (this.percentace > 60) {
            return 3;
        }else if (this.percentace > 40) {
            return 2;
        }else if (this.percentace > 20) {
            return 1;
        }else{
            return 0;
        }
    }
}