let floatingShapes = [];
let particles = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

    
    for (let i = 0; i < 6; i++) {
        floatingShapes.push(new FloatingShape(random(width), random(height), random(40, 80)));
    }

    
    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(random(width), random(height)));
    }
}

function draw() {
    background(40, 60, 80); 

    
    for (let shape of floatingShapes) {
        shape.move();
        shape.display();
    }

    
    for (let particle of particles) {
        particle.move();
        particle.display();
    }
}


class FloatingShape {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = random(-0.5, 0.5);
        this.ySpeed = random(-0.5, 0.5);
        this.opacity = random(80, 150); 
    }

    
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        
        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;
    }

    
    display() {
        fill(150, 180, 200, this.opacity); 
        noStroke();
        ellipse(this.x, this.y, this.size, this.size * 0.7);
    }
}


class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(3, 6);
        this.speed = random(0.1, 0.5);
        this.opacity = random(50, 100); // Soft opacity
    }

    move() {
        this.y += this.speed;
        if (this.y > height) {
            this.y = 0;
            this.x = random(width);
        }
    }

   
    display() {
        fill(255, this.opacity);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
    }
}
