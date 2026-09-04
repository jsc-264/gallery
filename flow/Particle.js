class Particle {
    constructor(x, y, r) {
        this.pos = createVector(x, y)
        this.r = r
        this.path = []
        this.vel = createVector(0, 0)
    }

    render() {
        circle(this.pos.x, this.pos.y, this.r)
    }

    update() {
        this.pos.add(this.vel)
    }

}