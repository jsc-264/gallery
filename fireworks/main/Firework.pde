class Firework{
  PVector pos;
  PVector vel;
  PVector acc;
  float size;
  
  Firework(float tempX, float tempY, float tempSize){
    pos = new PVector(tempX, tempY);
    size = tempSize;
    
    vel = new PVector(0, 1);
    acc = new PVector(0, 0);
  }
  
  void render(){
    circle(pos.x, pos.y, size);
  }
  
  void update(){
    vel.add(acc);
    pos.add(vel);
  }
  
}
