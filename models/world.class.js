class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 10;


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

        this.ctx.translate(this.camera_x, 0); //verschiebt die camera, wegen einer schleife wird die camera immer um 100px weiter zu seite gerendert

        this.addObjectsToMap(this.level.backgroundObjrct); //rendert hintergrund
        this.addObjectsToMap(this.level.enemies); // rendert feinde
        this.addToMap(this.character); // rendert character


        this.ctx.translate(-this.camera_x, 0); //verschiebt die camera zurück, sodass die sie camera die nicht in einer schleife befindet
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