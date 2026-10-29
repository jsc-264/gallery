const bright = 100
let lines = 3

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);

    for (let h = lines; h < height; h += height / lines) {
        let r = map(h, 0, height, 0, 205)
        let g = map(h, 0, height, 50, 150)
        fill(r, g, 0)
        beginShape()
        for (let x = 0; x < width; x++) {
            let n = noise(((x + frameCount) / 100) + h*1000)
            let range = map(h, 0, height, 20, 200)
            let y = map(n, 0, 1, h + 100 - range, h + 100 + range)
            vertex(x, y)
        }

        vertex(width, height)
        vertex(0, height)
        endShape(CLOSE)
    }
}
