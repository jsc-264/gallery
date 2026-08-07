class Slime {
    constructor(x, y){
        this.x = x
        this.y = y
        this.w = 100
        this.h = 100
    }

    render(){
        rect(this.x, this.y, this.w, this.h)
    }
}