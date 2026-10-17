const DIM = 20
let w
let para = []

function setup() {
    createCanvas(windowWidth * .9, windowWidth * .9);
    w = width / DIM

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = w * i
            const y = w * j
            para.push(new Cell(x, y, w, w))
        }
    }
    noStroke()
    fill(30, 200, 100)
}

function draw() {
    background(50);
    for (let cell of para) {
        cell.render()
        if (random() < .01) {
            cell.update()
        }
    }

}