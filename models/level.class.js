class Level {
    enemies;
    backgroundObject;
    levelEndX = 1900; // ende der x-Achse

    constructor(enemies, backgroundObject){
        this.enemies = enemies;
        this.backgroundObject = backgroundObject;
    }
}