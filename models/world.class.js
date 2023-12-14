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
        new BackgroundObjext ('img/3. Background/Dark/1.png"')
    ];
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw(){
        this.ctx.clearRect(0, 0, canvas.width, this.canvas.height);

        this.addToMap(this.character);
        addObjectsToMap(this.enemies);
        addObjectsToMap(this.backgroundObjrct);

        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }


    addObjectsToMap(objects){
        objects.forEach(o => {
            addToMap(o);
        });
    }

    addToMap(movObj){
        this.ctx.drawImage(movObj.img, movObj.x, movObj.y, movObj.width, movObj.height);
    }
}