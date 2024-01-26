let canvas;
let world;
let keyboard = new KeyBoard();
let allImgs;
let audio;



function init(){
    allImgs = new AllImages();
    audio = new AllAudio();
    initLevel();
    addDisplayNone();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


// move with keyboard
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 38 || e.keyCode === 87) { // 38 = -y
        keyboard.UP = true;   
        this.y -= 10; 
    } else if(e.keyCode === 40 || e.keyCode === 83){ // 40 = +y
        keyboard.DOWN = true;
        this.y += 10;
    } else if (e.keyCode === 37 || e.keyCode === 65){ // 37 = -x
        keyboard.LEFT = true;
        this.x -= 10;
    } else if (e.keyCode === 39 || e.keyCode === 68){ // 39 = +x
        keyboard.RIGHT = true;
        this.x -= 10;
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

// move with keyboard
window.addEventListener('keyup', (e) => {
    if (e.keyCode === 38 || e.keyCode === 87) { // 38 = +y
        keyboard.UP = false;
            this.y -= 10;
    } else if(e.keyCode === 40 || e.keyCode === 83){ // 40 = -y
        keyboard.DOWN = false;
          this.y += 10;

    } else if (e.keyCode === 37 || e.keyCode === 65){ // 37 = -x
        keyboard.LEFT = false;
          this.x -= 10;

    } else if (e.keyCode === 39 || e.keyCode === 68){ // 39 = +x
        keyboard.RIGHT = false;
          this.x -= 10;
    
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


//move mobile
window.addEventListener('touchstart', (e) => {
    document.getElementById('arrowUp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;   
    });
    document.getElementById('arrowDown').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });
    document.getElementById('arrowLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('arrowRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('hit').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.HIT = true;
    });
    document.getElementById('bottle').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SHOOT = true;
    });
});


//move mobile
window.addEventListener('touchend', (e) => {
    document.getElementById('arrowUp').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;   
    });
    document.getElementById('arrowDown').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    });
    document.getElementById('arrowLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('arrowRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    document.getElementById('hit').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.HIT = false;
    });
    document.getElementById('bottle').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SHOOT = false;
    });
});


function addDisplayNone(){
    document.getElementById('startScreanBtn').classList.add('d-none');
    document.getElementById('startScreanImg').classList.add('d-none');
}
