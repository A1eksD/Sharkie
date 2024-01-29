let canvas;
let world;
let keyboard = new KeyBoard();
let allImgs;
let audio;
let isVertical = false;



setInterval(() => {
    checkIfUserUsePhone();
    chechWidthScrean();
    trunPhone();
}, 100);


function checkIfUserUsePhone(){
    if (navigator.maxTouchPoints > 0) {
        document.getElementById('positionIconsMobile').classList.remove('d-none');
        document.getElementById('positionControl').classList.add('d-none');
    } else {
        document.getElementById('positionIconsMobile').classList.add('d-none');
        document.getElementById('positionControl').classList.remove('d-none');
    }
}


function chechWidthScrean(){
    if (navigator.maxTouchPoints > 0) {
        if (window.innerHeight < window.innerWidth) {
            return isVertical = true;
        } else {
            return isVertical = false;
        }
    }
}


function trunPhone(){
    if (isVertical && navigator.maxTouchPoints > 0) {
    // if (/Android|iPhone/i.test(navigator.userAgent)) {
        document.getElementById('turnPhone').classList.add('d-none');
        document.getElementById('turnPhone').classList.remove('d-block');
        document.getElementById('startScreanImg').classList.add('widthHeightMax');
        document.getElementById('startScreanBtn').classList.add('startScreanBtnMobile');
        document.getElementById('positionAudioBtn').classList.add('positionAudioBtnMobile');
        document.getElementById('h1').classList.add('d-none');
    } else {
        document.getElementById('turnPhone').classList.remove('d-none');
        document.getElementById('startScreanImg').classList.remove('widthHeightMax');
        document.getElementById('startScreanBtn').classList.remove('startScreanBtnMobile');
        document.getElementById('h1').classList.remove('d-none');
    }
}


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
    document.getElementById('positionAudioBtn').classList.remove('d-none');
}



    
