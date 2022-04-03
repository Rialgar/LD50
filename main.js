
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
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 5, 3, 0, 0, 5],
        [5, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    ];
    const sources = [
        {x:15, y:0, speed: 10}
    ]

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
            //terrain[x][y] = Math.floor(Math.random()*terrainConfig.colors.length);
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

    function preload (){}

    function create ()
    {
        for(let i = 0; i < terrainConfig.colors.length; i++){
            terrainGraphics.push(this.add.graphics());
            waterGraphics.push(this.add.graphics());
        }
    }

    const damper = 100;
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
                        if(w > 0.01 || ow >= 0.01){
                            count += 1;
                            sum += Math.max(Math.min(ow, ow + ot - w - t), -w);
                        }
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
            return Math.min(w/2+0.5, 1);
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