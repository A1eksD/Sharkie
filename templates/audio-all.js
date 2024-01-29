class AllAudio {

// audio character
swimmingCharacterAudio = new Audio('audio/creek-swimming.mp3');
shootCharacterAudio = new Audio('audio/shootingBubble2.mp3');
characterGetHitAudio = new Audio('audio/classic_hurt.mp3');
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


stopAll() {
    // Stop all audio elements
    this.swimmingCharacterAudio.volume = 0;
    this.shootCharacterAudio.volume = 0;
    this.characterGetHitAudio.volume = 0;
    this.characterSlapAudio.volume = 0;
    this.characterGetElectricShockAudio.volume = 0;
    this.pickUpCoin.volume = 0;
    this.bubbleBurstAudio.volume = 0;
    this.bubbleCatchJellyFishAudio.volume = 0;
    this.getBottle.volume = 0;
}


playAll() {
    // Play all audio elements
    this.swimmingCharacterAudio.volume = 0.1;
    this.shootCharacterAudio.volume = 0.1;
    this.characterGetHitAudio.volume = 0.1;
    this.characterSlapAudio.volume = 0.2;
    this.characterGetElectricShockAudio.volume = 0.5;
    this.pickUpCoin.volume = 0.1;
    this.bubbleBurstAudio.volume = 0.5;
    this.bubbleCatchJellyFishAudio.volume = 0.1;
    this.getBottle.volume = 0.1;
}

}