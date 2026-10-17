let c

function gcd(a, b) {

    // Everything divides 0
    if (a == 0 || b == 0)
        return max(a, b);

    // Find Minimum of a and b
    let result = min(a, b);

    while (result > 0) {
        if (a % result === 0 && b % result === 0) {
            break;
        }
        result--;
    }

    // Return gcd of a and b
    return result;
}

function setup() {
    createCanvas(windowWidth * .9, windowHeight * .9);
    c = new Cell(width / 2, height / 2, 20, 30)
}

function draw() {
    background(220);
    c.render()
    noLoop()
}

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