let sharpShapes = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

    
    for (let i = 0; i < 10; i++) {
        sharpShapes.push(new SharpShape(random(width), random(height), random(30, 60)));
    }
}

function draw() {
    background(10, 100, 10); 
    for (let shape of sharpShapes) {
        shape.move();
        shape.display();
    }

    
    if (frameCount % 120 === 0) {
        sharpShapes.push(new SharpShape(random(width), random(height), random(30, 60)));
    }
}


class SharpShape {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = random(TWO_PI);
        this.speed = random(1, 3);
        this.spin = random(0.01, 0.05); // Spin speed for rotating objects
        this.color = color(random(0, 255), random(100, 255), random(0, 100)); // Various green shades
    }

    
    move() {
        this.x += cos(this.angle) * this.speed;
        this.y += sin(this.angle) * this.speed;
        this.angle += this.spin;

        
        if (this.x < 0 || this.x > width) this.speed *= -1;
        if (this.y < 0 || this.y > height) this.speed *= -1;
    }

   
    display() {
        fill(this.color);
        noStroke();
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        beginShape();
        vertex(-this.size / 2, this.size / 2);
        vertex(this.size / 2, this.size / 2);
        vertex(0, -this.size / 2);
        endShape(CLOSE);
        pop();
    }
}
