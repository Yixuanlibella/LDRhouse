let star;
let sun;
let clouds = [];
let particles = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

    star = new Star(width - 100, 100, 20);


    sun = new Sun(100, height - 100, 80);

 
    for (let i = 0; i < 3; i++) {
        clouds.push(new Cloud(random(width), random(50, 150), random(50, 100)));
    }

    
    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(random(width), random(height)));
    }
}

function draw() {
    background(100, 100, 150); 

  
    for (let cloud of clouds) {
        cloud.move();
        cloud.display();
    }

    
    star.twinkle();
    star.display();

    // Display and update the sun (slowly setting)
    sun.move();
    sun.display();

  
    for (let particle of particles) {
        particle.move();
        particle.display();
    }
}


class Star {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.brightness = 255;
        this.twinkleSpeed = random(0.01, 0.05);
    }

  
    twinkle() {
        this.brightness = 200 + sin(frameCount * this.twinkleSpeed) * 55;
    }

    
    display() {
        fill(255, this.brightness);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
    }
}


class Sun {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.setSpeed = 0.3;
    }

    
    move() {
        this.y += this.setSpeed;
        if (this.y > height + this.size) {
            this.y = height - 100; 
        }
    }

    // Display the sun
    display() {
        fill(255, 204, 0);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
    }
}


class Cloud {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = random(0.5, 1.5);
    }

    move() {
        this.x += this.speed;
        if (this.x > width + this.size) {
            this.x = -this.size;
        }
    }

    
    display() {
        fill(255, 255, 255, 200); 
        noStroke();
        ellipse(this.x, this.y, this.size, this.size / 2);
    }
}


class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(2, 5);
        this.speed = random(0.2, 1.0);
        this.opacity = random(50, 150);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);

        // Wrap around the screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    display() {
        fill(255, this.opacity);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
    }
}
