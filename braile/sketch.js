const DIM = 10
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
}

function draw() {
    background(220);
    for (let cell of para) {
        cell.render()
    }

}