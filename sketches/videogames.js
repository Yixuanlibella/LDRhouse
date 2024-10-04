let squares = [];
let gridSize = 40;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

    
    for (let i = 0; i < 10; i++) {
        squares.push(new Square(random(width), random(height), gridSize));
    }
}

function draw() {
    background(30); 

    
    for (let square of squares) {
        square.move();
        square.display();
    }

   
    if (frameCount % 120 === 0) {
        squares.push(new Square(random(width), random(height), gridSize));
    }
}


class Square {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color(random(100, 255), random(100, 255), random(100, 255)); 
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-2, 2);
    }

  
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

       
        if (this.x < 0 || this.x > width - this.size) this.xSpeed *= -1;
        if (this.y < 0 || this.y > height - this.size) this.ySpeed *= -1;
    }


    display() {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.size, this.size);
    }
}
