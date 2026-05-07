class Particle {
    constructor(x, y, target) {
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D().setMag(random(1, 4))
        this.target = target
        this.diam = 10
    }

    render(){
        push()
        circle(this.pos.x, this.pos.y, this.diam)
        pop()
    }

    update(){
        this.pos.add(this.vel)

        if (this.pos.x < -this.diam) this.pos.x = width-this.diam
        if (this.pos.x > width+this.diam) this.pos.x = -this.diam
        if (this.pos.y < -this.diam) this.pos.y = height - this.diam
        if (this.pos.y > height + this.diam) this.pos.y = -this.diam
    }
}