class Level {
    enemies;
    backgroundObject;
    coins;
    bottles;
    levelEndX = (720*5)+470;

    
    /**
     * Constructor for the Level class.
     * @param {Array<MovableObject>} enemies - Array of enemies in the level.
     * @param {BackgroundObject} backgroundObject - Background object for the level.
     * @param {Array<MovableObject>} coins - Array of coins in the level.
     * @param {Array<MovableObject>} bottles - Array of bottles in the level.
     */
    constructor(enemies, backgroundObject, coins, bottles){
        this.enemies = enemies;
        this.backgroundObject = backgroundObject;
        this.coins = coins;
        this.bottles = bottles;
    }
}
