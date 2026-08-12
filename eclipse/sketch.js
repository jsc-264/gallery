let sun, moon

function setup() {
    createCanvas(800, 600);
    sun = new Body(width / 2, height / 2, false)
    moon = new Body(100, 100, true)
}

function draw() {
    background(220);
    sun.render()

    moon.update()
    moon.render()
}

class Body {
    constructor(x, y, moving) {
        this.pos = createVector(x, y)
        this.moving = moving

        if (this.moving) {
            this.vel = createVector(5, 0)
            this.angle = 0.05
            this.vel.rotate(this.angle)
        }

        this.r = 100
    }

    render() {
        circle(this.pos.x, this.pos.y, this.r)
    }

    update() {
        if (this.moving) {
            if (this.pos.x > width + this.r) {
                this.pos.x = -this.r
                this.pos.y += this.r / 4
            }
            this.pos.add(this.vel)
        }
    }
}