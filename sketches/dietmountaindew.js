let bubbles = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container'); 
    for (let i = 0; i < 30; i++) {
        bubbles.push(new Bubble(random(width), random(height), random(20, 40)));
    }
}

function draw() {
    background(225, 255, 222); 
    for (let bubble of bubbles) {
        bubble.move();
        bubble.display();
    }

    if (frameCount % 60 === 0) {
        bubbles.push(new Bubble(random(width), random(height), random(20, 40)));
    }
}


class Bubble {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-2, 2);
        this.color = color(random(200, 255), random(240, 255), random(180, 220)); // Light yellow-green palette
    }

    
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width) this.xSpeed *= -1;
        if (this.y < 0 || this.y > height) this.ySpeed *= -1;
    }

    
    display() {
        noStroke();
        fill(this.color, 150); 
        ellipse(this.x, this.y, this.size);
    }
}
