PVector gravity;

Firework f;

void setup(){
  size(800, 600);
  gravity = new PVector(0, 0.5);
  f = new Firework(random(width), 10);
}

void draw(){
  background(0);
  f.render();
  f.update();
  
  if (f.startedFalling()){
    print("falling");
  }
}
