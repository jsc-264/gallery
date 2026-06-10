class Body {
    constructor(diameter, angle, parentTornado) {
        this.diameter = diameter
        this.angle = angle

        this.parent = parentTornado
        
        this.distance = map(this.diameter, MIN_BODY_DIAMETER, MAX_BODY_DIAMETER, this.parent.eyeRadius-10, this.parent.totalRadius)

        this.minSpeed = 0
        this.maxSpeed = 0.3 * this.parent.direction

        this.jitter = 1

        this.calcCart()

        this.path = []
        this.pathMax = 10
    }

    calcSpeed() {
        if (this.distance < this.parent.eyeRadius) {
            this.speed = this.minSpeed
        } else {
            this.speed = map(this.distance, this.parent.eyeRadius, this.parent.totalRadius, this.maxSpeed, this.minSpeed)
        }

        this.speed = abs(this.speed) * this.parent.direction
    }

    render() {
        const hu = map(this.speed, this.minSpeed, this.maxSpeed, 150, 0)
        const col = color(hu, 100, 75)
        const weight = map(this.speed, this.minSpeed, this.maxSpeed, 5, 1)
        
        strokeWeight(weight)
        stroke(col)
        noFill()
        beginShape()
        for (let p of this.path){
            vertex(p.x, p.y)
        }
        endShape()
    }

    calcCart(){
        const [x, y] = cart(this.distance, this.angle)
        this.x = x
        this.y = y
    }

    update() {
        this.calcSpeed()
        this.jitter = map(this.speed, this.minSpeed, this.maxSpeed, 2, 5)
        
        this.angle += this.speed
        this.distance += random(-this.jitter, this.jitter)

        this.calcCart()

        this.path.push({x: this.x, y: this.y})

        if (this.path.length > this.pathMax){
            this.path.splice(0, 1)
        }
    }
}