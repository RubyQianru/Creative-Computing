class Ball {
  
  constructor(x = 0, y = 0, mass = 1000){
    this.position = createVector(x, y);
    this.velocity = createVector();
    this.mass = mass; //mass = area
    this.radius = sqrt(this.mass / PI);
    this.colour = colorHSL(random(100)); 
  }
  
  get diameter(){
    return this.radius * 2;
}

  get x(){
    return this.position.x;
  }
  set x(val){
    this.position.x = val;
  }
  
  get y(){
    return this.position.y;
  }
  set y(val){
    this.position.y = val;
  }

  show(){    
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.colour);
    circle(0, 0, this.diameter);
    pop();
  }
  
  update(){
    this.position.add(this.velocity);

    //boundaries
    if(this.x > width - this.radius){
      this.position.x = width - this.radius;
      this.velocity.x *= -0.9;
    }
    
    if(this.x < 0){
      this.position.x = 0;
      this.velocity.x *= -0.9;
    }
    if(this.y > height - this.radius){
      this.position.y = height - this.radius;
      this.velocity.y *= -0.9;
    }
    if(this.y < 0){
      this.position.y = 0;
      this.velocity.y *= -0.9;
    }
    
  }

}