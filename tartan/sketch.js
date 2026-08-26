let palette
let maxVertLines, maxHorzLines

let currentVertLines = []
let currentHorzLines = []


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

    maxVertLines = width / 100
    maxVorzLines = height / 100

    noStroke()
}

function draw() {
    background(palette.bg);

    while (currentVertLines.length < maxVertLines) {
        const lineWidth = random(10, width / 4)
        const lineX = random(0, width - w)
        const col = random(palette.lines)

        let crossing = false
        for (let i = 0; i < currentVertLines.length; i++) {
            const lineData = currentVertLines[i]
            if (!(lineX < lineData.x - lineWidth && lineX > lineData.x + lineData.w)){
                crossing = true
            }
        }

        if (!crossing){
            currentVertLines.push({x: lineX, w: lineWidth, col: col})
        }
    }


    noLoop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
