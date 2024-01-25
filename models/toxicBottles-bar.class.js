class toxicBottlesBar extends MovableObject {
    IMAGES_TOXIC_BOTTLES = [
        'img/4.Marcadores/green/poisoned_bubbles/0_copia2.png',
        'img/4.Marcadores/green/poisoned_bubbles/20_copia3.png',
        'img/4.Marcadores/green/poisoned_bubbles/40_copia2.png',
        'img/4.Marcadores/green/poisoned_bubbles/60_copia2.png',
        'img/4.Marcadores/green/poisoned_bubbles/80_copia2.png',
        'img/4.Marcadores/green/poisoned_bubbles/100_copia3.png'
    ];   
    height = 40;
    width = 150;
    


    constructor(){
        super();
        this.loadImages(this.IMAGES_TOXIC_BOTTLES);
        this.x = 10;
        this.y = 70;
        this.getValueToxicBar(this.bottleValue);
    }


    getValueToxicBar(bottleValue){
        this.bottleValue = bottleValue;
        let imagePath = this.IMAGES_TOXIC_BOTTLES[this.loadValue()];
        this.img = this.imageCache[imagePath];
    }


    loadValue(){
        if (this.bottleValue >= 5) {
            return 5;
        }else if (this.bottleValue === 4) {
            return 4;
        }else if (this.bottleValue === 3) {
            return 3;
        }else if (this.bottleValue === 2) {
            return 2;
        }else if (this.bottleValue === 1) {
            return 1;
        }else{
            return 0;
        }
    }
}
