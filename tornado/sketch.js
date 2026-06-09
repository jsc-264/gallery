let b

function setup() {
    createCanvas(600, 600);
    b = new Body(100, 100, 20)
}

function draw() {
    background(50);
    translate(width / 2, height / 2)

    b.render()
}
