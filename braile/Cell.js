class Cell {
    constructor(x, y, w, h) {
        this.dots = [
            [1, 0],
            [0, 1],
            [1, 0]
        ]

        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.res = gcd(w, h)
    }

    render() {
        push()
        translate(this.x, this.y)
        ellipseMode(CORNER)
        for (let j = 0; j < this.dots.length; j++) {
            for (let i = 0; i < this.dots[j].length; i++) {
                if (this.dots[j][i] == 1) {
                    const x = this.res * i
                    const y = this.res * j
                    circle(x, y, this.res / 1.5)
                }
            }
        }
        pop()
    }
}