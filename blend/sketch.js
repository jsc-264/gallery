function static(intensity = 20) {
  loadPixels()

  for (let i = 0; i < pixels.length; i++) {
    pixels[i] += random(-intensity, intensity)
  }

  updatePixels()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(200)

  const start = millis()

  for (let i = 0; i < 10; i++) {
    push()
    fill(
      random(255),
      random(255),
      random(255)
    )
    noStroke()

    if (random() < 0.5) {
      rect(
        random(width),
        random(height),
        random(200, width),
        random(200, height)
      )
    } else {
      ellipse(
        random(width),
        random(height),
        random(200, width / 2),
        random(200, height / 2)
      )
    }
    drawingContext.filter = "blur(8px)"
    pop()
  }

  static(intensity = random(10, 50))

  const end = millis()

  print(end - start)
  noLoop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}