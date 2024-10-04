let goldenWaves = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

    // Create initial golden waves
    for (let i = 0; i < 10; i++) {
        goldenWaves.push(new GoldenWave(random(width), random(height), random(40, 80)));
    }
}

function draw() {
    background(237, 201, 175); 

    
    for (let wave of goldenWaves) {
        wave.move();
        wave.display();
    }

    if (frameCount % 180 === 0) {
        goldenWaves.push(new GoldenWave(random(width), height + random(50, 150), random(40, 80)));
    }
}

class GoldenWave {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.ySpeed = random(0.5, 1.5); 
        this.waveAmplitude = random(10, 30);
        this.waveFrequency = random(0.01, 0.05); 
        this.color = color(255, 223, 0, random(150, 255)); 
    }

    
    move() {
        this.y -= this.ySpeed; 
        this.x += sin(frameCount * this.waveFrequency) * this.waveAmplitude; 

       
        if (this.y < -this.size) {
            this.y = height + this.size;
            this.x = random(width);
        }
    }

   
    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size * 0.6);
    }
}
