Firework f;

void setup(){
  size(800, 600);
  f = new Firework(random(width), random(height), 20);
}

void draw(){
  background(0);
  f.render();
}
