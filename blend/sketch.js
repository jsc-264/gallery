function static(intensity) {
  loadPixels()

  for (let i = 0; i < pixels.length; i++) {
    pixels[i] += random(-intensity, intensity)
  }

  updatePixels()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  frameRate(0.5)
  colorMode(HSB)
}

function draw() {
  background(200)

  const hues = []
  const firstHue = random(360)

  for (let i = -10; i < 10; i++) {
    hues.push((firstHue + (i * 7) + 360) % 360)
  }


  for (let i = 0; i < 10; i++) {
    push()
    fill(random(hues), 100, 50)
    noStroke()

    const w = random(200, width)
    const h = random(200, height)
    const x = random(width)
    const y = random(height)

    if (random() < 0.5) {
      rect(x, y, w, h)
    } else {
      ellipse(x, y, w, h)
    }
    pop()
  }

  filter("blur", 50)
  static(random(20, 40))
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}