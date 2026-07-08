class Particle extends Firework{
  PVector vel;
  Particle(float tempX, float tempY, PVector tempVel, float tempSize){
    super(tempX, tempY, tempSize);
    vel = tempVel;
  }
  
  void render(){
    circle(pos.x, pos.y, size);
  }
  
  void update(){
    vel.add(gravity);
    pos.add(vel);
  }
}
