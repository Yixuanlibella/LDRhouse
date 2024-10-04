let circles = [];
let sparkleEffect = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');


    for (let i = 0; i < 5; i++) {
        circles.push(new BouncingCircle(random(width), random(height), random(30, 50)));
    }

    for (let i = 0; i < 50; i++) {
        sparkleEffect.push(new Sparkle(random(width), random(height)));
    }
}

function draw() {
    background(250, 230, 180);
    for (let circle of circles) {
        circle.move();
        circle.display();
    }

    for (let sparkle of sparkleEffect) {
        sparkle.move();
        sparkle.display();
    }
}


class BouncingCircle {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = random(2, 5);
        this.ySpeed = random(2, 5);
        this.color = color(random(255), random(255), random(255)); // Bright random colors
    }

    
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

       
        if (this.x < 0 || this.x > width) this.xSpeed *= -1;
        if (this.y < 0 || this.y > height) this.ySpeed *= -1;
    }


    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}


class Sparkle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(5, 10);
        this.xSpeed = random(-1, 1);
        this.ySpeed = random(-1, 1);
        this.color = color(255, random(200, 255), 150); // Bright sparkles
    }

 
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

      
        if (this.x < 0 || this.x > width) this.xSpeed *= -1;
        if (this.y < 0 || this.y > height) this.ySpeed *= -1;
    }

  
    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}
