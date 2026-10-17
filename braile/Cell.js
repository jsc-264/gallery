function r10(){
    return random([1, 0])
}

class Cell {
    constructor(x, y, w, h) {
        this.dots = [
            [r10(), r10()],
            [r10(), r10()],
            [r10(), r10()]
        ]


        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    render() {
        push()
        translate(this.x, this.y)
        ellipseMode(CORNER)
        for (let j = 0; j < this.dots.length; j++) {
            for (let i = 0; i < this.dots[j].length; i++) {
                if (this.dots[j][i] == 1) {
                    const x = this.w / this.dots[j].length * i
                    const y = this.h / this.dots.length * j
                    circle(x, y, 8)
                }
            }
        }
        pop()
    }
}