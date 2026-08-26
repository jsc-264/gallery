let palette
let maxLines = 20

let lines = []

let minSize = 5
let maxSize = 50

let mouseDist

let center

function drawLines() {
    for (let line of lines) {
        fill(line.col)
        rect(line.x, line.y, line.w, line.h)
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    mouseDist = max(width, height)/1.5
    center = {
        x: width / 2,
        y: height / 2
    }
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
    if (dir == "v") {
        data.x = random(center.x - mouseDist / 2, center.x + mouseDist / 2)
        data.y = 0
        data.w = random(minSize, maxSize)
        data.h = height
    } else if (dir == "h") {
        data.x = 0
        data.y = random(center.y - mouseDist / 2, center.y + mouseDist / 2)
        data.w = width
        data.h = random(minSize, maxSize)
    }
    data.col = random(palette.lines)

    lines.push(data)

    if (lines.length > maxLines) {
        lines.shift()
    }

    if (lines.length > 0) {
        drawLines()
    }
    // noLoop()
}

function mouseDragged() {
    center = {
        x: mouseX,
        y: mouseY
    }
}

function touchStarted() {
    for (let touch of touches) {
        center = {
            x: touch.x,
            y: touch.y
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    center = {
        x: width / 2,
        y: height / 2
    }
}
