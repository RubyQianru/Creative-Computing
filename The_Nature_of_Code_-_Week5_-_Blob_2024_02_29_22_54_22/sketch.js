let blob

function setup() {
  createCanvas(400, 400);
  blob = new Drop(width/2, height/2, 50, 10)
}

function draw() {
  background(220);
  noStroke()
  fill(0)
  blob.draw()
  blob.update()
}

class Drop {
  constructor(x, y, radius=30, n=10) {
    this.x = x
    this.y = y
    this.points = []
    for ( let i = 0; i < n; i ++) {
      let angle = map(i, 0, n, 0, TWO_PI);      
      let x = radius * cos(angle)
      let y = radius * sin(angle)
      let p = createVector(x, y)
      this.points.push(p)
    }
  }
  
  draw() {
    push()
    translate(this.x, this.y)
    beginShape()
    for(let p of this.points){
      curveVertex(p.x, p.y);
    }
    for(let p of this.points){
          curveVertex(p.x, p.y);
        }
    endShape()
    pop()
  }
  
  update() {
    for (let i = 0; i < this.points.length; i ++) {
      let p = this.points[i]
      p.x += map(noise(p.x, p.y, frameCount), 0, 1, -1, 1)
      p.y += map(noise(p.x, p.y, frameCount), 0, 1, -1, 1)
      // p.y += random(-1, 1)
    }
  }
}