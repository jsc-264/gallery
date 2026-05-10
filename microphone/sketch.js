let vis
let running = false

function setup() {
  getAudioContext().suspend();
  createCanvas(windowWidth, windowHeight);

  vis = new AudioVisualiser()
  vis.startListening()

  fill(87, 156, 93)
  stroke(87, 156, 93)
}

function draw() {
  background(230, 148, 235);
  if (running) {
    vis.update()
    vis.render()
  }
}

function mousePressed() {
  userStartAudio()
  running = true
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
