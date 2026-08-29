const DIM = 50
let w
let coords = []
let z = 0

let xom, yom

function setup() {
    createCanvas(500, 500);
    colorMode(HSB)
    w = width / DIM

    xom = random(1, 10)
    yom = random(1, 10)

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

    strokeWeight(4)
}

function draw() {
    background(90, 50, 20);

    for (let i = 0; i < coords.length; i++) {
        for (let j = 0; j < coords[i].length; j++) {
            let { x, y } = coords[i][j]
            let n = noise(x / 70, y / 70, z)
            let offX = map(n, 0, 1, -w * xom, w * xom)
            let offY = map(n, 0, 1, -w * yom, w * yom)

            let hu = map(n, .2, .8, 20, 150)
            let sa = map(n, .2, .8, 75, 50)
            let br = map(n, .2, .8, 50, 100)
            let col = color(hu, sa, br)

            stroke(col)
            point(x + offX, y + offY)
        }
    }
}
