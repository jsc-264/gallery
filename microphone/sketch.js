let vis

function setup() {
  getAudioContext().suspend();
  createCanvas(windowWidth, windowHeight);

  vis = new AudioVisualiser()
  vis.startListening()
}

function draw() {
  background(220);
  vis.update()
}

function mousePressed(){
  userStartAudio()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
