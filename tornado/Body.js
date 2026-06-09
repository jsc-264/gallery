class Body{
    constructor(r, theta, d){
        this.d = d

        this.r = r
        this.theta = theta

        this.cart(this.r, this.theta)
    }

    cart(r, t){
        this.x = r * cos(t)
        this.y = r * sin(t)
    }

    render(){
        circle(this.x, this.y, this.d)
    }

    update(){
        this.theta += 0.1
        this.cart(this.r, this.theta) 
    }
}