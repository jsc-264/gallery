class Body{
    constructor(x, y, r){
        this.pos = createVector(x, y)
        this.r = r
    }

    render(){
        circle(this.pos.x, this.pos.y, this.r)
    }
}