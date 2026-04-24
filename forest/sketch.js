const DIMENSION = 20

function setup() {
  createCanvas(400, 400);
  colorMode(HSL)
  noStroke()
  background(0, 0, 90);
}

function draw() {
  const x = floor(random(DIMENSION))
  const y = floor(random(DIMENSION))

  const n = noise(x/10, y/10)
  fill(n*100)
  rect(width/DIMENSION*x, height/DIMENSION*y, width/DIMENSION, height/DIMENSION)
}
