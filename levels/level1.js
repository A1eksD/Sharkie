let loadLevel 

function initLevel() {
loadLevel = new Level(
        [ // load enemys
            new Fish(350),
            new Fish(102),
            new Fish(122),
            new Fish(268),
            new Fish(50),

            new JellyFish(),
            new JellyFish(),
            new JellyFish(),
            new JellyFish(),
            new JellyFish()
        ],
        [ // load all 720px a new background

            new BackgroundObjext('img/3.Background/Layers/5.Water/L1.png', -720*4, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/5.Water/L2.png', -720*3, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/5.Water/L1.png', -720*2, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/5.Water/L2.png', -720, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/5.Water/L1.png', 0, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/5.Water/L2.png', 720, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/5.Water/L1.png', 720*2, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/5.Water/L2.png', 720*3, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/5.Water/L1.png', 720*4, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/5.Water/L2.png', 720*5, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/5.Water/L1.png', 720*6, 0, 0),
            
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L1.png', -720*4, 0, 0.8),
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L2.png', -720*3, 0, 0.8),
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L1.png', -720*2, 0, 0.8),
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L2.png', -720, 0, 0.8),
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L1.png', 0, 0, 0.8),
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L2.png', 720, 0, 0.8),
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L1.png', 720*2, 0,0.8),
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L2.png', 720*3, 0, 0.8),
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L1.png', 720*4, 0, 0.8),
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L2.png', 720*5, 0, 0.8),
            new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L1.png', 720*6, 0, 0.8),

            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L1.png', -720*4, 0, 1.8),
            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L2.png', -720*3, 0, 1.8),
            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L1.png', -720*2, 0, 1.8),
            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L2.png', -720, 0, 1.8),
            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L1.png', 0, 0, 1.8),
            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L2.png', 720, 0, 1.8),
            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L1.png', 720*2, 0, 1.8),
            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L2.png', 720*3, 0, 1.8),
            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L1.png', 720*4, 0, 1.8),
            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L2.png', 720*5, 0, 1.8),
            new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L1.png', 720*6, 0, 1.8),

            new BackgroundObjext('img/3.Background/Layers/1.Light/1.png', -720*4, 0, 0.5),
            new BackgroundObjext('img/3.Background/Layers/1.Light/2.png', -720*3, 0, 0.5),
            new BackgroundObjext('img/3.Background/Layers/1.Light/1.png', -720*2, 0, 0.5),
            new BackgroundObjext('img/3.Background/Layers/1.Light/2.png', -720, 0, 0.5),
            new BackgroundObjext('img/3.Background/Layers/1.Light/1.png', 0, 0, 0.5),
            new BackgroundObjext('img/3.Background/Layers/1.Light/2.png', 720, 0, 0.5),
            new BackgroundObjext('img/3.Background/Layers/1.Light/1.png', 720*2, 0, 0.5),
            new BackgroundObjext('img/3.Background/Layers/1.Light/2.png', 720*3, 0, 0.5),
            new BackgroundObjext('img/3.Background/Layers/1.Light/1.png', 720*4, 0, 0.5),
            new BackgroundObjext('img/3.Background/Layers/1.Light/2.png', 720*5, 0, 0.5),
            new BackgroundObjext('img/3.Background/Layers/1.Light/1.png', 720*6, 0, 0.5),

            new BackgroundObjext('img/3.Background/Layers/2.Floor/D1.png', -720*4, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/2.Floor/D2.png', -720*3, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/2.Floor/D1.png', -720*2, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/2.Floor/D2.png', -720, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/2.Floor/D1.png', 0, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/2.Floor/D2.png', 720, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/2.Floor/D1.png', 720*2, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/2.Floor/D2.png', 720*3, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/2.Floor/D1.png', 720*4, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/2.Floor/D2.png', 720*5, 0, 0),
            new BackgroundObjext('img/3.Background/Layers/2.Floor/D1.png', 720*6, 0, 0),

            new BackgroundObjext('img/shipwreckLinks.png', -720*4, 0, 0),
            new BackgroundObjext('img/shipwreckRechts.png', (720*6)-100, 0, 0)
        ],
        [
            // surprising coins
            new Coin((-720*3)+80, 150),
            new Coin((-720*3)+70, 200),
            new Coin((-720*3)+60, 250),
            new Coin((-720*3)+50, 300),
        
            // surprising coins
            new Coin((-720*3)+120, 150),
            new Coin((-720*3)+110, 200),
            new Coin((-720*3)+100, 250),
            new Coin((-720*3)+90, 300),

            // surprising coins
            new Coin((-720*3)+160, 150),
            new Coin((-720*3)+150, 200),
            new Coin((-720*3)+140, 250),
            new Coin((-720*3)+130, 300),

            // surprising coins
            new Coin((-720*3)+200, 150),
            new Coin((-720*3)+190, 200),
            new Coin((-720*3)+180, 250),
            new Coin((-720*3)+170, 300),

            // just 3 coins
            new Coin(500, 50),
            new Coin(600, 100),
            new Coin(700, 150),

            // semicircle
            new Coin((720*2), 400),
            new Coin((720*2)+20, 360),
            new Coin((720*2)+60, 340),
            new Coin((720*2)+100, 320),
            new Coin((720*2)+140, 340),
            new Coin((720*2)+180, 360),
            new Coin((720*2)+200, 400),

            // just 4 coins
            new Coin((720*2)+400, 382),
            new Coin((720*2)+65, 222),
            new Coin((720*2)+505, 111),
            new Coin((720*2)-222, 20),

            // semicircle
            new Coin((720*3), 20),
            new Coin((720*3)+20, 60),
            new Coin((720*3)+60, 80),
            new Coin((720*3)+100, 100),
            new Coin((720*3)+140, 80),
            new Coin((720*3)+180, 60),
            new Coin((720*3)+200, 20),

            // just 4 coins
            new Coin((720*4), 70),
            new Coin((720*4)-50, 400),
            new Coin((720*4)-300, 220),
            new Coin((720*4)+330, 380)
        ],
        [
            // surprising bottles
            new BottlesIsSwimming((-720*3)+300, 130),
            new BottlesIsSwimming((-720*3)+330, 210),
            new BottlesIsSwimming((-720*3)+360, 290),

            // surprising bottles
            new BottlesIsSwimming((-720*3)+350, 130),
            new BottlesIsSwimming((-720*3)+380, 210),
            new BottlesIsSwimming((-720*3)+410, 290),

            // surprising bottles
            new BottlesIsSwimming((-720*3)+400, 130),
            new BottlesIsSwimming((-720*3)+430, 210),
            new BottlesIsSwimming((-720*3)+460, 290),

            // surprising bottles
            new BottlesIsSwimming((-720*3)+450, 130),
            new BottlesIsSwimming((-720*3)+480, 210),
            new BottlesIsSwimming((-720*3)+510, 290),


            new BottlesIsSwimming(130, 290),

            new BottlesIsSwimming(1102, 30),

            new BottlesIsSwimming(1902, 380),

            // randomly placed bottles on the floor
            new BottlesAtBottom(), 
            new BottlesAtBottom(), 
            new BottlesAtBottom()

        ]

    );
}