class Character extends MovableObject{
    height = 180;
    width = 180;
    y = 180;
    IMAGES_WALIKNG = [
        '../img/1.Sharkie/3.Swim/1.png',
        '../img/1.Sharkie/3.Swim/2.png',
        '../img/1.Sharkie/3.Swim/3.png',
        '../img/1.Sharkie/3.Swim/4.png',
        '../img/1.Sharkie/3.Swim/5.png',
        '../img/1.Sharkie/3.Swim/6.png'
    ];
    currentImage = 0;

    constructor(){
        super().loadImage('../img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_WALIKNG);
        this.animate();
    }

    animate(){
        setInterval( () => {
            // let i = 0 % 6; -> 0, Rest 0 / wenn 5 % 6 -> 0, Rest 5 / wenn 6 % 6 -> 1, Rest 0 / wenn 7 % 6 -> 1, Rest 1
            let i = this.currentImage % this.IMAGES_WALIKNG.length; 
            //let i = 0, 1, 2, 3, 4, 5, 6, 0
            let path = this.IMAGES_WALIKNG[i];
            this.img = this.imageChache[path];
            this.currentImage++;
        }, 150);
        
    }

}