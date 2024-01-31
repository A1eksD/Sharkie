class Level {
    enemies;
    backgroundObject;
    coins;
    bottles;
    levelEndX = (720*5)+470;
    

    constructor(enemies, backgroundObject, coins, bottles){
        this.enemies = enemies;
        this.backgroundObject = backgroundObject;
        this.coins = coins;
        this.bottles = bottles;
    }
}