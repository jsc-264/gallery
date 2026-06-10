class Body {
    constructor(distance, angle, size) {
        this.size = size

        this.distance = distance
        this.angle = angle

        this.minSpeed = 0.01

        cart(this.distance, this.angle)

    }

    calcSpeed(tornadoRadius, eyeRadius) {
        if (this.distance < eyeRadius) {
            this.speed = this.minSpeed
        } else {
            this.speed = map(this.distance, eyeRadius, tornadoRadius, 0.3, 0)
        }
    }

    render() {
        const [x, y] = cart(this.distance, this.angle)
        circle(x, y, this.size)
    }

    update() {
        this.angle += this.speed
        this.distance += random(-1, 1)
    }
}