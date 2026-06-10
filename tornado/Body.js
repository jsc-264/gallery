class Body {
    constructor(r, theta, d) {
        this.d = d

        this.r = r
        this.theta = theta

        this.minSpeed = 0.01
        this.calcSpeed()

        cart(this.r, this.theta)

        this.eyeR = 50
    }

    calcSpeed() {
        if (this.r < this.eyeR) {
            this.speed = this.minSpeed
        } else {
            this.speed = map(this.r, this.eyeR, width / 2, 0.3, 0)
        }
    }

    render() {
        const [x, y] = cart(this.r, this.theta)
        circle(x, y, this.d)
    }

    update() {
        this.calcSpeed()
        this.theta += this.speed
        this.r += random(-1, 1)
    }
}