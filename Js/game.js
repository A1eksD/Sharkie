let canvas;
let world;
let keyboard = new KeyBoard();
let allImgs;
let audio;
let isVertical = false;
let allMovableIntervals = [];
let RestartTheGame = true;
let restartTheGame;


/**
 * Interval for checking user device properties
 */
setInterval(() => {
    checkIfUserUsePhone();
    chechWidthScrean();
    trunPhone();
    checkIfIsATablet();
}, 100);


/**
 * Check if the user is using a phone and update UI accordingly
 */
function checkIfUserUsePhone() {
    if (navigator.maxTouchPoints > 0) {
        document.getElementById('positionControl').classList.add('d-none');
    } else {
        document.getElementById('positionControl').classList.remove('d-none');
    }
}


/**
 * Check the width of the screen and update isVertical variable
 */
function chechWidthScrean() {
    if (navigator.maxTouchPoints > 0) {
        isVertical = window.innerHeight < window.innerWidth;
    }
}


/**
 * Turn phone UI elements based on the isVertical variable
 */
function trunPhone() {
    if (isVertical && navigator.maxTouchPoints > 0) {
        trunPhoneValuesTrue();
    } else {
        trunPhoneValuesFalse();
    }
}


/**
 * Turn phone UI elements to true state
 */
function trunPhoneValuesTrue() {
    document.getElementById('turnPhone').classList.add('d-none');
    document.getElementById('turnPhone').classList.remove('d-block');
    document.getElementById('startScreanImg').classList.add('widthHeightMax');
    document.getElementById('startScreanBtn').classList.add('startScreanBtnMobile');
    document.getElementById('positionAudioBtn').classList.add('positionAudioBtnMobile');
    document.getElementById('h1').classList.add('d-none');
}

/**
 * Turn phone UI elements to false state
 */
function trunPhoneValuesFalse() {
    document.getElementById('turnPhone').classList.remove('d-none');
    document.getElementById('startScreanImg').classList.remove('widthHeightMax');
    document.getElementById('startScreanBtn').classList.remove('startScreanBtnMobile');
    document.getElementById('h1').classList.remove('d-none');
}


/**
 * Initialize the game
 */
function init() {
    allImgs = new AllImages();
    audio = new AllAudio();
    initLevel();
    addDisplayNone();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    volumenOFF();
    setInterval(() => checkIfUserUsePhoneAtGameStart(), 100);
}


/**
 * Check if the user is using a phone at game start and update UI accordingly
 */
function checkIfUserUsePhoneAtGameStart() {
    if (navigator.maxTouchPoints > 0) {
        document.getElementById('positionIconsMobile').classList.remove('d-none');
        document.getElementById('positionControl').classList.add('d-none');
    } else {
        document.getElementById('positionIconsMobile').classList.add('d-none');
        document.getElementById('positionControl').classList.remove('d-none');
    }
}


/**
 * Check if the user is using a tablet and update UI accordingly
 */
function checkIfIsATablet() {
    if (navigator.maxTouchPoints > 0 && window.innerWidth < 800) {
        document.getElementById('body').classList.add('positionFixed');
    } else {
        document.getElementById('body').classList.remove('positionFixed');
    }
}


/**
 * Save intervals for movable objects
 * @param {function} funktion - The function to run in the interval
 * @param {number} time - The interval time in milliseconds
 */
function saveRunningInterval(funktion, time) {
    let id = setInterval(funktion, time);
    allMovableIntervals.push(id);
}


/**
 * Keyboard event listeners for moving, hitting, and shooting
 */
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 38 || e.keyCode === 87) {
        keyboard.UP = true;   
    } else if(e.keyCode === 40 || e.keyCode === 83){
        keyboard.DOWN = true;
    } else if (e.keyCode === 37 || e.keyCode === 65){
        keyboard.LEFT = true;
    } else if (e.keyCode === 39 || e.keyCode === 68){
        keyboard.RIGHT = true;
    } else if (e.keyCode === 67){ 
        keyboard.HIT = true;
    } else if (e.keyCode === 32){
        keyboard.SHOOT = true;
    }
});


window.addEventListener('keyup', (e) => {
    if (e.keyCode === 38 || e.keyCode === 87) {
        keyboard.UP = false;
    } else if(e.keyCode === 40 || e.keyCode === 83){
        keyboard.DOWN = false;
    } else if (e.keyCode === 37 || e.keyCode === 65){ 
        keyboard.LEFT = false;
    } else if (e.keyCode === 39 || e.keyCode === 68){
        keyboard.RIGHT = false;
    } else if (e.keyCode === 67){
        keyboard.HIT = false;
    } else if (e.keyCode === 32){
        keyboard.SHOOT = false;
    }
});


/**
 * Touch event listeners for mobile movement
 */
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


/**
 * Hide start screen elements
 */
function addDisplayNone() {
    document.getElementById('startScreanBtn').classList.add('d-none');
    document.getElementById('startScreanImg').classList.add('d-none');
    document.getElementById('positionAudioBtn').classList.remove('d-none');
}


/**
 * Turn on the volume
 */
function volumenON() {
    document.getElementById('volumenOFF').classList.add('d-none');
    document.getElementById('volumenON').classList.remove('d-none');
    audio.playAll();
    audio.backgroundAudio.play();
    audio.backgroundAudio.loop = true;
}


/**
 * Turn off the volume
 */
function volumenOFF() {
    document.getElementById('volumenON').classList.add('d-none');
    document.getElementById('volumenOFF').classList.remove('d-none');
    audio.stopAll();
}


/**
 * Restart the game
 */
function restartGame() {
    document.getElementById('endScrean').classList.add('d-none');
    init();
}
