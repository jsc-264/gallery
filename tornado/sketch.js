let b

function setup() {
    createCanvas(600, 600);
    b = new Body(100, 0, 20)
    print(b.x, b.y)
}

function draw() {
    background(50);
    translate(width / 2, height / 2)

    b.render()
    b.update()
}
