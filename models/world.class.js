class World {
    character = new Character();
    level = loadLevel;
    canvas;
    ctx;
    keyboard;
    camera_x = 10;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    toxicBottlesBar = new toxicBottlesBar();
    bottles = [
        new Bottles(), 
        new Bottles(), 
        new Bottles(), 
        new Bottles(), 
        new Bottles()
    ];
    bubble = [new TrowableObjct()];
    bottleCache = {};
    i = 0;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.bottleValue;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld(){
        this.character.world = this;
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); //verschiebt die camera, wegen einer schleife wird die camera immer um 100px weiter zu seite gerendert

        this.addObjectsToMap(this.level.backgroundObject); //rendert hintergrund
        this.addObjectsToMap(this.level.enemies); // rendert feinde
        this.addObjectsToMap(this.bottles); // rendert flachen
        this.addObjectsToMap(this.bubble); // rendert die blase

        //----- space for fixed objects-----------
        this.ctx.translate(-this.camera_x, 0); //verschiebt die camera zurück, sodass die sie camera die nicht in einer schleife befindet
        this.addToMap(this.statusBar); // rendert HP-Anzeige
        this.addToMap(this.coinBar); // rendert coin-Anzeige
        this.addToMap(this.toxicBottlesBar); // rendert flaschen-Anzeige
        this.ctx.translate(this.camera_x, 0); //verschiebt die camera, wegen einer schleife wird die camera immer um 100px weiter zu seite gerendert


        this.addToMap(this.character); // rendert character
        this.ctx.translate(-this.camera_x, 0); //verschiebt die camera zurück, sodass die sie camera die nicht in einer schleife befindet
        // console.log(this.IMAGES_LIFE);
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
        movObj.drawFrameRedFrame(this.ctx);
        
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


    run(){ // überprüfe ob der feind mit charachter kollediert anhand isColliding(enemy)
        setInterval(() => {
            this.checkCollisions();
            this.checkShootBubble();
            this.fillBottlesBar();
        }, 200);
    }


    checkCollisions(){
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(); // wenn collision = true=> hit()
                // console.log('Collision with Character, energy', this.character.energy);
                this.statusBar.setPercenetage(this.character.energy); //verändere hp anzeige, wenn hit(); | greift auf energy zu, weil char mir movObj verknüpft ist
            }
        });
    }
    

    checkShootBubble(){
        if (this.keyboard.SHOOT && this.bottleValue > 0) {
            let bubble = new TrowableObjct(this.character.x + 140, this.character.y + 50);
            this.bubble.push(bubble); 
            this.character.shootCharacter.play();
            this.character.shootCharacter.volume = 0.05;  
        }
    }


    fillBottlesBar(){
        this.bottles.forEach((currentBottle) => {
            if (this.character.isColliding(currentBottle)) {
                this.toxicBottlesBar.bottleValue ++;
                this.toxicBottlesBar.getValueToxicBar(this.toxicBottlesBar.bottleValue);
                this.spliceElemnt(currentBottle);
            }
        });

    }


    spliceElemnt(currentBottle){
        for (let i = 0; i < this.bottles.length; i++) {
            const bottleValue = this.bottles[i].x;
            let vlaueX = currentBottle.x;
            if (bottleValue === vlaueX) {
                this.bottles.splice(i, 1);   
            }
        }
    }
}