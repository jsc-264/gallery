const DIMENSION = 10
let tileWidth

function setup() {
  createCanvas(400, 400);
  tileWidth = width / DIMENSION
}

function draw() {
  background(220);

  for (let j = 0; j < DIMENSION; j++) {
    for(let i = 0; i < DIMENSION; i++) {
      rect(tileWidth * i, tileWidth * j, tileWidth)
    }
  }
}
