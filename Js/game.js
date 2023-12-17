let canvas;
let world;
let keyboard = new KeyBoard();

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My Character is', world.character);
}


window.addEventListener('keydown', (e) => {
    console.log(e)
    if (e.keyCode === 38 || e.keyCode === 87) { // 38 = +y
        keyboard.UP = true;
        setInterval(() => {
            this.y -= 10;
        }, 1000 / 60);
    } else if(e.keyCode === 40 || e.keyCode === 83){ // 40 = -y
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
    } else if (e.keyCode === 32){ // 39 = space
        keyboard.SHOOT = true;
        // setInterval(() => {
        //   this.x -= 10;
        // }, 1000 / 60);
    }
});


window.addEventListener('keyup', (e) => {
    console.log(e)
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
    } else if (e.keyCode === 32){ // 39 = space
        keyboard.SHOOT = false;
        // setInterval(() => {
        //   this.x -= 10;
        // }, 1000 / 60);
    }
})
