
class MoverVector extends p5.Vector {
  
  constructor(x, y, velocity = false) {
    // super() calls the constructor of the parent to initialize the object.
    super(x, y)
    if (velocity) {
      this.velocity = velocity
    } else {
      this.velocity = new p5.Vector()
    }
  }
  
  draw() {
    point(this.x, this.y)
  }
  
  update(){
    this.add(this.velocity);
    if(this.x < 0 || this.x > width) this.velocity.x *= -1;
    if(this.y < 0 || this.y > width) this.velocity.y *= -1;
  }
}