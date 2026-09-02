class Flower {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }

    render() {
        circle(this.x, this.y, this.r * 2)
    }
}