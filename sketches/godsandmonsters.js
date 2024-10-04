let centerX, centerY;
let force1, force2;
let particles1 = [];
let particles2 = [];
let radius = 100;
let numParticles = 50;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

    
    centerX = width / 2;
    centerY = height / 2;

    
    for (let i = 0; i < numParticles; i++) {
        particles1.push(new Particle(centerX, centerY, PI / 4 + (i * PI) / numParticles, radius));
        particles2.push(new Particle(centerX, centerY, (3 * PI) / 4 + (i * PI) / numParticles, radius));
    }
}

function draw() {
    background(10); 
    fill(255); 
    noStroke();
    ellipse(centerX, centerY, 50, 50); 
    for (let particle of particles1) {
        particle.move();
        particle.display(255, 100, 100); 
    }

    for (let particle of particles2) {
        particle.move();
        particle.display(100, 100, 255); 
    }
}


class Particle {
    constructor(centerX, centerY, angle, radius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.angle = angle;
        this.radius = radius;
        this.speed = random(0.03, 0.05); 
    }

    
    move() {
        this.angle += this.speed; 
        this.radius *= 0.995; 
        this.x = this.centerX + this.radius * cos(this.angle);
        this.y = this.centerY + this.radius * sin(this.angle);

        
        if (this.radius < 30) {
            this.radius = 100;
        }
    }

    display(r, g, b) {
        fill(r, g, b, 150); 
        noStroke();
        ellipse(this.x, this.y, 10, 10); 
    }
}
