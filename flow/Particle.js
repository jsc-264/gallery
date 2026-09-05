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
        this.vel.limit(4)
        this.pos.add(this.vel)
        this.acc.mult(0)

        if (this.pos.x < 0) this.pos.x = width
        if (this.pos.x > width) this.pos.x = 0
        if (this.pos.y < 0) this.pos.y = height
        if (this.pos.y > height) this.pos.y = 0
    }

    push(vec){
        this.acc.add(vec)
    }

    setVel(field) {
        const i = floor((this.pos.x / w) % FIELD_DIM)
        const j = floor((this.pos.y / w) % FIELD_DIM)
        const angle = field[i][j]
        const vec = p5.Vector.fromAngle(angle).setMag(10)
        this.push(vec)
    }

}