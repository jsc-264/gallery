class Particle {
    constructor(x, y, r) {
        this.pos = createVector(x, y)
        this.r = r
        this.path = []
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
    }

    render() {
        circle(this.pos.x, this.pos.y, this.r * 2)
    }

    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    force(vec){
        this.acc.add(vec)
    }
}