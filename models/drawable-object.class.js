class DrawableObject {
    allImg = [];
    img;
    imageCache = {};
    x = 200;
    y = 350;
    currentImage = 0;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };


    // Method to load a single image given a path
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
    * Method to preload an array of images.
    * @param {Array} array - Array of image paths to preload.
    * Create a new Image object for each path
    * Set the source of the image to the provided path
    * Store the image in the cache using the path as a key
    */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
    * Method to draw the current image on the canvas.
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
    * Draw the current image at the specified position (x, y)
    * using the provided rendering context (ctx)
    */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x + this.offset.left, this.y + this.offset.top, this.width, this.height);
        } catch (e) {
            console.log('This image could not be loaded', this.img);
        }
    }
}
