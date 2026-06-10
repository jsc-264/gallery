class Body {
    constructor(distance, angle, size) {
        this.size = size

        this.distance = distance
        this.angle = angle

        this.minSpeed = 0.01
        this.calcSpeed()

        cart(this.distance, this.angle)

        this.eyeR = 50
    }

    calcSpeed() {
        if (this.distance < this.eyeR) {
            this.speed = this.minSpeed
        } else {
            this.speed = map(this.distance, this.eyeR, width / 2, 0.3, 0)
        }
    }

    render() {
        const [x, y] = cart(this.distance, this.angle)
        circle(x, y, this.size)
    }

    update() {
        this.calcSpeed()
        this.angle += this.speed
        this.distance += random(-1, 1)
    }
}