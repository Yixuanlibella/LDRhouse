let chaser, chased;
let releaseDistance = 20; 

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');

    // Initialize the chasing objects
    chaser = new ChasingObject(width / 2, height / 2, color(133, 94, 66)); 
    chased = new ChasingObject(random(width), random(height), color(244, 164, 96)); 
}

function draw() {
    background(245, 222, 179); 
   
    chased.moveRandom();
    chased.display();

    chaser.moveTowards(chased.x, chased.y);
    chaser.display();

    
    if (dist(chaser.x, chaser.y, chased.x, chased.y) < releaseDistance) {
      
        chased.x = random(width);
        chased.y = random(height);
    }
}


class ChasingObject {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.color = c;
        this.size = 30;
        this.speed = 2;
    }


    moveRandom() {
        this.x += random(-2, 2);
        this.y += random(-2, 2);
        this.checkEdges();
    }

    // Move the chaser towards the target (the chased object)
    moveTowards(targetX, targetY) {
        let dx = targetX - this.x;
        let dy = targetY - this.y;
        let angle = atan2(dy, dx);
        this.x += cos(angle) * this.speed;
        this.y += sin(angle) * this.speed;
        this.checkEdges();
    }

  
    display() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
    }

    
    checkEdges() {
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }
}
