const MIN_BODY_DIAMETER = 5
const MAX_BODY_DIAMETER = 20

let tornado

function cart(r, t) {
    const x = r * cos(t)
    const y = r * sin(t)

    return [x, y]
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB)

    tornado = new Tornado(min(width, height)/2)
}

function draw() {
    background(0, 0, 10);
    translate(width / 2, height / 2)

    tornado.update()
    tornado.render()
}
