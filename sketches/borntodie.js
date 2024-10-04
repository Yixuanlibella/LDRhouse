let runner;
let explosionParticles = [];
let stars = [];
let explosionTriggered = false;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container'); // Attach the canvas to the 'sketch-container' div

    // Initialize stars for the background
    for (let i = 0; i < 100; i++) {
        stars.push(new Star());
    }

    runner = new Runner(); // Initialize the runner object
}

function draw() {
    background(10, 10, 50); // Dark blue background for the American flag

    // Draw stars in the background
    for (let star of stars) {
        star.update();
        star.display();
    }

    // Draw the runner (moving red figure with trail)
    runner.move();
    runner.display();

    // Check if the runner reaches the edge to trigger an explosion
    if (runner.x > width && !explosionTriggered) {
        triggerExplosion(runner.x, runner.y); // Trigger explosion
        runner.reset(); // Reset the runner to the starting position
    }

    // Handle the explosion (if triggered)
    if (explosionTriggered) {
        for (let i = explosionParticles.length - 1; i >= 0; i--) {
            let particle = explosionParticles[i];
            particle.update();
            particle.display();

            // Remove the particle if its lifespan is over
            if (particle.lifespan <= 0) {
                explosionParticles.splice(i, 1);
            }
        }

        // Stop explosion if no particles remain and allow for the next run
        if (explosionParticles.length === 0) {
            explosionTriggered = false; // Reset explosion trigger
        }
    }
}

// Star class for animated background stars
class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(2, 5);
        this.speed = random(0.5, 2);
    }

    update() {
        this.y += this.speed;
        if (this.y > height) {
            this.y = 0;
            this.x = random(width);
        }
    }

    display() {
        fill(255, 255, 255, 200); // White stars
        ellipse(this.x, this.y, this.size);
    }
}


class Runner {
    constructor() {
        this.x = 0;
        this.y = height / 2;
        this.speed = 5;
        this.trail = [];
    }

    move() {
        this.x += this.speed;

        this.trail.push({x: this.x, y: this.y});
        if (this.trail.length > 50) {
            this.trail.shift();
        }
    }


    display() {
        
        for (let i = 0; i < this.trail.length; i++) {
            let t = this.trail[i];
            fill(255, 0, 0, map(i, 0, this.trail.length, 50, 255)); 
            ellipse(t.x, t.y, 20);
        }

        fill(255, 0, 0);
        ellipse(this.x, this.y, 30); 
    }

   
    reset() {
        this.x = 0;
    }
}


class ExplosionParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xSpeed = random(-5, 5);
        this.ySpeed = random(-5, 5);
        this.lifespan = 255; 
        this.size = random(5, 15); 
        this.color = color(random([0, 0, 255]), this.lifespan); 
    }

  
    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.lifespan -= 5; 
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}

// Function to trigger the explosion effect
function triggerExplosion(x, y) {
    explosionTriggered = true;

    for (let i = 0; i < 50; i++) {
        explosionParticles.push(new ExplosionParticle(x, y)); // Create particles
    }
}
