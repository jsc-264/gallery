const DIM = 10
let w
let coords = []

function setup() {
    createCanvas(500, 500);
    w = width / DIM

    background(220)
    for (let j = 0; j < DIM * 2; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = j % 2 == 0 ? w * i : (w * i) + w / 2
            const y = (w * j) / 2

            strokeWeight(5)
            point(x, y)
        }
    }
}

// function draw() {
//     background(220);
// }
