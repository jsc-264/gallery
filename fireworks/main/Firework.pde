class Firework{
  PVector pos;
  PVector vel;
  PVector acc;
  float size;
  int numParticles = 5;
  ArrayList<Particle> particles = new ArrayList<Particle>();
  boolean exploded = false;
  
  Firework(float tempX, float tempY, float tempSize){
    pos = new PVector(tempX, tempY);
    size = tempSize;
    
    vel = new PVector(0, random(-25, -15));
  }
  
  void render(){
    if (particles.size() == 0){
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
        PVector v = PVector.random2D().mult(random(1.5, 4));
        particles.add(new Particle(pos.x, pos.y, v, 5));
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
    particles.clear();
    exploded = false;
  }
  
}
