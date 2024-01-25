let canvas;
let world;
let keyboard = new KeyBoard();

function init(){
    initLevel();
    addDisplayNone();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


window.addEventListener('keydown', (e) => {
    if (e.keyCode === 38 || e.keyCode === 87) { // 38 = -y
        keyboard.UP = true;
        setInterval(() => {
            this.y -= 10;
        }, 1000 / 60);
    } else if(e.keyCode === 40 || e.keyCode === 83){ // 40 = +y
        keyboard.DOWN = true;
        setInterval(() => {
          this.y += 10;
        }, 1000 / 60);
    } else if (e.keyCode === 37 || e.keyCode === 65){ // 37 = -x
        keyboard.LEFT = true;
        setInterval(() => {
          this.x -= 10;
        }, 1000 / 60);
    } else if (e.keyCode === 39 || e.keyCode === 68){ // 39 = +x
        keyboard.RIGHT = true;
        setInterval(() => {
          this.x -= 10;
        }, 1000 / 60);
    } else if (e.keyCode === 67){ // 67 = c
        keyboard.HIT = true;
    // } else if (e.keyCode === 88){ //  88 = x
    //     keyboard.JUMP = true;
    //     setInterval(() => {
    //       this.y -= 10;
    //     }, 1000 / 60);
    } else if (e.keyCode === 32){ // 32 = space 
        keyboard.SHOOT = true;
    }
});


window.addEventListener('keyup', (e) => {
    if (e.keyCode === 38 || e.keyCode === 87) { // 38 = +y
        keyboard.UP = false;
        setInterval(() => {
            this.y -= 10;
        }, 1000 / 60);
    } else if(e.keyCode === 40 || e.keyCode === 83){ // 40 = -y
        keyboard.DOWN = false;
        setInterval(() => {
          this.y += 10;
        }, 1000 / 60);
    } else if (e.keyCode === 37 || e.keyCode === 65){ // 37 = -x
        keyboard.LEFT = false;
        setInterval(() => {
          this.x -= 10;
        }, 1000 / 60);
    } else if (e.keyCode === 39 || e.keyCode === 68){ // 39 = +x
        keyboard.RIGHT = false;
        setInterval(() => {
          this.x -= 10;
        }, 1000 / 60);
    } else if (e.keyCode === 67){ // 67 = c
        keyboard.HIT = false;
    // } else if (e.keyCode === 88){ //  88 = x
    //     keyboard.JUMP = false;
    //     setInterval(() => {
    //       this.y -= 10;
    //     }, 1000 / 60);
    } else if (e.keyCode === 32){ // 32 = space 
        keyboard.SHOOT = false;
    }
})

function addDisplayNone(){
    document.getElementById('startScreanBtn').classList.add('d-none');
    document.getElementById('startScreanImg').classList.add('d-none');
}
