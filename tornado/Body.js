class Body{
    constructor(r, theta, d){
        this.d = d

        this.r = r
        this.theta = theta

        this.speed = 0.1

        this.cart(this.r, this.theta)
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
        this.theta += this.speed
    }
}