class Body {
    constructor(diameter, angle, parentTornado) {
        this.diameter = diameter
        this.angle = angle

        this.parent = parentTornado

        this.distance = map(this.diameter, MIN_BODY_DIAMETER, MAX_BODY_DIAMETER, this.parent.eyeRadius-10, this.parent.totalRadius)

        this.minSpeed = 0
        this.maxSpeed = 0.2

        this.jitter = 1
    }

    calcSpeed() {
        if (this.distance < this.parent.eyeRadius) {
            this.speed = this.minSpeed
        } else {
            this.speed = map(this.distance, this.parent.eyeRadius, this.parent.totalRadius, this.maxSpeed, this.minSpeed)
        }

        this.jitter = map(this.speed, this.minSpeed, this.maxSpeed, 1, 2)
    }

    render() {
        const [x, y] = cart(this.distance, this.angle)
        circle(x, y, this.diameter)
    }

    update() {
        this.calcSpeed()
        this.angle += this.speed
        this.distance += random(-this.jitter, this.jitter)
    }
}