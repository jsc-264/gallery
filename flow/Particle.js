class Particle {
    constructor(x, y, r) {
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.r = r
    }

    render() {
        circle(this.pos.x, this.pos.y, this.r * 2)
    }

    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)

        if (this.pos.x > width) this.pos.x = 0
        if (this.pos.x < 0) this.pos.x = width
        if (this.pos.y > height) this.pos.y = 0
        if (this.pos.y < 0) this.pos.y = height

    }

    apply(vec){
        this.acc.add(vec)
    }

    follow(field){
        const x = floor(this.pos.x / res)
        const y = floor(this.pos.y / res)
        const index = x + y * DIM
        const force = field[index]
        this.apply(force)
    }
}