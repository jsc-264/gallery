const DIMENSION = 10
let tileWidth

let startColour, endColour

function drawTile(tileX, tileY, tileJ, tileWidth){
  push()
  translate(tileX, tileY)

  noFill()

  const circleWeight = map(tileJ, 0, DIMENSION, 2, 1)
  strokeWeight(circleWeight)

  const colT = map(tileJ, 0, DIMENSION, 0, 1)
  const col = lerpColor(startColour, endColour, colT)
  stroke(col)

  const range = map(tileJ, 0, DIMENSION, tileWidth/3, tileWidth/10)

  const numCircles = map(tileJ, 0, DIMENSION, 10, 0)
  for (let i = 0; i < numCircles; i++){
    const circleX = random(-range, range)
    const circleY = random(-range, range)
    circle(circleX, circleY, tileWidth)
  }


  circle(0, 0, tileWidth)
  pop()
}

function setup() {
  createCanvas(400, 400);
  tileWidth = width / DIMENSION

  startColour = color(36, 4, 125)
  endColour = color(217, 20, 49)
}

function draw() {
  background(255);

  for (let j = 0; j < DIMENSION; j++) {
    for(let i = 0; i < DIMENSION; i++) {
      const centerX = tileWidth * i + tileWidth / 2
      const centerY = tileWidth * j + tileWidth / 2
      drawTile(centerX, centerY, j, tileWidth)
    }
  }

  noLoop()
}
