const DIMENSION = 10
let tileWidth

function drawTile(x, y, w){
  push()
  translate(x, y)
  noFill()
  circle(0, 0, w)
  pop()
}

function setup() {
  createCanvas(400, 400);
  tileWidth = width / DIMENSION
}

function draw() {
  background(220);

  for (let j = 0; j < DIMENSION; j++) {
    for(let i = 0; i < DIMENSION; i++) {
      const centerX = tileWidth * i + tileWidth / 2
      const centerY = tileWidth * j + tileWidth / 2
      drawTile(centerX, centerY, tileWidth)
    }
  }
}
