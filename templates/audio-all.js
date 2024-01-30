class AllAudio {

// audio character
swimmingCharacterAudio = new Audio('audio/creek-swimming.mp3');
shootCharacterAudio = new Audio('audio/shootingBubble2.mp3');
characterGetHitAudio = new Audio('audio/getDmg.mp3');
characterSlapAudio = new Audio('audio/fin_slap.mp3');
characterGetElectricShockAudio = new Audio('audio/electric_zap.mp3');
    
//audio puckup coin
pickUpCoin = new Audio('audio/collectcoin.mp3');

//audio bubble burst fish
bubbleBurstAudio = new Audio('audio/bubble_bursts.mp3');

//audio catch Jellyfish
bubbleCatchJellyFishAudio = new Audio('audio/catch_with_bubble.mp3');

//audio get bottle
getBottle = new Audio ('audio/bottle.mp3');

//audio backgroundAudio
backgroundAudio = new Audio ('audio/background.mp3');

//audio boss
introduceBoss = new Audio ('audio/shark-is-near.mp3');
bossGetDmgBubble = new Audio ('audio/dmgEndboss.mp3');
bossGetHit = new Audio ('audio/bossGetHit.mp3');

//audio win
winAudio = new Audio ('audio/win.mp3');

//audio lose
loseAudio = new Audio ('audio/loseAudio.mp3');


// Mute all audio elements
stopAll() {
    this.swimmingCharacterAudio.volume = 0;
    this.shootCharacterAudio.volume = 0;
    this.characterGetHitAudio.volume = 0;
    this.characterSlapAudio.volume = 0;
    this.characterGetElectricShockAudio.volume = 0;
    this.pickUpCoin.volume = 0;
    this.bubbleBurstAudio.volume = 0;
    this.bubbleCatchJellyFishAudio.volume = 0;
    this.getBottle.volume = 0;
    this.backgroundAudio.volume = 0;
    this.introduceBoss.volume = 0;
    this.bossGetDmgBubble.volume = 0;
    this.bossGetHit.volume = 0;
    this.winAudio.volume = 0;
    this.loseAudio.volume = 0;
}


// Play all audio elements
playAll() {
    this.backgroundAudio.volume = 0.5;
    this.swimmingCharacterAudio.volume = 0.1;
    this.shootCharacterAudio.volume = 0.1;
    this.characterGetHitAudio.volume = 0.5;
    this.characterSlapAudio.volume = 0.2;
    this.characterGetElectricShockAudio.volume = 0.5;
    this.pickUpCoin.volume = 0.1;
    this.bubbleBurstAudio.volume = 0.5;
    this.introduceBoss.volume = 0.5;
    this.bubbleCatchJellyFishAudio.volume = 0.5;
    this.getBottle.volume = 0.1;
    this.bossGetDmgBubble.volume = 0.1;
    this.bossGetHit.volume = 0.5;
    this.winAudio.volume = 0.5;
    this.loseAudio.volume = 0.1;
}

}