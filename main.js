
const terrainConfig = {
    width: 32,
    height: 24,
    scale: 32,
    colors: [
        0x220500,
        0x551000,
        0x993300,
        0x555500,
        0x005500,
        0x007700,
        0x00AA00,
        0x88DD00,
    ]
}

function onLoad(){

    var config = {
        type: Phaser.AUTO,
        width: terrainConfig.width * terrainConfig.scale,
        height: terrainConfig.height * terrainConfig.scale,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    const game = new Phaser.Game(config);
    const terrain = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,1,2,2,1,0,0,1,2,2,3,2,1,1,3,2,2,1,1,0,0,0],
        [0,0,1,2,3,2,4,2,4,3,4,4,4,3,2,3,4,3,2,2,1,1,0,0],
        [0,1,2,3,4,4,5,3,4,4,4,2,2,3,4,3,3,4,2,2,1,0,0,0],
        [0,1,2,3,4,4,4,3,4,4,3,4,3,2,2,4,4,4,3,2,1,0,0,0],
        [0,1,2,2,4,5,5,5,4,4,3,3,3,5,4,3,4,4,4,3,2,1,0,0],
        [0,0,1,2,3,3,5,5,3,4,5,5,5,5,3,5,3,4,4,3,2,1,0,0],
        [0,0,0,1,3,3,5,4,6,5,3,5,5,6,5,5,4,4,4,3,2,0,0,0],
        [0,0,0,1,3,5,5,4,6,6,3,5,6,7,6,5,4,4,4,3,2,1,0,0],
        [0,0,0,1,3,5,6,5,6,7,7,7,7,7,7,6,4,4,4,3,2,1,0,0],
        [0,0,1,1,3,5,4,6,7,7,7,7,7,7,7,5,4,4,4,3,2,1,0,0],
        [0,1,2,2,4,4,6,7,7,7,7,7,7,7,7,4,5,3,3,3,1,0,0,0],
        [0,1,2,3,4,5,7,7,7,7,7,7,7,7,7,5,5,3,2,1,0,0,0,0],
        [0,1,2,4,4,5,7,7,7,7,7,7,7,7,7,4,4,3,2,1,0,0,0,0],
        [0,1,2,3,5,6,7,7,7,7,7,7,7,7,7,4,4,3,2,1,0,0,0,0],
        [0,0,2,5,5,6,7,7,7,7,7,7,7,7,7,5,6,3,3,1,0,0,0,0],
        [0,0,2,2,6,6,7,7,7,7,7,7,7,7,7,6,6,4,4,3,1,0,0,0],
        [0,0,0,5,4,6,7,7,7,7,7,7,7,7,7,6,4,5,5,3,3,1,0,0],
        [0,0,2,2,5,6,6,6,7,7,7,7,7,7,6,5,5,5,5,5,3,1,0,0],
        [0,1,2,3,5,5,6,6,6,7,7,7,7,6,5,6,5,4,5,3,3,1,0,0],
        [0,1,3,4,4,5,5,5,6,6,6,7,4,6,5,5,5,4,4,4,2,1,0,0],
        [0,1,3,4,4,4,5,5,5,5,4,5,5,5,5,5,4,4,4,4,2,1,0,0],
        [0,0,2,3,3,3,4,5,5,5,5,4,4,5,4,4,4,5,5,4,2,2,0,0],
        [0,0,1,2,3,4,5,4,5,5,5,5,5,4,4,5,4,5,4,4,4,1,1,0],
        [0,0,1,3,4,5,5,4,4,5,4,5,5,4,5,5,5,4,5,5,4,2,1,0],
        [0,0,1,2,3,5,5,5,5,4,4,4,5,4,4,4,5,5,4,4,2,2,1,0],
        [0,1,2,2,4,5,5,5,4,5,3,4,4,4,5,5,4,4,4,4,4,2,1,0],
        [0,1,2,3,3,4,4,4,3,4,2,4,3,3,5,4,2,2,4,2,4,0,1,0],
        [0,0,1,1,2,3,3,3,2,2,1,3,2,2,3,2,2,2,3,1,4,2,1,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];
    const sources = [
        {x:0, y:0, speed: 1},
        {x:0, y:5, speed: 1},
        {x:5, y:0, speed: 1},
        {x:0, y:10, speed: 1},
        {x:10, y:0, speed: 1},

        {x:15, y:0, speed: 1},

        {x:31, y:0, speed: 1},
        {x:31, y:5, speed: 1},
        {x:26, y:0, speed: 1},
        {x:31, y:10, speed: 1},
        {x:21, y:0, speed: 1},

        {x:0, y:23, speed: 1},
        {x:0, y:18, speed: 1},
        {x:5, y:23, speed: 1},
        {x:0, y:13, speed: 1},
        {x:10, y:23, speed: 1},

        {x:15, y:23, speed: 1},

        {x:31, y:23, speed: 1},
        {x:31, y:18, speed: 1},
        {x:26, y:23, speed: 1},
        {x:31, y:13, speed: 1},
        {x:21, y:23, speed: 1}
    ];
    const beaconLocations = [
        {x:27, y:6},
        {x:10, y:17},
        {x:22, y:15},
        {x:7, y:7}
    ];

    document.body.style.setProperty("--debug-scale", terrainConfig.scale);
    const debugTable = document.createElement("table");
    debugTable.className="debug";

    document.body.appendChild(debugTable)
    const debugElements = [];
    const water = [];
    for(let x = 0; x < terrainConfig.width; x++){
        water[x] = [];
        debugElements[x] = []
        for(let y = 0; y < terrainConfig.height; y++){
            water[x][y] = 0;
        }
    }

    for(let y = 0; y < terrainConfig.height; y++){
        const debugRow = document.createElement("tr");
        debugTable.appendChild(debugRow);
        for(let x = 0; x < terrainConfig.width; x++){
            debugElements[x][y] = document.createElement('td');
            debugElements[x][y].textContent = '0';
            debugRow.appendChild(debugElements[x][y]);
        }
    }

    let terrainDirty = true;
    let terrainGraphics = [];
    let waterGraphics = [];
    let beacons = [];

    function preload (){
        this.load.image('beacon', 'assets/Beacon.png');
        this.load.image('beacon_active', 'assets/Beacon_active.png');
    }

    function isBeacon(x, y){
        return beacons.some(beacon => {
            const location = beacon.getData("pos");
            const dx = location.x-x;
            const dy = location.y-y;

            return (dx==0 || dx==1) && (dy==0 || dy==1);
        })
    }

    function create ()
    {
        game.canvas.oncontextmenu = function (e) { e.preventDefault(); }

        for(let i = 0; i < terrainConfig.colors.length; i++){
            terrainGraphics.push(this.add.graphics().setDepth(3*i));
            waterGraphics.push(this.add.graphics().setDepth(3*i+2));
        }

        beaconLocations.forEach(location => {
            beacons.push(
                this.add
                .image(location.x*terrainConfig.scale, location.y*terrainConfig.scale, "beacon")
                .setDepth(3*terrainConfig.colors.length)
                .setData("pos", location)
                .setData("charge", 0)
            );
        });

        let lastX=0, lastY = 0;
        this.input.on('pointerdown', function (pointer) {
            const x = Math.floor(pointer.worldX / terrainConfig.scale);
            const y = Math.floor(pointer.worldY / terrainConfig.scale);
            console.log(x, y);
            if(!isBeacon(x, y)){
                if(pointer.button === 0){
                    terrain[x][y] = Math.max(terrain[x][y]-1, 0);
                } else if (pointer.button === 2){
                    terrain[x][y] = Math.min(terrain[x][y]+1, terrainConfig.colors.length-1);
                }
                terrainDirty = true;                
            }            
            lastX = x;
            lastY = y;
        }, this);
        this.input.on('pointermove', function (pointer) {
            if(pointer.isDown){
                const x = Math.floor(pointer.worldX / terrainConfig.scale);
                const y = Math.floor(pointer.worldY / terrainConfig.scale);
                if(lastX !== x || lastY !== y){
                    if(!isBeacon(x,y)){
                        if(pointer.leftButtonDown()){
                            terrain[x][y] = Math.max(terrain[x][y]-1, 0);
                        } else if (pointer.rightButtonDown()){
                            terrain[x][y] = Math.min(terrain[x][y]+1, terrainConfig.colors.length-1);
                        }
                        terrainDirty = true;
                    }                    
                    lastX = x;
                    lastY = y;
                }
            }            
        });
        window.debug = {
            terrainGraphics, waterGraphics, beacons
        }
    }

    const damper = 50;
    function getChange(x, y, deltaT){
        let count = 0;
        let sum = 0;
        const t = terrain[x][y];
        const w = water[x][y];
        for(let dx = -1; dx < 2; dx++){
            for(let dy = -1; dy < 2; dy++){
                if((dx != 0) != (dy != 0)){ //4 neighbours
                    const ox = x + dx;
                    const oy = y + dy;
                    if(ox >= 0 && ox < terrainConfig.width && oy >= 0 && oy < terrainConfig.height){
                        const ot = terrain[ox][oy];
                        const ow = water[ox][oy];
                        count += 1;
                        sum += Math.max(Math.min(ow, ow + ot - w - t), -w);
                    }
                }
            }
        }
        if(sum === 0){
            return 0;
        }
        return sum/count*deltaT/damper;
    }

    function getHeightOr0(x, y){
        if(x >= 0 && x < terrainConfig.width && y >= 0 && y < terrainConfig.height){
            return terrain[x][y];
        }
        return 0;
    }

    function getWaterColor(w){
        if(w<0){
            return 0x000000;
        }
        let c;
        if(w < 2) {
            c = Phaser.Display.Color.Interpolate.RGBWithRGB(0x55,0x55,0x99, 0x00,0x00,0xFF, 2, w);
        } else if (w < 6) {
            c = Phaser.Display.Color.Interpolate.RGBWithRGB(0x00,0x00,0xFF, 0x00,0x00,0x55, 4, w-2);
        } else {
            return 0x000055;
        }
        return (c.r<<16) + (c.g<<8) + c.b;
    }

    function getWaterAlpha(w){
        if(w > 0){
            return Math.min(w/2+0.5, 0.9);
        }
        return 0;
    };

    function fillRectIfPositive(graphics, color, alpha, l, r, t, b){
        if(l<r && t<b && alpha > 0){
            graphics.fillStyle(color, alpha);
            graphics.fillRect(l, t, r-l, b-t);
        }
    }

    function drawTile(graphics, x, y, getColor, getAlpha = () => 1){
        const scale = terrainConfig.scale;
        const stepSize = scale/16;

        const hc = terrain[x][y];
        const hl = getHeightOr0(x-1, y);
        const hr = getHeightOr0(x+1, y);
        const ht = getHeightOr0(x, y-1);
        const hb = getHeightOr0(x, y+1);
        const top = Math.max(hc, hl, hr, ht, hb);

        let ml = 0, mr = 0, mt = 0, mb = 0;

        for(let h = top-1; h > hc; h--){
            graphics[h].fillStyle(getColor(h), getAlpha(h));
            if(hl > h){
                graphics[h].fillRect(x*scale+ml, y*scale+mt, stepSize, scale-(mt+mb));
            }
            if(hr > h){
                graphics[h].fillRect((x+1)*scale-mr, y*scale+mt, -stepSize, scale-(mt+mb));
            }
            if(ht > h){
                graphics[h].fillRect(x*scale+ml, y*scale+mt, scale-(ml+mr), stepSize);
            }
            if(hb > h){
                graphics[h].fillRect(x*scale+ml, (y+1)*scale-mb, scale-(ml+mr), -stepSize);
            }
            if(hl > h){
                ml += stepSize;
            }
            if(hr > h){
                mr += stepSize;
            }
            if(ht > h){
                mt += stepSize;
            }
            if(hb > h){
                mb += stepSize;
            }
        }
        graphics[hc].fillStyle(getColor(hc), getAlpha(hc));
        graphics[hc].fillRect(x*scale+ml, y*scale+mt, scale-(ml+mr), scale-(mt+mb));

        const htl = getHeightOr0(x-1, y-1);
        for(let h = hc+1; h<htl; h++){
            const l = x*scale + Math.max(0, hl-h)*stepSize;
            const r = x*scale + Math.max(0, htl-h)*stepSize;
            const t = y*scale + Math.max(0, ht-h)*stepSize;
            const b = y*scale + Math.max(0, htl-h)*stepSize;
            fillRectIfPositive(graphics[h], getColor(h), getAlpha(h), l, r, t, b);
        }

        const htr = getHeightOr0(x+1, y-1);
        for(let h = hc+1; h<htr; h++){
            const r = (x+1)*scale - Math.max(0, hr-h)*stepSize;
            const l = (x+1)*scale - Math.max(0, htr-h)*stepSize;
            const t = y*scale + Math.max(0, ht-h)*stepSize;
            const b = y*scale + Math.max(0, htr-h)*stepSize;
            fillRectIfPositive(graphics[h], getColor(h), getAlpha(h), l, r, t, b);
        }

        const hbl = getHeightOr0(x-1, y+1);
        for(let h = hc+1; h<hbl; h++){
            const l = x*scale + Math.max(0, hl-h)*stepSize;
            const r = x*scale + Math.max(0, hbl-h)*stepSize;
            const b = (y+1)*scale - Math.max(0, hb-h)*stepSize;
            const t = (y+1)*scale - Math.max(0, hbl-h)*stepSize;
            fillRectIfPositive(graphics[h], getColor(h), getAlpha(h), l, r, t, b);
        }

        const hbr = getHeightOr0(x+1, y+1);
        for(let h = hc+1; h<hbr; h++){
            const r = (x+1)*scale - Math.max(0, hr-h)*stepSize;
            const l = (x+1)*scale - Math.max(0, hbr-h)*stepSize;
            const b = (y+1)*scale - Math.max(0, hb-h)*stepSize;
            const t = (y+1)*scale - Math.max(0, hbr-h)*stepSize;
            fillRectIfPositive(graphics[h], getColor(h), getAlpha(h), l, r, t, b);
        }
    }

    function update (time, delta)
    {
        sources.forEach(source => {
            water[source.x][source.y] += source.speed * delta/1000;
        });
        const changes = [];
        for(let x = 0; x < terrainConfig.width; x++){
            changes[x] = [];
            for(let y = 0; y < terrainConfig.height; y++){
                changes[x][y] = getChange(x, y, delta);
            }
        }
        for(let x = 0; x < terrainConfig.width; x++){
            for(let y = 0; y < terrainConfig.height; y++){
                water[x][y] += changes[x][y];
                if(water[x][y] < 0.001){
                    water[x][y] = 0;
                }
            }
        }
        for(let i = 0; i < terrainConfig.colors.length; i++){
            waterGraphics[i].clear();
        }
        for(let x = 0; x < terrainConfig.width; x++){
            for(let y = 0; y < terrainConfig.height; y++){
                const w = Math.ceil(water[x][y]*5)/5;
                debugElements[x][y].textContent = w;
                if(w > 0){
                    const hc = terrain[x][y];
                    drawTile(waterGraphics, x, y, h => getWaterColor(w+hc-h), h => getWaterAlpha(w+hc-h));
                }
            }
        }

        beacons.forEach(beacon => {
            const {x, y} = beacon.getData('pos');
            const w = water[x][y] + water[x][y-1] + water[x-1][y] + water[x-1][y-1];
            beacon.setData('charge', Math.min(beacon.getData('charge')+w/4, 1000));
            if(beacon.getData('charge') === 1000){
                beacon.setTexture("beacon_active");
            }
            beacon.angle += beacon.getData('charge') * delta/1000;
        });

        if(terrainDirty){
            for(let i = 0; i < terrainConfig.colors.length; i++){
                terrainGraphics[i].clear();
            }
            for(let x = 0; x < terrainConfig.width; x++){
                for(let y = 0; y < terrainConfig.height; y++){
                    drawTile(terrainGraphics, x, y, h => terrainConfig.colors[h]);
                }
            }
            terrainDirty = false;
        }
    }
}

if(document.readyState === "complete"){
    onLoad();
} else {
    document.onreadystatechange = function (){
        if(document.readyState === "complete"){
            onLoad();
        }
    }
}