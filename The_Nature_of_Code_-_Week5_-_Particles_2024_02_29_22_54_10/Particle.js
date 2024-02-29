class Particle extends MoverVector {
  constructor (x, y, velocity, lifeSpan = 10) {
    super(x, y, velocity) 
    this.lifeSpan = lifeSpan
    this.age = 0
  }
  
  draw() {
     strokeWeight(map(this.age, 0, this.lifeSpan, 10, 0))
    point(this.x, this.y)
  }
  
  update() {
    super.update()
    if(this.isDead) return
    this.age += 1
  }
  
  get isDead() {
    return this.age >= this.lifeSpan
  }
  
}