const DIM = 100
let w
let coords = []
let z = 0

let xom, yom

function init(){
    xom = random(10, 15)
    yom = random(10, 15)
    noiseSeed(random(100))
}

function setup() {
    let mdim = min(windowWidth, windowHeight)-10
    createCanvas(mdim, mdim);
    colorMode(HSB)
    w = width / DIM

    init()

    for (let j = 0; j < DIM; j++) {
        let row = []
        let isoRow = []
        for (let i = 0; i < DIM; i++) {
            const x = w * i + w / 4
            const y = w * j + w / 4


            row.push({ x: x, y: y })
            isoRow.push({ x: x + w / 2, y: y + w / 2 })
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
            let offY = map(n, 0, 1, -w * yom, w * yom)

            x += offX
            y += offY

            let hu = map(n, .2, .8, 180, 360)
            let sa = map(n, .2, .8, 75, 50)
            let br = map(n, .2, .8, 50, 100)
            let col = color(hu, sa, br)

            let sw = map(n, .2, .8, 2, 4)
            strokeWeight(sw)

            stroke(col)
            point(x, y)
        }
    }
}

function saveFile(){
    saveCanvas("tapestry" + Date.now() + ".png")
    alert("saved")
    init()
}

function keyPressed(){
    if (key == " ") init()
    if (key == "s") saveFile()
}

