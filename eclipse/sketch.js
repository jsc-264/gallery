let sun, moon

let brightCol, darkCol

function BodyDistance(body1, body2) {
    return dist(body1.pos.x, body1.pos.y, body2.pos.x, body2.pos.y)
}

function setup() {
    createCanvas(800, 600);
    brightCol = color(163, 196, 255)
    darkCol = color(5, 0, 37)

    sun = new Body(width / 2, height / 2, false)
    moon = new Body(100, 100, true)
}

function draw() {
    const d = BodyDistance(sun, moon)
    const darkness = map(d, 0, 500, 1, 0)
    print(d, darkness)
    const col = lerpColor(brightCol, darkCol, darkness)
    background(col);
    sun.render()

    moon.update()
    moon.render()
}

class Body {
    constructor(x, y, moving) {
        this.pos = createVector(x, y)
        this.moving = moving

        if (this.moving) {
            this.vel = createVector(10, 0)
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

            if (this.pos.y > height + this.r){
                this.pos.y = -this.r
            }
            this.pos.add(this.vel)
        }
    }
}