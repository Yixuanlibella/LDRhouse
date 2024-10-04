let car;
let fireworks = [];
let flagStripes = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');


    car = new Car(0, height - 60);

 
    for (let i = 0; i < 7; i++) {
        flagStripes.push(new FlagStripe(i * 50));
    }
}

function draw() {
    background(0); 
    for (let stripe of flagStripes) {
        stripe.display();
    }

  
    car.move();
    car.display();


    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].display();
        if (fireworks[i].finished()) {
            fireworks.splice(i, 1); 
        }
    }

 
    if (frameCount % 60 === 0 && car.x > 50) {
        fireworks.push(new Firework(random(width), random(height / 2)));
    }
}


class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 2;
    }

    
    move() {
        this.x += this.speed;
        if (this.x > width) {
            this.x = -60; 
        }
    }

 
    display() {
        fill(150, 0, 0); // Red car
        rect(this.x, this.y, 60, 30);
        fill(255);
        rect(this.x + 10, this.y - 10, 40, 10); // Car top
    }
}

class FlagStripe {
    constructor(y) {
        this.y = y;
        this.width = width;
        this.height = 50;
        this.color = (y / 50) % 2 === 0 ? color(255, 0, 0) : color(255); 
    }
    display() {
        fill(this.color);
        rect(0, this.y, this.width, this.height);
    }
}

// Firework class representing fireworks in the sky
class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.explosionSize = random(30, 60);
        this.opacity = 255;
    }

 
    update() {
        this.opacity -= 5;
    }

   
    display() {
        noStroke();
        fill(255, 200, 0, this.opacity); // Yellow firework
        ellipse(this.x, this.y, this.explosionSize);
        fill(255, 100, 0, this.opacity); // Orange firework
        ellipse(this.x, this.y, this.explosionSize / 2);
    }

 
    finished() {
        return this.opacity <= 0;
    }
}
