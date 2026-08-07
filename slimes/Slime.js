class Slime {
    constructor(x, y){
        this.x = x
        this.y = y
        [this.w, this.h] = this.grow()
    }

    render(){
        rect(this.x, this.y, this.w, this.h)
    }

    grow(){
        let pidX = map(this.x, 0, width, 0, PI)
        let pidY = map(this.y, 0, height, 0, PI)
        let newW = map(sin(pidX), 0, 1, 10, width/2)
        let newH = map(sin(pidY), 0, 1, 10, height/2)

        return [newW, newH]
    }
}