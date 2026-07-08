PVector gravity;

int numFireworks = 10;
ArrayList<Firework> fireworks = new ArrayList<Firework>();


void setup(){
  size(800, 600);
  gravity = new PVector(0, 0.5);
  
  for (int i = 0; i < numFireworks; i++){
    fireworks.add(new Firework(random(width), 10));
  }
}

void draw(){
  background(0);
  for (int i = fireworks.size() - 1; i >= 0; i--) {
    Firework f = fireworks.get(i);
    f.render();
    f.update();

    if (f.startedFalling()) {
      fireworks.remove(i);
    }
  }
}
