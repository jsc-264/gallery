const DIM = 20
let w
let para = []

function setup() {
    createCanvas(min(windowWidth, windowHeight) * .9, min(windowWidth, windowHeight) * .9);
    colorMode(HSL)
    w = width / DIM

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = w * i
            const y = w * j
            para.push(new Cell(x, y, w, w))
        }
    }
    noStroke()
}

function draw() {
    background(20);
    for (let cell of para) {
        cell.render()
        if (random() < .01) {
            cell.update()
        }
    }

}