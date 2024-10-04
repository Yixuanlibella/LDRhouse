let darkShapes = [];
let glowingOrb;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

    
    for (let i = 0; i < 10; i++) {
        darkShapes.push(new DarkShape(random(width), random(height), random(50, 100)));
    }

   
    glowingOrb = new GlowingOrb(width / 2, height / 2, 80);
}

function draw() {
    background(20); 

    
    for (let shape of darkShapes) {
        shape.move();
        shape.display();
    }


    glowingOrb.display();
    glowingOrb.pulse();
}


class DarkShape {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = random(0.5, 1.5);
        this.opacity = random(50, 100); 
    }

   
    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);

       
        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;
    }

    
    display() {
        fill(50, this.opacity); 
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}


class GlowingOrb {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.pulseSpeed = 0.02;
        this.maxGlow = 150;
        this.minGlow = 100;
        this.glow = random(this.minGlow, this.maxGlow);
        this.growing = true;
    }

 
    pulse() {
        if (this.growing) {
            this.glow += this.pulseSpeed * 10;
            if (this.glow > this.maxGlow) this.growing = false;
        } else {
            this.glow -= this.pulseSpeed * 10;
            if (this.glow < this.minGlow) this.growing = true;
        }
    }

    
    display() {
        fill(255, this.glow, 100, 150);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}
