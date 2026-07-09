PVector gravity;

int numFireworks = 30;
ArrayList<Firework> fireworks = new ArrayList<Firework>();


void setup(){
  size(800, 600);
  colorMode(HSB, 360, 100, 100);
  gravity = new PVector(0, 0.5);
    
  for (int i = 0; i < numFireworks; i++){
    fireworks.add(new Firework(random(width), random(height, height+50), 10));
  }
  
  noStroke();
}

void draw(){
  background(0, 0, 0);
  for (int i = fireworks.size() - 1; i >= 0; i--) {
    Firework f = fireworks.get(i);
    f.render();
    f.update();

    if (f.startedFalling()) {
      f.explode();
    }
    
    if (f.hitGround()){
      f.reset();
    }
  }  
}
