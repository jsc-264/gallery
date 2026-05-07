class Particle {
    constructor(x, y, target) {
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D()
        this.target = target
    }

    render(){
        push()
        circle(this.pos.x, this.pos.y, 10)
        pop()
    }
}