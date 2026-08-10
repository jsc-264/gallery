const DIM = 50
let img
let res
let z = 0

function colFromImg(x, y) {
    const index = ((x%width) + (y%height) * width) * 4

    const r = img.pixels[index]
    const g = img.pixels[index + 1]
    const b = img.pixels[index + 2]
    const a = img.pixels[index + 3]

    return color(r, g, b, a)
}

async function setup() {
    createCanvas(500, 500);
    res = width / DIM
    img = await loadImage("/assets/northern.jpg")
    img.resize(width, height)
    noStroke()
}

function draw() {
    background(220);
    // image(img, 0, 0, width, height)

    img.loadPixels()
    for (let j = 0; j < img.height; j += res) {
        for (let i = 0; i < img.width; i += res) {
            const outCol = colFromImg(i, j)

            fill(outCol)
            rect(i, j, res)

            if (noise(i, j) < 0.5) {
                const n = noise(i / (DIM * 100), j / (DIM * 100), z)
                const diff = floor(n * DIM / 4)
                const inCol = colFromImg(i + (res * diff), j + (res * diff))

                fill(inCol)
                rect(i + res / 4, j + res / 4, res / 2)
            }
        }
    }
    img.updatePixels()

    z+=0.1
}
