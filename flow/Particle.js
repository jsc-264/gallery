class Particle {
    constructor(x, y, r) {
        this.pos = createVector(x, y)
        this.r = r
        this.path = []
        this.vel = createVector(0, 0)
    }

    render() {
        circle(this.pos.x, this.pos.y, this.r * 2)
    }

    update() {
        this.pos.add(this.vel)

        if (this.pos.x < 0) this.pos.x = width
        if (this.pos.x > width) this.pos.x = 0
        if (this.pos.y < 0) this.pos.y = height
        if (this.pos.y > height) this.pos.y = 0
    }

    setVel(field) {
        const i = floor((this.pos.x / w) % FIELD_DIM)
        const j = floor((this.pos.y / w) % FIELD_DIM)
        const angle = field[i][j]
        const vec = p5.Vector.fromAngle(angle).setMag(1)
        this.vel.add(vec).setMag(2)
    }

}