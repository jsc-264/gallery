class Particle {
    constructor(x, y, target) {
        this.diam = 15
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D().setMag(1)
        this.target = target
    }

    render(){
        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading())

        line(0, 0, this.diam, 0)
        triangle(0, -this.diam/2, this.diam, 0, 0, this.diam/2)
        pop()
    }

    update(){
        this.pos.add(this.vel)

        if (this.pos.x < -this.diam) this.pos.x = width+this.diam
        if (this.pos.x > width+this.diam) this.pos.x = -this.diam
        if (this.pos.y < -this.diam) this.pos.y = height + this.diam
        if (this.pos.y > height + this.diam) this.pos.y = -this.diam
    }
}