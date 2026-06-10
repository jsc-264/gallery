let tornado

function cart(r, t) {
    const x = r * cos(t)
    const y = r * sin(t)

    return [x, y]
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    tornado = new Tornado(300)
}

function draw() {
    background(50);
    translate(width / 2, height / 2)

    tornado.update()
    tornado.render()
}
