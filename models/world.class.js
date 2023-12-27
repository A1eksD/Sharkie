class World {
    character = new Character();
    level = loadLevel;
    canvas;
    ctx;
    keyboard;
    camera_x = 10;
    statusBar = new StatusBar();
    IMAGES_LIFE = [
        'img/4.Marcadores/green/Life/100_copia3.png'
    ];

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }


    setWorld(){
        this.character.world = this;
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); //verschiebt die camera, wegen einer schleife wird die camera immer um 100px weiter zu seite gerendert

        this.addObjectsToMap(this.level.backgroundObjrct); //rendert hintergrund
        this.addObjectsToMap(this.level.enemies); // rendert feinde
        this.addToMap(this.statusBar); // rendert HP-Anzeige
        this.addToMap(this.character); // rendert character


        this.ctx.translate(-this.camera_x, 0); //verschiebt die camera zurück, sodass die sie camera die nicht in einer schleife befindet
        // console.log(this.IMAGES_LIFE);
        // this.ctx.drawImage(this.IMAGES_LIFE, 20, 20);
        let self = this;
        requestAnimationFrame(function(){ // rufe draw() wieder auf
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
            this.flipImg(movObj);
        }

        movObj.draw(this.ctx);
        movObj.drawFrame(this.ctx);
        
        if (movObj.otherDirection) {
            this.flipImgBack(movObj);
        }
    }


    flipImg(movObj){
        this.ctx.save();
        this.ctx.translate(movObj.width, 0);
        this.ctx.scale(-1, 1);
        movObj.x = movObj.x * -1;
    }


    flipImgBack(movObj){
        this.ctx.restore();
        movObj.x = movObj.x * -1;
    }


    checkCollisions(){ // überprüfe ob der feind mit charachter kollediert anhand isColliding(enemy)
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit(); // wenn collision = true=> hit()
                    // console.log('Collision with Character, energy', this.character.energy);
                }
            })
        }, 200);
    }
    
}