let elements = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

 
    for (let i = 0; i < 30; i++) {
        elements.push(new RisingElement(random(width), height + random(50, 150), random(20, 50)));
    }
}

function draw() {
    background(220, 120, 150); 

    // Display and update all elements
    for (let element of elements) {
        element.move();
        element.display();
    }

   
    if (frameCount % 100 === 0) {
        elements.push(new RisingElement(random(width), height + random(50, 150), random(20, 50)));
    }
}


class RisingElement {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = random(0.5, 1.5);
        this.color = color(random(200, 255), random(100, 150), random(120, 180)); 
    }


    move() {
        this.y -= this.speed;

       
        if (this.y < -this.size) {
            this.y = height + random(50, 150);
        }
    }

    display() {
        noStroke();
        fill(this.color, 150); 
        ellipse(this.x, this.y, this.size, this.size);
    }
}
