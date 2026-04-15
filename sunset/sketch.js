const DIMENSION = 10
let tileWidth
let tiles = []

let startColour, endColour

let noiseX, noiseY, noiseZ
const noiseInc = 0.3

function setup() {
  createCanvas(400, 400);
  tileWidth = width / DIMENSION

  startColour = color(36, 4, 125)
  endColour = color(214, 32, 78)

  for (let j = 0; j < DIMENSION; j++) {
    for (let i = 0; i < DIMENSION; i++) {
      const centerX = tileWidth * i + tileWidth / 2
      const centerY = tileWidth * j + tileWidth / 2
      tiles.push(new Tile(centerX, centerY, j, tileWidth))
    }
  }

  noiseZ = 0
}

function draw() {
  background(242, 230, 211);
  noiseX = 0

  for (let j = 0; j < DIMENSION; j++) {
    noiseY = 0
    for (let i = 0; i < DIMENSION; i++) {
      const n = noise(noiseX, noiseY, noiseZ)
      const index = j * DIMENSION + i

      tiles[index].render()
      tiles[index].setStrokeWeight(n)

      noiseX += noiseInc
    }
    noiseY += noiseInc
  }
  noiseZ += noiseInc/10
}
