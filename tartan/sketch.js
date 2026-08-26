let palette
let maxLines = 20

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

    let data = {}
    let dir = random(["h", "v"])
    if (dir == "v"){
        data.x = random(width)
        data.y = 0
        data.w = random(10, 40)
        data.h = height
    } else if (dir == "h"){
        data.x = 0
        data.y = random(height)
        data.w = width
        data.h = random(10, 40)
    }
    data.col = random(palette.lines)

    lines.push(data)

    if (lines.length > maxLines){
        lines.shift()
    }

    if (lines.length > 0) {
        drawLines()
    }
    // noLoop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
