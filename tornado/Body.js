class Body{
    constructor(r, theta, d){
        this.d = d

        this.r = r
        this.theta = theta

        this.minSpeed = 0.01
        this.calcSpeed()

        this.cart(this.r, this.theta)

        this.eyeR = 50
    }

    calcSpeed(){
        if (this.r < this.eyeR){
            this.speed = this.minSpeed
        } else {
            this.speed = map(this.r, this.eyeR, width/2, 0.3, 0)
        }
    }

    cart(r, t){
        const x = r * cos(t)
        const y = r * sin(t)

        return [x, y]
    }

    render(){
        const [x, y] = this.cart(this.r, this.theta) 
        circle(x, y, this.d)
    }

    update(){
        this.calcSpeed()
        this.theta += this.speed
        this.r += this.speed > this.minSpeed ? random(-5, 5) : 1
    }
}