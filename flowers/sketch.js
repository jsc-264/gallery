let f

function setup() {
    createCanvas(500, 500);
    f = new Flower(100, 100, 50)
}

function draw() {
    background(220);
    f.show()
    f.grow()
}
