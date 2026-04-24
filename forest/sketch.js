const DIMENSION = 30
const colours = []
let nz = 0

function setup() {
  createCanvas(400, 400);
  colorMode(HSL)
  noStroke()
  background(0, 0, 90);

  for (let i = 0; i < DIMENSION; i++) {
    colours.push(new Array(DIMENSION))
  }
}

function draw() {
  for (let a = 0; a < 10; a++) {
    for (let j = 0; j < DIMENSION; j++) {
      for (let i = 0; i < DIMENSION; i++) {
        const n = noise(i / 10, j / 10, nz)
        colours[i][j] = n
      }
    }

    const x = random(width)
    const y = random(height)

    const i = floor(map(x, 0, width, 0, DIMENSION))
    const j = floor(map(y, 0, height, 0, DIMENSION))

    const n = colours[i][j]
    const col = color(
      map(n, 0, 1, 35, 50),
      map(n, 0, 1, 0, 100),
      map(n, 0, 1, 10, 50),
    )
    fill(col)
    rect(x, y, width / DIMENSION, height / DIMENSION)

    nz += 0.0005
  }
}
