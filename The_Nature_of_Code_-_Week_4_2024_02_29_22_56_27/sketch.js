
// Declare variables for the x and y displacements (xd and yd), and the angle.

let xd = 0;
let yd = 0;
let angle = 0;

// Setup function, runs once at the beginning.
function setup() {
  // Create a canvas of size 400x400 pixels.
  createCanvas(400, 400);
  
}

// Draw function, runs continuously in a loop after setup.
function draw() {
  
    // Set background color with a low alpha to create a fading effect.
  background(0, 1);
  
    // Define the amplitude of oscillation based on 1/10th of the canvas width.
  let h = 1/10 * width 
  
    // Update x and y displacements using sine and cosine functions with variations.
  xd = sin(angle) * h + sin(5*angle) * 150
  yd = cos(angle) * h + cos(5*angle) * 150
  
    // Move the origin (0,0) to the center of the canvas plus the displacement.
  translate(width/2 + xd, height/2 + yd)
  
    // Draw a small circle at the translated position.
  circle(0, 0, 5)
  
    // Set fill color to white and disable stroke for subsequent shapes.
  fill(225)
  noStroke()
  
    // Increment the angle for the next frame to create animation.
  angle += 0.1
}