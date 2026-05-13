let vis
let running = false
let avgDim

function setup() {
  getAudioContext().suspend();
  createCanvas(windowWidth, windowHeight);

  vis = new AudioVisualiser()
  vis.startListening()
}

function draw() {
  background(50);
  avgDim = (width + height) / 2
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
