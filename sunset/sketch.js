const DIMENSION = 10
let tileWidth
let tiles = []

let startColour, endColour

function setup() {
  createCanvas(400, 400);
  tileWidth = width / DIMENSION

  startColour = color(36, 4, 125)
  endColour = color(217, 20, 49)

  for (let j = 0; j < DIMENSION; j++) {
    for (let i = 0; i < DIMENSION; i++) {
      const centerX = tileWidth * i + tileWidth / 2
      const centerY = tileWidth * j + tileWidth / 2
      tiles.push(new Tile(centerX, centerY, j, tileWidth))
    }
  }
}

function draw() {
  background(255);

  tiles.forEach(tile => {
    tile.render()
  })
}
