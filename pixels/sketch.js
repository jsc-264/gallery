let DIM
let img
let res
let z = 0

let shiftX, shiftY

function minDim() {
    return min(windowWidth, windowHeight)
}

function colFromImg(x, y) {
    const newX = (x + width) % width
    const newY = (y + height) % height
    const index = (newX + newY * width) * 4

    const r = img.pixels[index]
    const g = img.pixels[index + 1]
    const b = img.pixels[index + 2]
    const a = img.pixels[index + 3]

    return color(r, g, b, a)
}

async function setup() {
    const md = minDim()
    createCanvas(md, md);
    DIM = md / 4

    let picked = false
    while (!picked){
        shiftX = random(-20, 20)
        shiftY = random(-20, 20)

        if (shiftX != 0 && shiftY != 0){
            picked = true
        }
    }

    res = width / DIM
    img = await loadImage("./assets/northern.jpg")
    img.resize(width, height)
    noStroke()
}

function draw() {
    background(220);
    // image(img, 0, 0, width, height)

    img.loadPixels()
    for (let j = 0; j < img.height; j += res) {
        for (let i = 0; i < img.width; i += res) {
            let col = colFromImg(i, j)

            if (noise(i / DIM, j / DIM, z) < 0.5) {
                const n = noise(i / (DIM * 10), j / (DIM * 10), z)
                const diffX = floor(n * DIM/shiftX)
                const diffY = floor(n * DIM /shiftY)
                col = colFromImg(i + (res * diffX), j + (res * diffY))
            }
            fill(col)
            rect(i, j, res)
        }
    }
    img.updatePixels()

    z += 0.005
}
