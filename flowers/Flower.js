class Flower {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }

    show() {
        circle(this.x, this.y, this.r * 2)
    }

    onEdges() {
        if (this.x >= width - this.r) return true
        if (this.x <= this.r) return true
        if (this.y >= height - this.r) return true
        if (this.y <= this.r) return true

        return false
    }

    grow() {
        this.r++
    }
}