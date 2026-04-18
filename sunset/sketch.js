const DIMENSION = 10
let tileWidth
let tiles = []

let sunsetStartColour, sunsetEndColour
let skyDayColour, skyNightColour

let noiseX, noiseY, noiseZ
const noiseInc = 0.25

function setup() {
  createCanvas(windowWidth / 2.5, windowWidth / 2.5);
  tileWidth = width / DIMENSION

  sunsetStartColour = color(36, 4, 125)
  sunsetEndColour = color(214, 32, 78)

  skyDayColour = color(135, 206, 235)
  skyNightColour = color(88, 72, 128)

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
  const secondsOfDay = (hour() * 3600) + (minute() * 60) + second()

  let bgColour
  if (secondsOfDay < 43200) {
    const t = map(secondsOfDay, 0, 43200, 0, 1)
    bgColour = lerpColor(skyNightColour, skyDayColour, t)
  } else {
    const t = map(secondsOfDay, 43200, 86400, 0, 1)
    bgColour = lerpColor(skyDayColour, skyNightColour, t)
  }


  background(bgColour);
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
  noiseZ += noiseInc / 10
}
