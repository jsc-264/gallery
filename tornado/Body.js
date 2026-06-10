class Body {
    constructor(diameter, angle, parentTornado) {
        this.diameter = diameter
        this.angle = angle

        this.parent = parentTornado

        this.distance = map(this.diameter, MIN_BODY_DIAMETER, MAX_BODY_DIAMETER, this.parent.eyeRadius-10, this.parent.totalRadius)

        this.minSpeed = 0.01
    }

    calcSpeed() {
        if (this.distance < this.parent.eyeRadius) {
            this.speed = this.minSpeed
        } else {
            this.speed = map(this.distance, this.parent.eyeRadius, this.parent.totalRadius, 0.3, 0)
        }
    }

    render() {
        const [x, y] = cart(this.distance, this.angle)
        circle(x, y, this.diameter)
    }

    update() {
        this.calcSpeed()
        this.angle += this.speed
        this.distance += random(-1, 1)
    }
}