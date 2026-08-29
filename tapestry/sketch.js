const DIMW = 160
const DIMH = 90
let w, h
let coords = []
let z = 0

let xom, yom

function init() {
    xom = random(10, 30)
    yom = random(10, 30)
    noiseSeed(random(100))
}

function setup() {
    createCanvas(windowWidth + 10, windowHeight + 10);
    colorMode(HSB)
    w = width / DIMW
    h = height / DIMH

    init()

    for (let j = 0; j < DIMH; j++) {
        let row = []
        let isoRow = []
        for (let i = 0; i < DIMW; i++) {
            const x = w * i + w / 4
            const y = h * j + h / 4


            row.push({ x: x, y: y })
            isoRow.push({ x: x + w / 2, y: y + h / 2 })
        }
        coords.push(row)
        coords.push(isoRow)
    }
}

function draw() {
    background(0, 0, 0);

    for (let i = 0; i < coords.length; i++) {
        for (let j = 0; j < coords[i].length; j++) {
            let { x, y } = coords[i][j]

            const div = 200
            let n = noise(x / div, y / div, z)
            let offX = map(n, 0, 1, -w * xom, w * xom)
            let offY = map(n, 0, 1, -h * yom, h * yom)

            x += offX
            y += offY

            let hu = map(n, .2, .8, 180, 300)
            let sa = map(n, .2, .8, 100, 30)
            let br = map(n, .2, .8, 75, 100)
            let col = color(hu, sa, br, 0.7)

            let sw = map(n, .2, .8, 3, 6)
            strokeWeight(sw)

            stroke(col)
            point(x, y)
        }
    }
}

function saveFile() {
    saveCanvas("tapestry" + Date.now() + ".png")
    alert("saved")
    init()
}

function keyPressed() {
    if (key == " ") init()
    if (key == "s") saveFile()
}

