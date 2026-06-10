class Body {
    constructor(diameter, angle, parentTornado) {
        this.diameter = diameter
        this.angle = angle

        this.parent = parentTornado
        
        this.distance = map(this.diameter, MIN_BODY_DIAMETER, MAX_BODY_DIAMETER, this.parent.eyeRadius-10, this.parent.totalRadius)

        this.minSpeed = 0
        this.maxSpeed = 0.3

        this.jitter = 1

        this.calcCart()
    }

    calcSpeed() {
        if (this.distance < this.parent.eyeRadius) {
            this.speed = this.minSpeed
        } else {
            this.speed = map(this.distance, this.parent.eyeRadius, this.parent.totalRadius, this.maxSpeed, this.minSpeed)
        }
    }

    render() {
        const lerpAmt = map(this.speed, this.minSpeed, this.maxSpeed, 0, 1)
        const col = lerpColor(green, red, lerpAmt)
        fill(col)
        circle(this.x, this.y, this.diameter)
    }

    calcCart(){
        const [x, y] = cart(this.distance, this.angle)
        this.x = x
        this.y = y
    }

    update() {
        this.calcSpeed()
        this.jitter = map(this.speed, this.minSpeed, this.maxSpeed, 1, 2)
        
        this.angle += this.speed
        this.distance += random(-this.jitter, this.jitter)

        this.calcCart()
    }
}