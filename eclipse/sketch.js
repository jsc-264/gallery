let sun

function setup() {
    createCanvas(800, 600);
    sun = new Body(width/2, height/2)
}

function draw() {
    background(220);
    sun.render()
}

class Body{
    constructor(x, y){
        this.pos = createVector(x, y)
        this.vel = createVector(1, 0)
        this.angle = 0.1
        this.vel.rotate(this.angle)

        this.r = 100
    }

    render(){
        circle(this.pos.x, this.pos.y, this.r)
    }
}