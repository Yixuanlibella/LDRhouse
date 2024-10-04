let twinkles = [];
let fogLayers = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

 
    for (let i = 0; i < 10; i++) {
        fogLayers.push(new FogLayer(random(width), random(height), random(100, 200)));
    }


    for (let i = 0; i < 50; i++) {
        twinkles.push(new Twinkle(random(width), random(height)));
    }
}

function draw() {
    background(20, 20, 30); 

  
    for (let fog of fogLayers) {
        fog.display();
    }


    for (let twinkle of twinkles) {
        twinkle.move();
        twinkle.display();
    }

    
    if (frameCount % 180 === 0) {
        fogLayers.push(new FogLayer(random(width), random(height), random(100, 200)));
    }
}

class FogLayer {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.opacity = random(50, 120); 
        this.xSpeed = random(-0.3, 0.3);
        this.ySpeed = random(-0.3, 0.3);
    }

   
    display() {
        noStroke();
        fill(200, 200, 255, this.opacity); 
        ellipse(this.x, this.y, this.size, this.size);

        
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        
        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;
    }
}


class Twinkle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(2, 5);
        this.opacity = random(100, 255);
        this.twinkleSpeed = random(0.01, 0.05); 
    }
  
    move() {
        this.opacity += sin(frameCount * this.twinkleSpeed) * 5;
        this.opacity = constrain(this.opacity, 100, 255); 
    }

    
    display() {
        noStroke();
        fill(255, 255, 255, this.opacity); 
        ellipse(this.x, this.y, this.size, this.size);
    }
}
