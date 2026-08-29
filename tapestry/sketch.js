const DIM = 10
let w
let coords = []

function setup() {
    createCanvas(500, 500);
    w = width / DIM

    background(220)
    for (let j = 0; j < DIM; j++) {
        let row = []
        for (let i = 0; i < DIM; i++) {
            const x = w * i
            const y = w * j


            row.push({ x: x, y: y })
            row.push({ x: x+w/2, y: y+w/2 })
        }
        coords.push(row)
    }
}

function draw() {
    background(220);

    for (let i = 0; i < coords.length; i++) {
        for (let j = 0; j < coords[i].length; j++) {
            point(coords[i][j].x, coords[i][j].y)
        }
    }

    noLoop()
}
