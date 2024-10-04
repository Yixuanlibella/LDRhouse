let wave1 = [];
let wave2 = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

    
    for (let x = 0; x <= width; x += 20) {
        wave1.push({ x: x, y: height / 3 + random(-20, 20) });
        wave2.push({ x: x, y: (2 * height) / 3 + random(-20, 20) });
    }
}

function draw() {
    background(13, 71, 161); 
    
    drawWave(wave1, color(33, 150, 243, 200)); 

    
    drawWave(wave2, color(255, 255, 255, 255)); 

    
    updateWave(wave1);
    updateWave(wave2);
}


function drawWave(wave, col) {
    noFill();
    stroke(col);
    strokeWeight(4); 
    beginShape();
    for (let i = 0; i < wave.length; i++) {
        curveVertex(wave[i].x, wave[i].y);
    }
    endShape();
}


function updateWave(wave) {
    for (let i = 0; i < wave.length; i++) {
        wave[i].y += random(-1, 1); 
        wave[i].x -= 0.5; 
       
        if (wave[i].x < 0) {
            wave[i].x = width;
            wave[i].y = height / 2 + random(-20, 20); 
        }
    }
}
