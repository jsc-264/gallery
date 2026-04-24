const DIMENSION = 30
const colours = []

function setup() {
  createCanvas(400, 400);
  colorMode(HSL)
  noStroke()
  background(0, 0, 90);

  for (let i = 0; i < DIMENSION; i++){
    colours.push(new Array(DIMENSION))
  }
  print(colours)
}

function draw() {
  for (let j = 0; j < DIMENSION; j++) {
    for (let i = 0; i < DIMENSION; i++) {
      const n = noise(i / 10, j / 10)
      colours[x][y] = n
    }
  }

}
