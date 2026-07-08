class Firework{
  PVector pos;
  PVector vel;
  PVector acc;
  float size;
  int numParticles = 5;
  ArrayList<Particle> particles;
  
  Firework(float tempX, float tempY, float tempSize){
    pos = new PVector(tempX, tempY);
    size = tempSize;
    
    vel = new PVector(0, random(-25, -20));
  }
  
  void render(){
    circle(pos.x, pos.y, size);
  }
  
  void update(){
    vel.add(gravity);
    pos.add(vel);
  }
  
  boolean startedFalling(){
    return vel.y >= 0;
  }
  
  void explode(){
    for (int i = 0; i < numFireworks; i++){
      PVector v = PVector.random2D();
      particles.add(new Particle(pos.x, pos.y, v, 5));
    }
  }
  
}
