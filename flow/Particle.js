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
        this.pos.x = constrain(this.pos.x, 0, width)
        this.pos.y = constrain(this.pos.y, 0, height)
    }

    setVel(field) {
        const row = floor(this.pos.x / FIELD_DIM)
        const col = floor(this.pos.y / FIELD_DIM)

        this.vel = field[row][col]
    }

}