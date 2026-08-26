let palette
let maxVertLines, maxHorzLines

let currentVertLines = []
let currentHorzLines = []

const maxSize = 100

function touching(x1, w1, x2, w2) {
    return x1 > x2 - w1 && x1 < x2 + w2
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    palette = {
        bg: color("#F5DEB3"),
        lines: [
            color("#000080"),
            color("#006400"),
            color("#B22222"),
            color("#DAA520"),
        ]
    }
    noStroke()
}

function draw() {
    background(palette.bg);

    noLoop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
