class Flower {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }

    show() {
        circle(this.x, this.y, this.r * 2)
    }

    grow() {
        if (this.x >= width - this.r) return
        if (this.x <= this.r) return
        if (this.y >= height - this.r) return
        if (this.y <= this.r) return

        this.r++
    }
}