class World {
    character = new Character();
    enemies = [
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
    ];
    canvas;
    ctx;
    backgroundObjrct = [
        new BackgroundObjext('../img/3. Background/Layers/5. Water/L1.png', 0, 0),
        new BackgroundObjext('../img/3. Background/Layers/3.Fondo 1/L1.png', 0, 0),
        new BackgroundObjext('../img/3. Background/Layers/4.Fondo 2/L1.png', 0, 0),
        new BackgroundObjext('../img/3. Background/Layers/2. Floor/D1.png', 0, 0),
        new BackgroundObjext('../img/3. Background/Layers/1. Light/1.png', 0, 0)
    ];
    keyboard;


    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    setWorld(){
        this.character.world = this;
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjrct);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }


    addObjectsToMap(objects){
        objects.forEach(element => {
            this.addToMap(element);
        });
    }


    addToMap(movObj){
        if (movObj.otherDirection) {
            this.ctx.save();
            this.ctx.translate(movObj.width, 0);
            this.ctx.scale(-1, 1);
            movObj.x = movObj.x * -1;
        }
        this.ctx.drawImage(movObj.img, movObj.x, movObj.y, movObj.width, movObj.height);
        if (movObj.otherDirection) {
            this.ctx.restore();
            movObj.x = movObj.x * -1;
        }
    }
}