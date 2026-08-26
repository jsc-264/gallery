let palette
let maxLines = 100

let lines = []

function drawLines() {
    for (let line of lines) {
        fill(line.col)
        rect(line.x, line.y, line.w, line.h)
    }
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

    lines.push({
        col: random(palette.lines),
        x: width/2,
        y: 0,
        w: 10,
        h: height
    })

    if (lines.length > 0) {
        drawLines()
    }
    noLoop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
