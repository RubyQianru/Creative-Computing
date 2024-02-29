let e
function setup() {
  createCanvas(400, 400);
  let vel = p5.Vector.random2D()
  vel.setMag(20)
  e = new Emitter(width/2, height/2, vel, 100, 80)
}


function draw() {
  background(220);
  stroke(0)
  strokeWeight(5)
  e.draw()
  e.update()
  
//   thing.draw()
//   thing.update()
  
//   if (thing.isDead){
//     let vel = p5.Vector.random2D();
//     vel.setMag(random(10));
//     thing = new Particle(width/2, height/2, vel, 10);
//   }
}