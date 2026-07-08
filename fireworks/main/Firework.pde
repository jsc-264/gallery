class Firework{
  PVector pos;
  PVector vel;
  PVector acc;
  float size;
  
  Firework(float tempX, float tempSize){
    pos = new PVector(tempX, height);
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
  
}
