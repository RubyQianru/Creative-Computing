let balls = []
let n = 100;
let g = 0.1;
let attractor;

function setup() {
  createCanvas(windowWidth, windowHeight);

    while(balls.length < n){
      let ball = new Ball(random(width), 
                  random(height), 
                 randomGaussian(100, 50));
      ball.velocity = p5.Vector.random2D();
      ball.velocity.setMag(random(10));
      balls.push(ball);
    }
}

function draw() {
  background(0,100);  
  attractor = new Attractor(mouseX, mouseY, 2);
  attractor.display();


  for (let ball of balls){
    ball.velocity.add(createVector(0,g));
    
    let attractorForce = createVector(attractor.pos.x - ball.x, attractor.pos.y - ball.y);
    attractorForce.setMag(2);

    ball.velocity.add(attractorForce);
    
    ball.show();
    ball.update();
  }
  
  fill("white");
  text("ball pit", 10, 10);
}


let mouseIsPressed;
//wind
function mousePressed(){
  mouseIsPressed = true;
  
}

function mouseReleased(){
  mouseIsPressed = false;
}