let redFabric;
let liquorBottles = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

    
    redFabric = new RedFabric();


    for (let i = 0; i < 5; i++) {
        liquorBottles.push(new LiquorBottle(random(width), random(height - 100, height)));
    }
}

function draw() {
    background(50); 

    
    redFabric.move();
    redFabric.display();

   
    for (let bottle of liquorBottles) {
        bottle.display();
        bottle.move();
    }


    if (frameCount % 180 === 0) {
        liquorBottles.push(new LiquorBottle(random(width), random(height - 100, height)));
    }
}

class RedFabric {
    constructor() {
        this.x = 0;
        this.y = height / 2;
        this.speed = 0.5;
        this.amplitude = 50;
        this.period = 100;
    }


    move() {
        this.x += this.speed;
        if (this.x > width) {
            this.x = -this.period; 
        }
    }

    display() {
        noFill();
        stroke(255, 0, 0); 
        strokeWeight(5);
        beginShape();
        for (let i = 0; i < width; i += 10) {
            let y = this.y + sin((i + this.x) * 0.05) * this.amplitude;
            vertex(i, y);
        }
        endShape();
    }
}


class LiquorBottle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(30, 50);
        this.color = color(random(100, 200), random(50, 100), random(20, 50)); 
        this.ySpeed = random(0.5, 1.5);
    }


    move() {
        this.y += this.ySpeed;
        if (this.y > height + this.size) {
            this.y = random(-100, -50); 
            this.x = random(width);
        }
    }

    display() {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.size / 3, this.size); 
        fill(255);
        rect(this.x + this.size / 9, this.y - 5, this.size / 6, 5); 
    }
}
