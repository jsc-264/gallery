class Particle {
    constructor(x, y, r) {
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.maxSpeed = 3
        this.r = r
    }

    render() {
        strokeWeight(this.r)
        point(this.pos.x, this.pos.y)
    }

    update() {
        this.vel.add(this.acc)
        this.vel.limit(this.maxSpeed)
        this.pos.add(this.vel)
        this.acc.mult(0)

        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r
        }
        if (this.pos.x < -this.r) {
            this.pos.x = width + this.r
        }

        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r
        }

        if (this.pos.y < -this.r) {
            this.pos.y = height + this.r
        }

    }

    apply(vec) {
        this.acc.add(vec)
    }

    follow(field) {
        const x = floor(this.pos.x / res)
        const y = floor(this.pos.y / res)
        const index = x + y * DIM
        const force = field[index]
        this.apply(force)
    }
}