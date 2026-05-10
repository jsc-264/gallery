let mic

function setup() {
  getAudioContext().suspend();
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn()
  mic.start()
}

function draw() {
  background(220);
}

function mousePressed(){
  userStartAudio()
}
