const loadLevel = new Level(
    [
        new Fish(),
        new Fish(),
        new Fish(),
        new Endboss()
    ],
    [ // alle 720px wird eine neuer Hinterund gerendert
        new BackgroundObjext('img/3.Background/Layers/5.Water/L2.png', -720, 0),
        new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L2.png', -720, 0),
        new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L2.png', -720, 0),
        new BackgroundObjext('img/3.Background/Layers/2.Floor/D2.png', -720, 0),
        new BackgroundObjext('img/3.Background/Layers/1.Light/2.png', -720, 0),
        new BackgroundObjext('img/shipwreckLinks.png', -720, 0),


        new BackgroundObjext('img/3.Background/Layers/5.Water/L1.png', 0, 0),
        new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L1.png', 0, 0),
        new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L1.png', 0, 0),
        new BackgroundObjext('img/3.Background/Layers/2.Floor/D1.png', 0, 0),
        new BackgroundObjext('img/3.Background/Layers/1.Light/1.png', 0, 0),

        new BackgroundObjext('img/3.Background/Layers/5.Water/L2.png', 720, 0),
        new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L2.png', 720, 0),
        new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L2.png', 720, 0),
        new BackgroundObjext('img/3.Background/Layers/2.Floor/D2.png', 720, 0),
        new BackgroundObjext('img/3.Background/Layers/1.Light/2.png', 720, 0),

        new BackgroundObjext('img/3.Background/Layers/5.Water/L1.png', 720*2, 0),
        new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L1.png', 720*2, 0),
        new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L1.png', 720*2, 0),
        new BackgroundObjext('img/3.Background/Layers/2.Floor/D1.png', 720*2, 0),
        new BackgroundObjext('img/3.Background/Layers/1.Light/1.png', 720*2, 0),

        new BackgroundObjext('img/3.Background/Layers/5.Water/L2.png', 720*3, 0),
        new BackgroundObjext('img/3.Background/Layers/3.Fondo_1/L2.png', 720*3, 0),
        new BackgroundObjext('img/3.Background/Layers/4.Fondo_2/L2.png', 720*3, 0),
        new BackgroundObjext('img/3.Background/Layers/2.Floor/D2.png', 720*3, 0),
        new BackgroundObjext('img/3.Background/Layers/1.Light/2.png', 720*3, 0),
        new BackgroundObjext('img/shipwreckRechts.png', (720*3) - 100, 0),
    ]
);