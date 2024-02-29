class Emitter extends MoverVector {
  
  constructor(x, y, velocity, n, lifespan){
    super(x, y, velocity);
    this.total = n;
    this.lifespan = lifespan;
    this.particles = [];
  }
  
  draw(){
    for(let p of this.particles){
      p.draw();
    }
  }
  
  update(){
    super.update()
    if(this.particles.length < this.total){
      this.addParticle();
    }
    
    let aliveOnes = []
    
    for(let p of this.particles){
      p.update();
      if (!p.isDead) aliveOnes.push(p)
    }
    
    this.particles = aliveOnes;

  }
  
  addParticle(){
    let vel = p5.Vector.random2D();
    vel.setMag(random(10));
    let p = new Particle(this.x, this.y, vel, this.lifespan);
    this.particles. push(p);
  }
  
}