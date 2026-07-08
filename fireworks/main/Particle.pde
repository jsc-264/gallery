class Particle extends Firework{
  PVector vel;
  color col;
  Particle(float tempX, float tempY, PVector tempVel, float tempSize, color tempCol){
    super(tempX, tempY, tempSize);
    vel = tempVel;
    col = tempCol;
  }
  
  void render(){
    fill(col);
    circle(pos.x, pos.y, size);
  }
  
  void update(){
    vel.add(gravity);
    pos.add(vel);
  }
}
