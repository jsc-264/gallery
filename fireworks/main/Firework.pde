class Firework{
  PVector pos;
  PVector vel;
  PVector acc;
  float size;
  int numParticles = 5;
  ArrayList<Particle> particles = new ArrayList<Particle>();
  boolean exploded = false;
  color col;
  
  Firework(float tempX, float tempY, float tempSize){
    pos = new PVector(tempX, tempY);
    size = tempSize;
    
    vel = new PVector(0, random(-20, -10));
     
    float hue = map(pos.x, 0, width, 180, 330);
    col = color(hue, 100, 100);
  }
  
  void render(){
    if (particles.size() == 0){
      fill(col);
      circle(pos.x, pos.y, size);
      return;
    }
    
    for (Particle part : particles){
      part.render();
    }
  }
  
  void update(){
    vel.add(gravity);
    pos.add(vel);

    for (int i = particles.size() - 1; i >= 0; i--) {
      Particle part = particles.get(i);
      part.update();
    }
  }
  
  boolean startedFalling(){
    return vel.y >= 0;
  }
  
  void explode(){
    if (!exploded){
      for (int i = 0; i < numFireworks; i++){
        PVector v = PVector.random2D().mult(random(2, 8));
        particles.add(new Particle(pos.x, pos.y, v, 5, col));
      }
    }
    
    exploded = true;
  }
  
  boolean hitGround(){
    return pos.y > height + size;  
  }
  
  void reset(){
    pos = new PVector(random(width), height);
    vel = new PVector(0, random(-25, -15));
    float hue = map(pos.x, 0, width, 180, 330);
    col = color(hue, 100, 100);
    particles.clear();
    exploded = false;
  }
  
}
